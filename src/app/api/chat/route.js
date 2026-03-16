import { NextResponse } from 'next/server';
import { OpenAIEmbeddings, ChatOpenAI } from '@langchain/openai';
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';
import { createClient } from '@supabase/supabase-js';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence, RunnablePassthrough } from '@langchain/core/runnables';
import { Document } from '@langchain/core/documents';
import quickResponses from '../../lib/data/quick-responses.json';

// Helper function to check if message matches quick response patterns
function findQuickResponse(message) {
  const lowerMessage = message.toLowerCase().trim();
  
  // Check greetings only
  for (const greeting of quickResponses.greetings) {
    if (greeting.patterns.some(pattern => {
      // Exact match or message contains the pattern as a complete word
      const regex = new RegExp(`\\b${pattern}\\b`, 'i');
      return regex.test(lowerMessage) || lowerMessage === pattern;
    })) {
      return greeting.response;
    }
  }
  
  return null;
}

export async function POST(req) {
  try {
    const { message, history } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ response: "API Key is missing. Please configure OPENAI_API_KEY." }, { status: 500 });
    }

    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ response: "Supabase credentials are missing." }, { status: 500 });
    }

    // PRIORITY 1: Check quick responses (greetings, FAQs) - INSTANT
    const quickResponse = findQuickResponse(message);
    
    if (quickResponse) {
      // Stream the quick response with typing effect
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          // Send metadata about quick response
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ metadata: { cached: true, quick: true } })}\n\n`));
          
          // Send characters with typing delay
          for (let i = 0; i < quickResponse.length; i++) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: quickResponse[i] })}\n\n`));
            // Add typing delay (15ms per character)
            await new Promise(resolve => setTimeout(resolve, 15));
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    }

    // PRIORITY 2: Check Supabase cache
    // 1. Initialize Supabase and Vector Store
    const client = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Check cache first - if similar question was asked before, return cached answer
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });
    
    const questionEmbedding = await embeddings.embedQuery(message);
    
    // Search for similar cached questions (optional - skip if function doesn't exist)
    let cachedAnswers = null;
    let cacheError = null;
    
    try {
      const result = await client.rpc('search_qa_cache', {
        query_embedding: questionEmbedding,
        similarity_threshold: 0.85,
        match_count: 1
      });
      cachedAnswers = result.data;
      cacheError = result.error;
    } catch (err) {
      // Cache function might not exist yet - that's okay, continue without cache
      cacheError = err;
    }

    if (!cacheError && cachedAnswers && cachedAnswers.length > 0) {
      
      const cachedResponse = cachedAnswers[0].answer;
      
      // Stream the cached response with typing effect
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          // Send metadata about cache hit
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ metadata: { cached: true, similarity: cachedAnswers[0].similarity } })}\n\n`));
          
          // Send characters with typing delay
          for (let i = 0; i < cachedResponse.length; i++) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: cachedResponse[i] })}\n\n`));
            // Add typing delay (15ms per character)
            await new Promise(resolve => setTimeout(resolve, 15));
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    }

    const vectorStore = new SupabaseVectorStore(embeddings, {
      client,
      tableName: 'documents',
      queryName: 'match_documents',
    });

    const retriever = vectorStore.asRetriever();

    // 2. Initialize LLM
    const llm = new ChatOpenAI({
      modelName: 'gpt-4o',
      temperature: 0.7,
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    // 3. Define Prompt Template
    const template = `
      You are Isarva AI, the official assistant for Isarva (a premium web design & development agency).
      Answer the user's question clearly and professionally based ONLY on the following context. 
      If the information is not in the context, politely say that you don't have that specific information yet and suggest contacting the team.
      
      IMPORTANT RESPONSE RULES:
      - Keep responses CONCISE and to the point
      - Use **bold text** for headings and key points
      - Break content into short paragraphs
      - Use bullet points (•) for lists - list items only, NO detailed explanations for each
      - Maximum 3-4 sentences of explanation before lists
      - Don't over-explain - users can ask follow-up questions if needed
      - Format like professional, brief documentation
      
      CRITICAL DISTINCTIONS:
      - **Services** = What Isarva DOES (web development, mobile apps, design, etc.)
      - **Products** = Ready-made SOFTWARE that Isarva SELLS (HRMS, Billing Software, etc.)
      - If asked about "products", answer ONLY about products (software), NOT services
      - If asked about "services", answer ONLY about services, NOT products
      - Answer EXACTLY what was asked - don't mix or combine topics
      
      Context: {context}
      
      Question: {question}
      
      Answer (brief, well-formatted, answer ONLY what was asked):
    `;

    const prompt = PromptTemplate.fromTemplate(template);

    // 4. Create RAG Chain
    const chain = RunnableSequence.from([
      {
        context: retriever.pipe((docs) => docs.map((d) => d.pageContent).join('\n')),
        question: new RunnablePassthrough(),
      },
      prompt,
      llm,
      new StringOutputParser(),
    ]);

    // 5. Create a streaming response
    const encoder = new TextEncoder();
    let fullResponse = ''; // Collect full response for caching
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Send metadata about OpenAI query
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ metadata: { cached: false } })}\n\n`));
          
          const streamResponse = await chain.stream(message);
          
          for await (const chunk of streamResponse) {
            fullResponse += chunk;
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`));
          }
          
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          
          // Cache the Q&A pair in the background (optional - skip if table doesn't exist)
          if (fullResponse.trim()) {
            try {
              await client.from('qa_cache').insert({
                question: message,
                answer: fullResponse,
                question_embedding: questionEmbedding,
                created_at: new Date().toISOString(),
              });
            } catch (err) {
              // Cache save failed - that's okay, continue
            }
          }
        } catch (error) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: error.message })}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    // Provide a helpful error if the table or function is missing
    if (error.message?.includes('documents') || error.message?.includes('match_documents')) {
      return NextResponse.json({ 
        response: "I'm not quite ready yet! My database setup is incomplete. Please ensure you've run the SQL setup in your Supabase dashboard." 
      }, { status: 500 });
    }

    // Return a more specific error message
    return NextResponse.json({ 
      response: `I encountered an issue: ${error.message}. Please try again or contact support if this persists.` 
    }, { status: 500 });
  }
}
