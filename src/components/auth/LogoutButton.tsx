import { logoutAction } from '@/lib/actions/auth-action';

const LogoutButton = () => {
  return (
    <form action={logoutAction}>
      <button type="submit" className="w-full h-[70px]">
        로그아웃
      </button>
    </form>
  );
};

export default LogoutButton;
