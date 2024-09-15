import Image from 'next/image';

import ModalBackdrop from '@/components/mypage/modal/ModalBackdrop';

import styles from './slot.module.css';

const RewardRoulette = () => {
  return (
    <>
      <ModalBackdrop blur />
      <div className="absolute w-full h-full top-0 z-30 flex items-center flex-col">
        <h1 className="text-white font-semibold text-4xl mt-16">Reward</h1>
        <div className="w-full mt-24">
          <p className="text-white text-center text-xl font-semibold">
            슬롯을 내려 <br /> 리워드를 뽑아보세요!
          </p>
          <div className="mt-11 px-5 mx-auto w-[348px] h-[205px] relative cursor-pointer">
            <Image
              className={styles.nodrag}
              src="/mypage/slot.png"
              alt="slot"
              fill
            />
            <Image
              className={`${styles.nodrag} ${styles.slot} absolute z-40 left-1/2 -translate-x-1/2 translate-y-1/2`}
              src="/mypage/slot_arrow.png"
              width="68"
              height="175"
              alt="slot"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardRoulette;
