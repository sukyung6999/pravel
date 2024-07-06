import Header from '@/layout/header/Header';

import Date from '../components/main/Date';
import EmptyMain from '../components/main/EmptyMain';
import FloatingBar from '../components/main/FloatingBar';
import Snb from '../components/main/Snb';
import TravelOptionsModal from '../components/main/TravelOptionsModal';

export default function Home() {
  return (
    <>
      <main className="relative">
        <Header />
        <Snb />
        <>
          <Date />
          <EmptyMain />
        </>
        <FloatingBar />
      </main>
      <TravelOptionsModal />
    </>
  );
}
