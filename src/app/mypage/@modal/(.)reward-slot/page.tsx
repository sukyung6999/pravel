import Image from 'next/image';
import { redirect } from 'next/navigation';

import ModalBackdrop from '@/components/mypage/modal/ModalBackdrop';
import { isRewardAvailable } from '@/lib/actions/energy-action';

import styles from './slot.module.css';

const RewardRoulette = async () => {
  const check = await isRewardAvailable();

  if (!check) {
    return redirect('/mypage');
  }

  return (
    <div className="fixed top-0 left-0 w-full h-dvh pt-[106px] z-30">
      <ModalBackdrop blur />
      <div className="w-full absolute left-1/2 -translate-x-1/2 flex justify-center flex-col z-30">
        <h1 className="text-white font-semibold text-4xl text-center">
          Reward
        </h1>
        <div className="w-full mt-[96px]">
          <p className="text-white text-center text-xl font-semibold">
            슬롯을 내려 <br /> 리워드를 뽑아보세요!
          </p>
          <div className="mt-[44px] px-[20px] mx-auto w-[348px] h-[205px] relative cursor-pointer">
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
    </div>
  );
};

export default RewardRoulette;
