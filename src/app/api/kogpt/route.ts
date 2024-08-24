import { NextRequest, NextResponse } from 'next/server';

interface KoGPTRequest {
  prompt: string;
}

interface KoGPTResponse {
  // KakaoBrain API 응답의 실제 구조에 맞게 이 인터페이스를 조정하세요
  generations: Array<{ text: string }>;
}

export default async function POST(request: NextRequest) {
  const { prompt }: KoGPTRequest = await request.json();

  try {
    const response = await fetch(
      'https://api.kakaobrain.com/v1/inference/kogpt/generation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
        },
        body: JSON.stringify({
          prompt,
          max_tokens: 1,
          temperature: 0.3,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    const data: KoGPTResponse = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error calling KoGPT API:', error);
    return NextResponse.json(
      { error: 'Error calling KoGPT API' },
      { status: 500 },
    );
  }
}
