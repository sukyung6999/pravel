import {
  AuthRequest,
  JoinForm,
  LoginForm,
  LoginResponse,
  User,
} from '@/types/auth.type';

import { baseURL, origin, setDefaultHeader } from '.';

const AUTH = '/auth';

export const verifyUser = async (): Promise<boolean> =>
  fetch(`${origin}${baseURL}${AUTH}/verify`, {
    headers: await setDefaultHeader(),
    next: {
      tags: ['auth', 'token'],
      revalidate: 60 * 60,
    },
  }).then((res) => {
    if (!res.ok) {
      return res.json().then((error) =>
        Promise.reject({
          ...error,
          code: res.status,
        }),
      );
    }

    return res.json();
  });

export const fetchUser = async (): Promise<User> => {
  return fetch(`${origin}${baseURL}${AUTH}`, {
    headers: await setDefaultHeader(),
    next: {
      tags: ['auth', 'user'],
      revalidate: 60 * 60 * 24,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });
};

export const login = async (form: LoginForm): Promise<LoginResponse> =>
  fetch(`${origin}${baseURL}${AUTH}/login`, {
    method: 'POST',
    headers: {
      ...(await setDefaultHeader(false)),
      Authorization: `Basic ${btoa(`${form.email}:${form.password}`)}`,
    },
  }).then((res) => {
    if (!res.ok) {
      return res.json().then((error) =>
        Promise.reject({
          ...error,
          code: res.status,
        }),
      );
    }

    return res.json();
  });

export const logout = async ({ email }: AuthRequest): Promise<void> =>
  fetch(`${baseURL}${AUTH}/${email}`, {
    method: 'DELETE',
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      return res.json().then(Promise.reject.bind(Promise));
    }

    return res.json();
  });

export const join = async (form: JoinForm): Promise<void> =>
  fetch(`${baseURL}${AUTH}/join`, {
    method: 'POST',
    body: JSON.stringify(form),
    headers: await setDefaultHeader(false),
  }).then((res) => {
    if (!res.ok) {
      return res.json().then(Promise.reject.bind(Promise));
    }

    return undefined;
  });

export const duplicateId = (id: string): Promise<boolean> =>
  fetch(`${baseURL}${AUTH}/checkid/${id}`).then((res) => {
    if (!res.ok) {
      return res.json().then(Promise.reject.bind(Promise));
    }

    return res.json();
  });

export const updateNickname = async (nickname: string): Promise<void> =>
  fetch(`${origin}${baseURL}${AUTH}/nickname`, {
    method: 'PUT',
    headers: await setDefaultHeader(),
    body: nickname,
  }).then((res) => {
    if (!res.ok) {
      return res.json().then(Promise.reject.bind(Promise));
    }

    return res.json();
  });

export const checkPassword = async (password: string): Promise<boolean> =>
  fetch(`${origin}${baseURL}${AUTH}/check-password`, {
    method: 'POST',
    headers: await setDefaultHeader(),
    body: password,
  }).then((res) => {
    if (!res.ok) {
      return res.json().then(Promise.reject.bind(Promise));
    }

    return res.json();
  });

export const updatePassword = async (password: string): Promise<void> =>
  fetch(`${origin}${baseURL}${AUTH}/password`, {
    method: 'PUT',
    headers: await setDefaultHeader(),
    body: password,
  }).then((res) => {
    if (!res.ok) {
      return res.json().then(Promise.reject.bind(Promise));
    }

    return res.json();
  });
