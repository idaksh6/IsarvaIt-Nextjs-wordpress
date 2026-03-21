import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const response = await fetch('https://chat.isarva.in/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error calling Isarva AI API:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI', answer: 'Sorry, I encountered an error. Please try again.' },
      { status: 500 }
    );
  }
}
