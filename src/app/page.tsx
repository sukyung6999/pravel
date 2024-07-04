import Header from '@/layout/header/Header';

import Date from './_components/main/Date';
import EmptyMain from './_components/main/EmptyMain';
import FloatingBar from './_components/main/FloatingBar';
import Snb from './_components/main/Snb';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Snb />
      <>
        <Date />
        <EmptyMain />
      </>
      <FloatingBar />
    </main>
  );
}
