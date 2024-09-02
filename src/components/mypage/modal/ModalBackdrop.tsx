'use client';

import { useRouter } from 'next/navigation';

import styles from './modal.module.css';

interface ModalBackdropProps {
  blur?: boolean;
}

const ModalBackdrop = ({ blur }: ModalBackdropProps) => {
  const router = useRouter();

  return (
    <div
      className={`${styles['modal-backdrop']} ${blur ? 'backdrop-blur-sm' : ''}`}
      onClick={router.back}
    />
  );
};

export default ModalBackdrop;
