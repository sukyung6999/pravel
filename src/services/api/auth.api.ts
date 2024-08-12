import {
  AuthRequest,
  JoinForm,
  LoginForm,
  LoginResponse,
  User,
} from '@/types/auth.type';

import { baseURL, origin, setDefaultHeader } from '.';

const AUTH = '/auth/';

export const verifyUser = (token: string): Promise<boolean> =>
  fetch(`${origin}${baseURL}${AUTH}`, {
    headers: setDefaultHeader(token),
  }).then((res) => {
    console.log('ok?', res.ok);
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

export const fetchUser = ({ email, token }: AuthRequest): Promise<User> => {
  return fetch(`${baseURL}${AUTH}${email}`, {
    headers: setDefaultHeader(token),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });
};

export const login = (form: LoginForm): Promise<LoginResponse> =>
  fetch(`${origin}${baseURL}${AUTH}login`, {
    method: 'POST',
    headers: {
      ...setDefaultHeader(),
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

export const logout = ({ email, token }: AuthRequest): Promise<void> =>
  fetch(`${baseURL}${AUTH}${email}`, {
    method: 'DELETE',
    headers: setDefaultHeader(token),
  }).then((res) => {
    if (!res.ok) {
      return res.json().then(Promise.reject.bind(Promise));
    }

    return res.json();
  });

export const join = (form: JoinForm): Promise<void> =>
  fetch(`${baseURL}${AUTH}/join`, {
    method: 'POST',
    body: JSON.stringify(form),
    headers: setDefaultHeader(),
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
