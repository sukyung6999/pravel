import MainModalWrapper from '@/components/main/MainModalWrapper';
import ScheduleList from '@/components/main/Schedule/ScheduleList';
import Header from '@/layout/header/Header';

import DateViewer from '../components/main/DateHeader';
import Gnb from '../layout/navigation/Gnb';

const Home = () => {
  return (
    <>
      <main className="relative min-h-dvh pb-[134px] bg-gray-100">
        <Header />
        <Gnb />
        <>
          <DateViewer />
          <ScheduleList />
        </>

        <MainModalWrapper />
      </main>
    </>
  );
};

export default Home;
