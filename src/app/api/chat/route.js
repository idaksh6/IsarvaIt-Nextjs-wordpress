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

// Helper function to detect question type and filter context
function detectQuestionType(message) {
  const lowerMessage = message.toLowerCase();
  
  // Product keywords - looking for software/solutions to buy
  const productKeywords = [
    'product', 'products', 'software', 'solution', 'solutions',
    'hrms', 'billing', 'crm', 'pos', 'erp',
    'buy', 'purchase', 'license', 'pricing',
    'ready-made', 'off-the-shelf'
  ];
  
  // Service keywords - looking for custom development/work
  const serviceKeywords = [
    'service', 'services', 'develop', 'development',
    'design', 'create', 'build', 'custom',
    'website', 'web development', 'mobile app',
    'ui/ux', 'digital marketing', 'seo',
    'how you work', 'what you do', 'your team'
  ];
  
  // Industry keywords
  const industryKeywords = [
    'industry', 'industries', 'sector', 'sectors',
    'healthcare', 'banking', 'finance', 'financial',
    'education', 'manufacturing', 'retail', 'ecommerce',
    'hospitality', 'real estate', 'logistics'
  ];
  
  // Count matches
  const productScore = productKeywords.filter(kw => lowerMessage.includes(kw)).length;
  const serviceScore = serviceKeywords.filter(kw => lowerMessage.includes(kw)).length;
  const industryScore = industryKeywords.filter(kw => lowerMessage.includes(kw)).length;
  
  // Determine type based on highest score
  if (productScore > serviceScore && productScore > industryScore) {
    return 'products';
  } else if (serviceScore > productScore && serviceScore > industryScore) {
    return 'services';
  } else if (industryScore > productScore && industryScore > serviceScore) {
    return 'industries';
  }
  
  return null; // Mixed or unclear
}

// Filter documents based on question type
function filterDocumentsByType(docs, questionType) {
  if (!questionType) return docs; // If unclear, return all
  
  return docs.filter(doc => {
    const sourceUrl = doc.metadata?.page_url || doc.metadata?.source || '';
    const lowerUrl = sourceUrl.toLowerCase();
    
    // Filter based on URL pattern
    if (questionType === 'products') {
      return lowerUrl.includes('/product/');
    } else if (questionType === 'services') {
      return lowerUrl.includes('/service/');
    } else if (questionType === 'industries') {
      return lowerUrl.includes('/industry/');
    }
    
    return true;
  });
}

// Extract key entities (product/service/industry names) from question
function extractKeyEntities(message) {
  const lowerMessage = message.toLowerCase();
  
  // Common product names
  const products = [
    'hrms', 'billing software', 'billing', 'crm', 'pos', 'erp',
    'document management', 'inventory management', 'payroll',
    'accounting software', 'project management', 'attendance system'
  ];
  
  // Common service names
  const services = [
    'web development', 'mobile app', 'ui/ux design', 'digital marketing',
    'seo', 'cloud solutions', 'api integration', 'ecommerce development',
    'custom software', 'cms development'
  ];
  
  // Common industry names
  const industries = [
    'healthcare', 'banking', 'finance', 'education', 'manufacturing',
    'retail', 'ecommerce', 'hospitality', 'real estate', 'logistics'
  ];
  
  const found = [];
  
  // Check for products
  products.forEach(product => {
    if (lowerMessage.includes(product)) {
      found.push(product);
    }
  });
  
  // Check for services
  services.forEach(service => {
    if (lowerMessage.includes(service)) {
      found.push(service);
    }
  });
  
  // Check for industries
  industries.forEach(industry => {
    if (lowerMessage.includes(industry)) {
      found.push(industry);
    }
  });
  
  return found;
}

// Check if two questions are asking about the same entities
function isSameEntityQuestion(question1, question2) {
  const entities1 = extractKeyEntities(question1);
  const entities2 = extractKeyEntities(question2);
  
  // If no specific entities found in either, consider them different
  if (entities1.length === 0 || entities2.length === 0) {
    return false;
  }
  
  // Check if there's any overlap in entities
  const overlap = entities1.filter(e => entities2.includes(e));
  
  // Must have at least one matching entity
  return overlap.length > 0;
}

export async function POST(req) {
  try {
    const { message, history } = await req.json();

    if (typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ response: 'Please enter a message.' }, { status: 400 });
    }

    // Quick responses need no external services — handle first so greetings work even if keys are missing/misconfigured
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

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ response: "API Key is missing. Please configure OPENAI_API_KEY." }, { status: 500 });
    }

    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ response: "Supabase credentials are missing." }, { status: 500 });
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
        similarity_threshold: 0.90, // Increased from 0.85 to be more strict
        match_count: 3 // Get top 3 to check entity matching
      });
      cachedAnswers = result.data;
      cacheError = result.error;
    } catch (err) {
      // Cache function might not exist yet - that's okay, continue without cache
      cacheError = err;
    }

    if (!cacheError && cachedAnswers && cachedAnswers.length > 0) {
      // Smart cache validation: Check if the cached question asks about the same entities
      let validCachedAnswer = null;
      
      for (const cached of cachedAnswers) {
        // Validate that both questions are asking about the same specific entities
        if (isSameEntityQuestion(message, cached.question)) {
          validCachedAnswer = cached;
          console.log(`Cache HIT: "${message}" matched with "${cached.question}" (similarity: ${cached.similarity})`);
          break;
        } else {
          console.log(`Cache SKIP: "${message}" vs "${cached.question}" - different entities`);
        }
      }
      
      if (validCachedAnswer) {
        const cachedResponse = validCachedAnswer.answer;
        
        // Stream the cached response with typing effect
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
          async start(controller) {
            // Send metadata about cache hit
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ metadata: { cached: true, similarity: validCachedAnswer.similarity } })}\n\n`));
            
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
    }

    const vectorStore = new SupabaseVectorStore(embeddings, {
      client,
      tableName: 'documents',
      queryName: 'match_documents',
    });

    const retriever = vectorStore.asRetriever();

    // 2. Initialize LLM
    const llm = new ChatOpenAI({
      modelName: 'gpt-4o-mini', // 15x cheaper than gpt-4o!
      temperature: 0.7,
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    // Detect question type for smart filtering
    const questionType = detectQuestionType(message);
    console.log(`Question type detected: ${questionType || 'general'}`);

    // 3. Define Prompt Template
    const template = `
      You are Isarva AI, the official assistant for Isarva (a premium web design & development agency).
      
      🚨 CRITICAL: READ THE QUESTION CAREFULLY FIRST! 🚨
      STEP 1: Identify what the user is asking about:
      - Keywords like "product", "software", "buy", "solution", "HRMS", "billing software" = PRODUCTS QUESTION
      - Keywords like "service", "development", "design", "how you work", "build", "create" = SERVICES QUESTION
      - Keywords like "industry", "sector", "healthcare", "banking", "education" = INDUSTRIES QUESTION
      
      STEP 2: Filter the context to ONLY use information matching the question type:
      - If PRODUCTS question → Use ONLY context with URLs containing "/product/"
      - If SERVICES question → Use ONLY context with URLs containing "/service/"
      - If INDUSTRIES question → Use ONLY context with URLs containing "/industry/"
      
      STEP 3: Answer based on filtered context only.
      
      ⚠️ ABSOLUTE RULES - BREAKING THESE IS FORBIDDEN:
      
      **SERVICES vs PRODUCTS DISTINCTION:**
      - **SERVICES** = What Isarva DOES for clients (custom development, design work, consulting)
        Examples: Web Development, Mobile App Development, UI/UX Design, Digital Marketing
        URL Pattern: /service/
        
      - **PRODUCTS** = Ready-made SOFTWARE that clients can BUY/LICENSE from Isarva
        Examples: HRMS Software, Billing Software, CRM Software, POS Systems
        URL Pattern: /product/
        
      - **INDUSTRIES** = Sectors/verticals Isarva serves
        Examples: Healthcare, Banking, Education, Manufacturing, Retail
        URL Pattern: /industry/
      
      ❌ WRONG ANSWER EXAMPLE:
      User asks: "What products do you have?"
      Bad Answer: "We offer web development, mobile app development..." ← THIS IS SERVICES, NOT PRODUCTS!
      
      ✅ CORRECT ANSWER EXAMPLE:
      User asks: "What products do you have?"
      Good Answer: "We offer software products including HRMS, Billing Software, CRM..." ← CORRECT!
      
      **MANDATORY FILTERING:**
      1. Read the question and identify the topic (products/services/industries)
      2. Look at the Source URLs in the context
      3. IGNORE any context that doesn't match the question type
      4. If user asks about products and context only has /service/ URLs → Say "I found information about our services, but if you're looking for our software products, [view our products](https://isarvait.vercel.app/products)"
      
      FORMATTING RULES:
      - Keep responses CONCISE and to the point
      - Use **bold text** for headings and key points
      - Break content into short paragraphs
      - Use bullet points (•) for lists - list items only, NO detailed explanations
      - Maximum 3-4 sentences of explanation before lists
      - Format like professional, brief documentation
      
      LINK PLACEMENT (MANDATORY):
      1. ALWAYS end your response with relevant source links
      2. Use markdown format: [descriptive text](URL)
      3. Extract URLs from the "Source:" lines in the context
      4. Match link topic to question topic:
         - Products question → Link to /product/ URLs
         - Services question → Link to /service/ URLs
         - Industries question → Link to /industry/ URLs
      5. If no specific page URL is found, ALWAYS end with: "[Contact us](https://isarvait.vercel.app/contact)"
      6. NEVER show raw URLs - always format as clickable links
      
      Context with Sources (URLs are after "Source:"): 
      {context}
      
      Question: {question}
      
      REMINDER: Check if the question is about PRODUCTS, SERVICES, or INDUSTRIES. Only use matching context!
      
      Answer (MUST include relevant links at the end):
    `;

    const prompt = PromptTemplate.fromTemplate(template);

    // 4. Create RAG Chain
    const chain = RunnableSequence.from([
      {
        context: retriever.pipe((docs) => {
          // SMART FILTERING: Filter documents based on question type
          const filteredDocs = filterDocumentsByType(docs, questionType);
          
          console.log(`Total docs retrieved: ${docs.length}, After filtering: ${filteredDocs.length}`);
          
          // If filtering removed all docs, inform user
          if (filteredDocs.length === 0 && docs.length > 0) {
            return `No specific ${questionType} information found in the knowledge base, but here's what we have:\n\n` + 
              docs.slice(0, 2).map((d) => {
                const sourceUrl = d.metadata?.page_url || d.metadata?.source || '';
                return `Content: ${d.pageContent}\nSource: ${sourceUrl}`;
              }).join('\n\n---\n\n');
          }
          
          // Include both content and source URLs from filtered docs
          return filteredDocs.map((d) => {
            const sourceUrl = d.metadata?.page_url || d.metadata?.source || '';
            return `Content: ${d.pageContent}\nSource: ${sourceUrl}`;
          }).join('\n\n---\n\n');
        }),
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
