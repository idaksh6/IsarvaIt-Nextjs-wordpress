import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(req) {
  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ error: 'Supabase credentials missing' }, { status: 500 });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Fetch all conversations ordered by most recent
    const { data: conversations, error } = await supabase
      .from('conversations')
      .select('*')
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ conversations: conversations || [] });
  } catch (error) {
    console.error('Get conversations error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
