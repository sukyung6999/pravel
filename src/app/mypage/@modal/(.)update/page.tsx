import UserUpdateModal from '@/components/mypage/main/modal/user-update/UserUpdateModal';
import { getUser } from '@/lib/auth';

const UserUpdate = async () => {
  const user = await getUser();

  return <UserUpdateModal {...user} />;
};

export default UserUpdate;
