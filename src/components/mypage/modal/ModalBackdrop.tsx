'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import styles from './modal.module.css';

interface ModalBackdropProps {
  blur?: boolean;
}

const ModalBackdrop = ({ blur }: ModalBackdropProps) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className={`${styles['modal-backdrop']} ${blur ? 'backdrop-blur-sm' : ''}`}
      onClick={router.back}
    >
      <i className="cursor-pointer absolute top-[30px] right-[17px] ico_pravel ico_close24_wh" />
    </div>
  );
};

export default ModalBackdrop;
