'use client';

import { useRouter } from 'next/navigation';

import styles from './modal.module.css';

const ModalBackdrop = () => {
  const router = useRouter();

  return (
    <div className={`${styles['modal-backdrop']}`} onClick={router.back} />
  );
};

export default ModalBackdrop;
