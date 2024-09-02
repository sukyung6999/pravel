'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const ShowTypeBox = () => {
  const typeParam = useSearchParams().get('type');
  const filterParam = useSearchParams().get('filter');
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-start">
      <div className="inline-block mr-[14px]">
        <h4 className="screen_out">보기 방식 선택</h4>
        <button
          type="button"
          className={`ico_pravel ico_map${typeParam === 'map' ? '_on' : ''}`}
          onClick={() =>
            router.replace(`${pathname}/?type=map&filter=${filterParam}`)
          }
        >
          지도로 보기
        </button>
        <button
          type="button"
          className={`ico_pravel ico_list${typeParam === 'list' ? '_on' : ''} ml-[10px]`}
          onClick={() =>
            router.replace(`${pathname}/?type=list&filter=${filterParam}`)
          }
        >
          리스트로 보기
        </button>
      </div>
    </div>
  );
};

export default ShowTypeBox;
