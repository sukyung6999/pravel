import HeaderManage from '@/components/manage/HeaderManage';
import MainTravel from '@/components/manage/MainTravel';
import TravelList from '@/components/manage/TravelList';

const page = () => {
  return (
    <main className="bg-gray-100 min-h-dvh">
      <HeaderManage />
      <MainTravel />
      <TravelList />
    </main>
  );
};

export default page;
