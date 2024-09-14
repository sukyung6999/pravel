import getClientSideToken from './token.api';

export const origin = process.env.NEXT_PUBLIC_DEV_BASE_URL;
export const baseURL = '/api';

export const setDefaultHeader = (token: boolean = true) => {
  let tokenkey;

  if (token) tokenkey = getClientSideToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${tokenkey}` } : {}),
  };
};

export const setAuthorization = (email: string, token: string) => {
  if (typeof window === 'undefined') return;

  localStorage.setItem('email', email);
  localStorage.setItem('token', token);
};

export const removeAuthorization = () => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem('email');
  localStorage.removeItem('token');
};

export const getAuthorization = () => {
  if (typeof window === 'undefined') return { email: '', token: '' };

  const email = localStorage.getItem('email') || '';
  const token = localStorage.getItem('token') || '';

  return { email, token };
};
