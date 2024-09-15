import { getToken } from '@/lib/auth';

import getClientSideToken from './token.api';

export const origin = process.env.NEXT_PUBLIC_DEV_BASE_URL;
export const baseURL = `${origin}/api`;

export const setDefaultHeader = async (token: boolean = true) => {
  let tokenkey;

  if (token) {
    if (typeof window === 'undefined') {
      tokenkey = await getToken();
    } else {
      tokenkey = await getClientSideToken();
    }
  }

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
