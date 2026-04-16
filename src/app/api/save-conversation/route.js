import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req) {
  try {
    const { conversationId, messages, timestamp } = await req.json();

    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing Supabase credentials');
      return NextResponse.json({ 
        error: 'Server configuration error',
        details: 'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY'
      }, { status: 500 });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Upsert conversation (insert or update)
    const { error } = await supabase
      .from('conversations')
      .upsert({
        id: conversationId,
        messages: messages,
        updated_at: timestamp,
        message_count: messages.length,
      });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ 
        error: error.message,
        code: error.code,
        details: error.details 
      }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Save conversation error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      message: error.message 
    }, { status: 500 });
  }
}
