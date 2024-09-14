'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button className="absolute" onClick={() => router.back()}>
      <i className="ico_pravel ico_left_black_arrow24" />
    </button>
  );
};

export default BackButton;
