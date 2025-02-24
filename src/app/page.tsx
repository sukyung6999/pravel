import { redirect } from 'next/navigation';

import Schedule from '@/components/main/Schedule';
import Header from '@/layout/header/Header';
import { getPlanTotalCount } from '@/services/api/plan.api';

const Home = async () => {
  const totalCount = await getPlanTotalCount();

  if (!totalCount) {
    redirect('/onboarding');
  }

  return (
    <>
      <Header />
      <main className="relative min-h-dvh pb-[134px] bg-gray-100">
        <Schedule />
      </main>
    </>
  );
};

export default Home;
