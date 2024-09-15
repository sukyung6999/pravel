'use client';

import { useRouter } from 'next/navigation';

const CancelButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="h-[55px] bg-gray-200 font-semibold tracking-tighter flex-1 text-gray-600"
      onClick={() => router.back()}
    >
      취소
    </button>
  );
};

export default CancelButton;
