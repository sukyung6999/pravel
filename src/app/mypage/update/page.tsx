import UserUpdateModal from '@/components/mypage/main/modal/UserUpdateModal';
import { getUser } from '@/lib/auth';

const UserUpdate = async () => {
  const { nickname } = await getUser();

  return <UserUpdateModal nickname={nickname} />;
};

export default UserUpdate;
