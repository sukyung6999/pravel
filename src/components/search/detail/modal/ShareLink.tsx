import ModalWrapper from '@/layout/wrapper/ModalWrapper';

const ShareLink = () => {
  return (
    <ModalWrapper>
      <div className="fixed left-[50%] bottom-0 z-40 w-full max-w-[780px] min-w-[390px] pt-[11px] translate-x-[-50%] rounded-[22px_22px_0_0] bg-white">
        <strong className="screen_out">공유하기 리스트</strong>
        <ul className="p-[33px]">
          <li>링크 복사</li>
          <li>카카오톡으로 공유</li>
          <li>인스타그램으로 공유</li>
          <li>x로 공유</li>
        </ul>
      </div>
    </ModalWrapper>
  );
};

export default ShareLink;
