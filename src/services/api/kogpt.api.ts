const fetchKeyword = (prompt: string) => {
  return fetch('https://api.kakaobrain.com/v1/inference/kogpt/generation', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
    },
    body: JSON.stringify({
      prompt: `${prompt}이 글의 핵심 키워드는?:`,
      max_tokens: 10,
      temperature: 0.1,
      top_p: 0.1,
      n: 1,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error('fetch kogpt error');
      return res.json();
    })
    .catch((err) => console.log(err));
};

export default fetchKeyword;
