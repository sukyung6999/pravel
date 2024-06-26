import {
  AuthRequest,
  JoinForm,
  LoginForm,
  LoginResponse,
  User,
} from '@/types/auth.type';

import { baseURL, setDefaultHeader } from '.';

const AUTH = '/auth/';

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
  fetch(`${baseURL}${AUTH}login`, {
    method: 'POST',
    headers: {
      ...setDefaultHeader(),
      Authorization: `Basic ${btoa(`${form.email}:${form.password}`)}`,
    },
  }).then((res) => {
    if (!res.ok) {
      return res.json().then(Promise.reject.bind(Promise));
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
  fetch(`${baseURL}${AUTH}`, {
    body: JSON.stringify(form),
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
