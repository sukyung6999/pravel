const getClientSideToken = (): Promise<string> => {
  return fetch('/api/token', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error('유효한 토큰이 존재하지 않습니다');
      const result = res.json();

      return result;
    })
    .then((data) => {
      if (!data.token) throw new Error('토큰이 응답에 포함되지 않았습니다');
      return data.token;
    });
};

export default getClientSideToken;
