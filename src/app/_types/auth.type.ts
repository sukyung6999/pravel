export interface LoginForm {
  email: string;
  password: string;
}

export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface AuthRequest {
  email: string;
  token: string;
}