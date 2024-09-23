interface PrevProps {
  label?: string;
  onClick: () => void;
}
interface HeaderModalProps {
  title: string;
  onClose: () => void;
  hasPrev?: PrevProps;
}

const HeaderModal = ({ title, onClose, hasPrev }: HeaderModalProps) => {
  return (
    <header className="flex justify-between items-center max_min_width h-[24px] px-[16px] py-[20px] leading-[24px] bg-white">
      {hasPrev && (
        <button
          onClick={hasPrev.onClick}
          type="button"
          className="ico_pravel ico_prev24"
        >
          {hasPrev.label || '이전 페이지'}
        </button>
      )}
      <h2 className="font-medium flex-1 text-center">{title}</h2>
      <button
        onClick={onClose}
        type="button"
        className="ico_pravel ico_close24"
      >
        닫기
      </button>
    </header>
  );
};

export default HeaderModal;
