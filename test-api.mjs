import { ChatOpenAI } from '@langchain/openai';
import { createClient } from '@supabase/supabase-js';

console.log('🧪 Testing API Connections...\n');

// Test OpenAI
console.log('1️⃣ Testing OpenAI API...');
try {
  const llm = new ChatOpenAI({
    modelName: 'gpt-4o',
    temperature: 0.7,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  
  const response = await llm.invoke('Say "OpenAI is working!"');
  
  console.log('✅ OpenAI Response:', response.content);
} catch (error) {
  console.error('❌ OpenAI Error:', error.message);
  if (error.status === 401) {
    console.error('   → Invalid API Key');
  } else if (error.status === 429) {
    console.error('   → Rate limit or quota exceeded');
  }
}

// Test Supabase
console.log('\n2️⃣ Testing Supabase Connection...');
try {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
  
  const { data, error } = await supabase
    .from('documents')
    .select('count')
    .limit(1);
  
  if (error) {
    console.error('❌ Supabase Error:', error.message);
  } else {
    console.log('✅ Supabase Connected - Can access documents table');
  }
} catch (error) {
  console.error('❌ Supabase Error:', error.message);
}

console.log('\n✨ Test Complete');
