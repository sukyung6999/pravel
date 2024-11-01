import { redirect } from 'next/navigation';

import MainModalWrapper from '@/components/main/MainModalWrapper';
import ScheduleList from '@/components/main/Schedule/ScheduleList';
import Header from '@/layout/header/Header';
import { getPlanDetails } from '@/services/api/plan.api';

import DateViewer from '../components/main/DateHeader';
import Gnb from '../layout/navigation/Gnb';

const Home = async () => {
  const planDetails = await getPlanDetails();

  if (!planDetails) {
    redirect('/onboarding');
  }

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
