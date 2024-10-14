import MainModalWrapper from '@/components/main/MainModalWrapper';
import ScheduleList from '@/components/main/Schedule/ScheduleList';
import Header from '@/layout/header/Header';

import DateViewer from '../components/main/DateHeader';
import Gnb from '../layout/navigation/Gnb';

const Home = () => {
  const [modalState, { openModal, closeModal }] = useModal({
    [MODAL.ADD_OPTION]: false,
    [MODAL.WISH_LIST]: false,
  });

  const { data } = useFetchPlan();

  const { changeCurrentDate, changePlanId, changeStartDate, changeEndDate } =
    usePlanStateStore();

  useEffect(() => {
    if (!data?.startDate) return;
    if (new Date(data?.startDate) < new Date()) {
      changeCurrentDate(formattedDate(new Date()));
    } else {
      changeCurrentDate(data?.startDate);
    }

    if (!data?.planId) return;
    changePlanId(data?.planId);

    changeStartDate(data?.startDate);

    if (!data?.endDate) return;
    changeEndDate(data?.endDate);
  }, [data, changeCurrentDate, changePlanId, changeStartDate, changeEndDate]);

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
