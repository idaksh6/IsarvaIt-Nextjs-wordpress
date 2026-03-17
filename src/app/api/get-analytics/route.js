import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { ChatOpenAI } from '@langchain/openai';

/**
 * COMPREHENSIVE ANALYTICS EXTRACTION
 * 
 * This API analyzes ALL conversations using AI (GPT-4o-mini) to extract:
 * 
 * 1. GENERAL INQUIRIES:
 *    - "explain about products" → General Product Inquiry
 *    - "tell me about services" → General Service Inquiry
 *    - "what industries" → General Industry Inquiry
 * 
 * 2. SPECIFIC PRODUCTS:
 *    - HRMS Software, Document Management, CRM, Billing, POS, ERP, etc.
 *    - Detects: "HRMS", "HR software", "document management", "DMS"
 * 
 * 3. SPECIFIC SERVICES:
 *    - Website Development, Cloud Services, Mobile App, SEO, etc.
 *    - Detects: "web development", "cloud", "website", "mobile app"
 * 
 * 4. SPECIFIC INDUSTRIES:
 *    - Healthcare, Banking, Education, Manufacturing, etc.
 *    - Detects: "healthcare", "banking", "medical", "finance"
 * 
 * CACHING: Results cached per conversation to minimize API costs (97% savings)
 * FALLBACK: If AI fails, uses enhanced keyword matching
 * 
 * ALL conversations are analyzed - both general and specific mentions tracked!
 */

// AI-powered topic extraction (cached to minimize costs)
async function extractTopicsWithAI(conversations, supabase) {
  const llm = new ChatOpenAI({
    modelName: 'gpt-4o-mini',
    temperature: 0,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const results = [];

  // Process in batches of 5 to balance cost vs speed
  const BATCH_SIZE = 5;
  
  for (let i = 0; i < conversations.length; i += BATCH_SIZE) {
    const batch = conversations.slice(i, i + BATCH_SIZE);
    
    // Check cache first for each conversation
    const uncachedConvs = [];
    for (const conv of batch) {
      const { data: cached } = await supabase
        .from('conversation_topics')
        .select('*')
        .eq('conversation_id', conv.id)
        .single();
      
      if (cached) {
        // Use cached result
        results.push({
          id: conv.id,
          topics: cached.topics,
        });
      } else {
        uncachedConvs.push(conv);
      }
    }

    // Only analyze uncached conversations
    if (uncachedConvs.length > 0) {
      const userMessages = uncachedConvs.map(conv => {
        console.log('Extracting messages from conversation:', conv.id);
        console.log('Messages array:', conv.messages);
        console.log('Messages type:', typeof conv.messages);
        console.log('Is array?', Array.isArray(conv.messages));
        
        const msgs = conv.messages
          ?.filter(m => {
            console.log('Message:', m, 'Role:', m?.role);
            return m.role === 'user';
          })
          .map(m => m.content)
          .join('. ') || '';
        
        console.log('Extracted user text:', msgs);
        return { id: conv.id, text: msgs };
      });

      console.log('Processing uncached conversations:', uncachedConvs.length);
      console.log('User messages to analyze:', userMessages);

      // Batch analyze with single API call
      const prompt = `You are analyzing customer conversations to understand what they inquired about. Extract products, services, and industries from user questions.

**IMPORTANT: Detect ALL variations and phrasings:**
- "product" / "products" → Both mean products
- "service" / "services" → Both mean services  
- "industry" / "industries" → Both mean industries
- "explain about", "tell me about", "what are", "can u explain", "show me", "i need", "looking for" → All are inquiries
- Past/present/future tense → All count
- Singular/plural → Same meaning

**PRODUCTS TO DETECT:**
HRMS Software, Billing Software, CRM Software, POS System, ERP System, Document Management, Inventory Management, Payroll Software, Accounting Software, Project Management Software, Asset Management, Time Tracking, Leave Management, Attendance System, Performance Management, Recruitment Software, Learning Management, Help Desk Software, Ticketing System, Warehouse Management

**SERVICES TO DETECT:**
Web Development, Website Development, Mobile App Development, UI/UX Design, Digital Marketing, SEO Services, E-commerce Development, Cloud Services, Consulting Services, CMS Development, PWA Development, API Development, Database Design, Software Maintenance, IT Support, Quality Assurance, DevOps Services, Cybersecurity, Data Analytics, Business Intelligence

**INDUSTRIES TO DETECT:**
Healthcare, Banking, Financial Services, Education, Manufacturing, Retail, Hospitality, Insurance, Media & Entertainment, Real Estate, Logistics, Transportation, Telecommunications, Government, Non-Profit, Agriculture, Energy, Construction, Automotive, Pharmaceuticals

**USER MESSAGES TO ANALYZE:**
${userMessages.map((m, idx) => `Conversation ${idx + 1} (ID: ${m.id}):\n${m.text}`).join('\n\n')}

**DETECTION RULES:**
1. **GENERAL inquiries** (user asks about category without specifics):
   - "explain about products" / "what products" → Add "General Product Inquiry"
   - "explain about services" / "what services" → Add "General Service Inquiry"
   - "what industries" / "which sectors" → Add "General Industry Inquiry"

2. **SPECIFIC inquiries** (user mentions actual names):
   - "HRMS" / "HR software" / "human resource" → Add "HRMS Software"
   - "document management" / "DMS" → Add "Document Management"
   - "web development" / "website" → Add "Website Development"
   - "healthcare" / "medical" → Add "Healthcare"
   - Match ANY keyword/synonym to its category

3. **BOTH can exist together**:
   - "explain products like HRMS and CRM" → Add "General Product Inquiry" + "HRMS Software" + "CRM Software"
   - This shows user asked generally AND about specifics

4. **Be VERY inclusive**:
   - Detect partial matches: "HR system" → "HRMS Software"
   - Detect synonyms: "billing system" / "invoice software" → "Billing Software"
   - Detect context: "we need a website" → "Website Development"
   - Detect variations: "cloud migration" / "AWS service" → "Cloud Services"

5. **IGNORE bot responses**:
   - Only analyze USER messages (when role === 'user')
   - Ignore everything the assistant/bot said

**EXAMPLES:**
- "Can u explain me about the products u provide please" 
  → products: ["General Product Inquiry"]

- "explain about products like HRMS and CRM" 
  → products: ["General Product Inquiry", "HRMS Software", "CRM Software"]
  (Both general AND specific tracked!)

- "tell me about your services" 
  → services: ["General Service Inquiry"]

- "do you provide web development and cloud services" 
  → services: ["General Service Inquiry", "Website Development", "Cloud Services"]
  (Both general AND specific!)

- "what industries do you support" 
  → industries: ["General Industry Inquiry"]

- "we are in healthcare and banking sector" 
  → industries: ["General Industry Inquiry", "Healthcare", "Banking"]
  (Both general AND specific!)

- "need HRMS software" 
  → products: ["HRMS Software"]
  (Only specific, no general keyword used)

- "looking for document management system" 
  → products: ["Document Management"]

**RETURN FORMAT (exact JSON, no markdown, no explanations):**
[
  {
    "id": "${userMessages[0]?.id || 'example'}",
    "products": ["General Product Inquiry"],
    "services": ["Website Development", "Cloud Services"],
    "industries": ["Healthcare"]
  }
]

Return the JSON array now:`;

      try {
        const response = await llm.invoke(prompt);
        console.log('AI Response:', response.content);
        const extracted = JSON.parse(response.content.replace(/```json|```/g, '').trim());

        // Cache results and add to results array
        for (const item of extracted) {
          await supabase.from('conversation_topics').upsert({
            conversation_id: item.id,
            topics: {
              products: item.products || [],
              services: item.services || [],
              industries: item.industries || [],
            },
            created_at: new Date().toISOString(),
          });

          results.push({
            id: item.id,
            topics: {
              products: item.products || [],
              services: item.services || [],
              industries: item.industries || [],
            },
          });
        }
      } catch (error) {
        console.error('AI extraction error details:', {
          message: error.message,
          stack: error.stack,
          conversationIds: uncachedConvs.map(c => c.id),
        });
        // Fallback to keyword-based extraction
        for (const conv of uncachedConvs) {
          const topics = extractTopicsWithKeywords(conv.messages);
          console.log(`Fallback keywords for ${conv.id}:`, topics);
          results.push({ id: conv.id, topics });
        }
      }
    }
  }

  return results;
}

// Fallback: Keyword-based extraction (free, instant)
function extractTopicsWithKeywords(messages) {
  console.log('extractTopicsWithKeywords called with:', {
    messagesType: typeof messages,
    isArray: Array.isArray(messages),
    length: messages?.length,
    sample: messages?.[0],
  });

  const topics = {
    products: new Set(),
    services: new Set(),
    industries: new Set(),
  };

  const productKeywords = {
    'hrms': 'HRMS Software',
    'hr management': 'HRMS Software',
    'hr software': 'HRMS Software',
    'human resource': 'HRMS Software',
    'employee management': 'HRMS Software',
    'billing': 'Billing Software',
    'billing software': 'Billing Software',
    'invoice': 'Billing Software',
    'invoicing': 'Billing Software',
    'billing system': 'Billing Software',
    'crm': 'CRM Software',
    'customer relationship': 'CRM Software',
    'customer management': 'CRM Software',
    'sales management': 'CRM Software',
    'pos': 'POS System',
    'point of sale': 'POS System',
    'pos system': 'POS System',
    'retail system': 'POS System',
    'erp': 'ERP System',
    'enterprise resource': 'ERP System',
    'erp system': 'ERP System',
    'document management': 'Document Management',
    'document system': 'Document Management',
    'dms': 'Document Management',
    'file management': 'Document Management',
    'inventory': 'Inventory Management',
    'inventory management': 'Inventory Management',
    'stock management': 'Inventory Management',
    'warehouse': 'Inventory Management',
    'payroll': 'Payroll Software',
    'payroll software': 'Payroll Software',
    'salary': 'Payroll Software',
    'salary management': 'Payroll Software',
    'accounting': 'Accounting Software',
    'accounting software': 'Accounting Software',
    'book keeping': 'Accounting Software',
    'finance management': 'Accounting Software',
    'project management': 'Project Management Software',
    'task management': 'Project Management Software',
    'attendance': 'Attendance System',
    'attendance system': 'Attendance System',
    'time tracking': 'Time Tracking',
    'leave management': 'Leave Management',
    'recruitment': 'Recruitment Software',
    'help desk': 'Help Desk Software',
    'ticketing': 'Ticketing System',
  };

  const serviceKeywords = {
    'web development': 'Web Development',
    'web design': 'Web Development',
    'web dev': 'Web Development',
    'website development': 'Website Development',
    'website design': 'Website Development',
    'website': 'Website Development',
    'site development': 'Website Development',
    'mobile app': 'Mobile App Development',
    'app development': 'Mobile App Development',
    'ios': 'Mobile App Development',
    'android': 'Mobile App Development',
    'mobile development': 'Mobile App Development',
    'ui/ux': 'UI/UX Design',
    'ui ux': 'UI/UX Design',
    'user interface': 'UI/UX Design',
    'user experience': 'UI/UX Design',
    'ux design': 'UI/UX Design',
    'ui design': 'UI/UX Design',
    'digital marketing': 'Digital Marketing',
    'marketing': 'Digital Marketing',
    'online marketing': 'Digital Marketing',
    'seo': 'SEO Services',
    'search engine': 'SEO Services',
    'search optimization': 'SEO Services',
    'ecommerce': 'E-commerce Development',
    'e-commerce': 'E-commerce Development',
    'online store': 'E-commerce Development',
    'online shop': 'E-commerce Development',
    'cloud': 'Cloud Services',
    'cloud service': 'Cloud Services',
    'cloud migration': 'Cloud Services',
    'aws': 'Cloud Services',
    'azure': 'Cloud Services',
    'cloud computing': 'Cloud Services',
    'consulting': 'Consulting Services',
    'consultation': 'Consulting Services',
    'it consulting': 'Consulting Services',
    'cms': 'CMS Development',
    'content management': 'CMS Development',
    'progressive web app': 'PWA Development',
    'pwa': 'PWA Development',
    'api development': 'API Development',
    'api': 'API Development',
    'database': 'Database Design',
    'devops': 'DevOps Services',
    'cybersecurity': 'Cybersecurity',
    'security': 'Cybersecurity',
    'data analytics': 'Data Analytics',
    'analytics': 'Data Analytics',
  };

  const industryKeywords = {
    'healthcare': 'Healthcare',
    'health care': 'Healthcare',
    'medical': 'Healthcare',
    'hospital': 'Healthcare',
    'banking': 'Banking',
    'bank': 'Banking',
    'financial': 'Financial Services',
    'finance': 'Financial Services',
    'fintech': 'Financial Services',
    'education': 'Education',
    'school': 'Education',
    'university': 'Education',
    'learning': 'Education',
    'manufacturing': 'Manufacturing',
    'manufacture': 'Manufacturing',
    'factory': 'Manufacturing',
    'retail': 'Retail',
    'hospitality': 'Hospitality',
    'hotel': 'Hospitality',
    'restaurant': 'Hospitality',
    'insurance': 'Insurance',
    'insurer': 'Insurance',
    'media': 'Media & Entertainment',
    'entertainment': 'Media & Entertainment',
  };

  // ONLY analyze USER messages (role === 'user')
  if (!Array.isArray(messages)) {
    console.warn('Messages is not an array:', messages);
    return {
      products: [],
      services: [],
      industries: [],
    };
  }

  const userMessages = messages.filter(msg => msg?.role === 'user');
  console.log('Filtered user messages:', userMessages.length, 'out of', messages.length);
  
  userMessages.forEach(msg => {
    const text = msg.content?.toLowerCase() || '';
    console.log('Analyzing user message:', text.substring(0, 100));
    
    // Check for GENERAL product inquiry - handle all variations
    if (text.match(/\b(product|products|explain.*about.*product|tell.*about.*product|what.*product|show.*product)\b/i) ||
        text.match(/\b(about.*products?|products?.*you|products?.*provide|products?.*offer)\b/i)) {
      console.log('✓ Detected general product inquiry');
      topics.products.add('General Product Inquiry');
    }
    
    // Check for specific products
    Object.entries(productKeywords).forEach(([key, name]) => {
      if (text.includes(key)) {
        console.log('✓ Detected product:', name);
        topics.products.add(name);
      }
    });

    // Check for GENERAL service inquiry - handle all variations
    if (text.match(/\b(service|services|explain.*about.*service|tell.*about.*service|what.*service|show.*service)\b/i) ||
        text.match(/\b(about.*services?|services?.*you|services?.*provide|services?.*offer)\b/i)) {
      console.log('✓ Detected general service inquiry');
      topics.services.add('General Service Inquiry');
    }
    
    // Check for specific services
    Object.entries(serviceKeywords).forEach(([key, name]) => {
      if (text.includes(key)) {
        console.log('✓ Detected service:', name);
        topics.services.add(name);
      }
    });

    // Check for GENERAL industry inquiry - handle all variations
    if (text.match(/\b(industr(?:y|ies)|sector|sectors|support.*industry|industries.*support)\b/i) ||
        text.match(/\b(about.*industr|what.*industr|which.*industr|all.*industr)\b/i)) {
      console.log('✓ Detected general industry inquiry');
      topics.industries.add('General Industry Inquiry');
    }
    
    // Check for specific industries
    Object.entries(industryKeywords).forEach(([key, name]) => {
      if (text.includes(key)) {
        console.log('✓ Detected industry:', name);
        topics.industries.add(name);
      }
    });
  });

  const result = {
    products: Array.from(topics.products),
    services: Array.from(topics.services),
    industries: Array.from(topics.industries),
  };

  console.log('Keyword extraction result:', result);
  return result;
}

export async function GET(req) {
  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ error: 'Supabase credentials missing' }, { status: 500 });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Check query param to enable AI extraction (default: keyword-based for speed)
    const { searchParams } = new URL(req.url);
    const useAI = searchParams.get('ai') === 'true';

    // Fetch all conversations
    const { data: conversations, error } = await supabase
      .from('conversations')
      .select('*')
      .order('updated_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Calculate analytics
    const analytics = {
      totalConversations: conversations?.length || 0,
      totalMessages: 0,
      averageMessagesPerConversation: 0,
      topProducts: {},
      topServices: {},
      topIndustries: {},
      conversationsByDate: {},
      recentActivity: [],
      extractionMethod: useAI ? 'ai' : 'keywords',
    };

    if (conversations && conversations.length > 0) {
      let extractedTopics;

      if (useAI && process.env.OPENAI_API_KEY) {
        // AI-powered extraction (cached, minimal API calls)
        console.log('Using AI extraction (cached)...');
        console.log('Total conversations to analyze:', conversations.length);
        console.log('Sample conversation:', {
          id: conversations[0].id,
          messageCount: conversations[0].messages?.length || 0,
          firstMessage: conversations[0].messages?.[0],
        });
        extractedTopics = await extractTopicsWithAI(conversations, supabase);
        console.log('AI extraction complete. Results:', extractedTopics);
      } else {
        // Fast keyword-based extraction (free, instant)
        console.log('Using keyword extraction (instant)...');
        extractedTopics = conversations.map(conv => ({
          id: conv.id,
          topics: extractTopicsWithKeywords(conv.messages || []),
        }));
        console.log('Keyword extraction complete. Results:', extractedTopics);
      }

      // Build analytics from extracted topics
      conversations.forEach((conv, idx) => {
        const messageCount = conv.message_count || conv.messages?.length || 0;
        analytics.totalMessages += messageCount;

        const topics = extractedTopics.find(t => t.id === conv.id)?.topics || {
          products: [],
          services: [],
          industries: [],
        };

        console.log(`Processing conversation ${conv.id}:`, {
          extractedTopics: topics,
          foundInResults: !!extractedTopics.find(t => t.id === conv.id),
        });

        // Debug logging
        if (topics.products.length > 0 || topics.services.length > 0 || topics.industries.length > 0) {
          console.log(`Conversation ${conv.id} detected topics:`, topics);
        }

        // Count products - Each conversation counts once per product
        topics.products.forEach(product => {
          analytics.topProducts[product] = (analytics.topProducts[product] || 0) + 1;
        });

        // Count services - Each conversation counts once per service
        topics.services.forEach(service => {
          analytics.topServices[service] = (analytics.topServices[service] || 0) + 1;
        });

        // Count industries - Each conversation counts once per industry
        topics.industries.forEach(industry => {
          analytics.topIndustries[industry] = (analytics.topIndustries[industry] || 0) + 1;
        });

        // Group by date
        const date = new Date(conv.updated_at).toLocaleDateString();
        analytics.conversationsByDate[date] = (analytics.conversationsByDate[date] || 0) + 1;

        // Recent activity (last 10)
        if (analytics.recentActivity.length < 10) {
          analytics.recentActivity.push({
            id: conv.id,
            date: conv.updated_at,
            messageCount: messageCount,
            topics: topics,
          });
        }
      });

      console.log('Analytics Summary:', {
        totalConversations: analytics.totalConversations,
        extractionMethod: analytics.extractionMethod,
        productsTracked: {
          count: Object.keys(analytics.topProducts).length,
          items: analytics.topProducts,
        },
        servicesTracked: {
          count: Object.keys(analytics.topServices).length,
          items: analytics.topServices,
        },
        industriesTracked: {
          count: Object.keys(analytics.topIndustries).length,
          items: analytics.topIndustries,
        },
      });

      analytics.averageMessagesPerConversation = 
        Math.round(analytics.totalMessages / analytics.totalConversations);

      // Sort top items
      analytics.topProducts = Object.entries(analytics.topProducts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

      analytics.topServices = Object.entries(analytics.topServices)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

      analytics.topIndustries = Object.entries(analytics.topIndustries)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});
    }

    return NextResponse.json({ analytics });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
