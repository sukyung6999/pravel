import { redirect } from 'next/navigation';

import Schedule from '@/components/main/Schedule';
import Header from '@/layout/header/Header';
import { getPlanTotalCount } from '@/services/api/plan.api';

import Gnb from '../layout/navigation/Gnb';

const Home = async () => {
  const totalCount = await getPlanTotalCount();

  if (!totalCount) {
    redirect('/onboarding');
  }

  return (
    <>
      <Header />
      <main className="relative">
        <Schedule />
      </main>
    </>
  );
};

export default Home;
