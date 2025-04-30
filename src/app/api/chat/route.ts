import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    console.log('Received chat request');
    const { messages } = await req.json();
    console.log('Request messages:', messages);
//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

    console.log('Making request to Groq API...');
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: messages,
        temperature: 0.7,
      }),
    });

    console.log('Groq API response status:', response.status);
    const data = await response.json();
    console.log('Groq API response:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('Groq API error:', data);
      return NextResponse.json(
        { error: 'Failed to get response from AI service' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 