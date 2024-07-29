import Modal from '@/components/mypage/modal/Modal';
import History from '@/components/mypage/reward/history/History';

const RewardHistory = () => {
  return (
    <Modal title="획득한 리워드">
      <History title="사용 가능한 리워드" />
      <div className="h-[9px] bg-gray-100 mt-10"></div>
      <History title="사용 완료 리워드" />
    </Modal>
  );
};

export default RewardHistory;
