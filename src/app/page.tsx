import WishList from '@/components/main/AddOption/WishList';
import ScheduleList from '@/components/main/Schedule/ScheduleList';
import useModal, { MODAL } from '@/hook/useModal';
import Header from '@/layout/header/Header';

import AddOption from '../components/main/AddOption/AddOption';
import DateViewer from '../components/main/DateHeader';
import FloatingBar from '../components/main/FloatingBar';
import Gnb from '../layout/navigation/Gnb';

const Home = () => {
  const [modalState, { openModal, closeModal }] = useModal({
    [MODAL.ADD_OPTION]: false,
    [MODAL.WISH_LIST]: false,
  });

  return (
    <>
      <main className="relative min-h-dvh pb-[134px] bg-gray-100">
        <Header />
        <Gnb />
        <>
          <DateViewer />
          <ScheduleList />
        </>
        <FloatingBar openAddOption={() => openModal(MODAL.ADD_OPTION)} />
      </main>
      {modalState.addOption && (
        <AddOption
          closeAddOption={() => closeModal(MODAL.ADD_OPTION)}
          openWishList={() => openModal(MODAL.WISH_LIST)}
        />
      )}
      {modalState.wishList && (
        <WishList
          closeWishList={() => {
            closeModal(MODAL.WISH_LIST);
          }}
          closeModals={() => {
            closeModal(MODAL.WISH_LIST);
            closeModal(MODAL.ADD_OPTION);
          }}
        />
      )}
    </>
  );
};

export default Home;
