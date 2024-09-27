import HeaderManage from '@/components/manage/HeaderManage';
import MainTravel from '@/components/manage/MainTravel';
import TravelList from '@/components/manage/TravelList';

const page = () => {
  return (
    <main className="bg-gray-100">
      <HeaderManage />
      <MainTravel />
      <TravelList />
      <div className="fixed z-50 bottom-0 left-0 w-full before:content-[''] before:fixed before:bottom-0 before:left-0 before:w-full before:h-[190px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0)_5.79%,#FFFFFF_80.26%)] before:pointer-events-none  before:-z-10">
        <button className="absolute bottom-[34px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] py-[1em] bg-primary text-white font-bold rounded-xl">
          여행 시작
        </button>
      </div>
    </main>
  );
};

export default page;
