import LoginForm from '@/components/auth/LoginForm';

const Login = () => (
  <div className="login h-dvh flex items-center justify-center">
    <div className="flex flex-col text-center flex-1">
      <h1 className="text-2xl mb-8 font-medium">로그인</h1>
      <LoginForm />
    </div>
  </div>
);

export default Login;
