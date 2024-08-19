import HeaderManage from '@/components/manage/HeaderManage';
import MainTravel from '@/components/manage/MainTravel';
import TravelList from '@/components/manage/TravelList';

const page = () => {
  return (
    <>
      <HeaderManage />
      <MainTravel />
      <TravelList />
      <button>여행 시작</button>
    </>
  );
};

export default page;
