'use client';

import Image from 'next/image';
import Link from 'next/link';

import { CATEGORY } from '@/lib/const/search';

import SearchInput from '../../form/SearchInput';

const IntroList = () => (
  <div className="w-full pt-[80px] px-[16px] box-border">
    <SearchInput />
    <h3 className="mt-[40px] mb-[16px] text-[20px] font-bold">탐색하기</h3>
    <ul className="w-full">
      {CATEGORY.map((item) => (
        <li className="mb-[10px]" key={item.en}>
          <Link href={`/search/${item.en}?type=list&filter=all`}>
            <Image
              src={`/intro/img_${item.en}.png`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt={`${item.ko} 탐색하기`}
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default IntroList;
