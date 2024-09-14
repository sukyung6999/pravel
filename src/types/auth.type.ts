export interface LoginForm {
  email: string;
  password: string;
}

export interface User {
  email: string;
  nickname: string;
  password: string;
  profileImg?: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface AuthRequest {
  token: string;
}

export interface JoinForm extends User {
  passwordConfirm: string;
}
