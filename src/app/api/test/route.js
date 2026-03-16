import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasOpenAI: !!process.env.OPENAI_API_KEY,
    hasSupabaseURL: !!process.env.SUPABASE_URL,
    hasSupabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    openAIKeyPrefix: process.env.OPENAI_API_KEY?.substring(0, 10) + '...',
    supabaseURL: process.env.SUPABASE_URL,
  });
}
