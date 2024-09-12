import ToasterProvider from '@/components/common/toaster/ToasterProvider';
import Profile from '@/components/mypage/main/Profile';
import Reward from '@/components/mypage/main/Reward';
import TravelEnerge from '@/components/mypage/main/TravelEnerge';
import UserInfo from '@/components/mypage/main/user/UserInfo';
import getMypageInfo from '@/lib/actions/mypage-action';
import { getUser } from '@/lib/auth';

const MypageMain = async () => {
  const user = await getUser();
  const { currentEnergyCount, ...rewardCount } = await getMypageInfo();

  return (
    <>
      <ToasterProvider />
      <div className="bg-gray-100 min-h-dvh px-4 pt-10">
        <div className="flex justify-between">
          <Profile {...user} />
          <div className="flex items-center">
            <i className="ico_pravel ico_setting32 cursor-pointer" />
          </div>
        </div>

        <TravelEnerge currentEnergyCount={currentEnergyCount} />
        <Reward {...rewardCount} />
        <UserInfo userId={user.email} />
      </div>
    </>
  );
};

export default MypageMain;
