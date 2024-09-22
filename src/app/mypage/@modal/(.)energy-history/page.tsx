import History from '@/components/mypage/energe/History';
import Modal from '@/components/mypage/modal/Modal';

const EnergeHistory = () => {
  return (
    <Modal title="에너지 히스토리">
      <History title="현재 에너지" used={false} />
      <div className="h-[9px] bg-gray-100 mt-[40px]"></div>
      <History title="과거 에너지" used />
    </Modal>
  );
};

export default EnergeHistory;
