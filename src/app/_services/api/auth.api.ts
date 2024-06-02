import { AuthRequest, LoginForm, LoginResponse, User } from "@/app/_types/auth.type";
import { baseURL, setDefaultHeader } from ".";

const AUTH = '/auth/';

export const fetchUser = ({ email, token }: AuthRequest): Promise<User> => {
  return fetch(`${baseURL}${AUTH}${email}`, {
    headers: setDefaultHeader(token)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      return res.json();
    })
};

export const login = (form: LoginForm): Promise<LoginResponse> => (
  fetch(`${baseURL}${AUTH}`, {
    method: 'POST',
    body: JSON.stringify(form),
    headers: setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  })
);

export const logout = ({ email, token }: AuthRequest): Promise<void> => (
  fetch(`${baseURL}${AUTH}${email}`, {
    method: 'DELETE',
    headers: setDefaultHeader(token),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  })
)