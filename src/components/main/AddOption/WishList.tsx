'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useGetWish } from '@/hook/useWish';
import HeaderModal from '@/layout/header/HeaderModal';
import { WishListItemProps } from '@/types/wish.type';

interface WishListProps {
  closeWishList: () => void;
  closeModals: () => void;
}

const WishList = ({ closeWishList, closeModals }: WishListProps) => {
  const [activeTab, setActiveTab] = useState('All');

  const { data } = useGetWish();

  const filteredItems = data?.filter(
    (item: WishListItemProps) =>
      activeTab === 'All' || item.contentTypeId === activeTab,
  );

  return (
    <div className="modal-content fixed left-0 bottom-0 w-full z-20 animate-modalUp ">
      <div className="max_min_width pt-[10px] pb-[41px] relative left-1/2 -translate-x-1/2 bg-white rounded-[20px_20px_0_0] shadow-[0px_0px_20px_0px_#00000020]">
        <HeaderModal
          title="위시리스트"
          onClose={closeModals}
          hasPrev={{ onClick: closeWishList }}
        />
        <ul className="flex justify-center gap-2 my-[18px]">
          {['All', '맛집', '관광'].map((tab) => (
            <li key={tab}>
              <button
                className={`text-[14px] w-[54px] py-[6px] rounded-full ${activeTab === tab ? 'text-white bg-primary' : 'text-gray-300 border border-gray-300'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
        <div className="ml-[16px] grid grid-flow-col grid-cols-[repeat(2,66px)] grid-rows-[repeat(2,87px)] auto-cols-[66px] auto-rows-[87px] gap-[7px] overflow-x-scroll">
          {filteredItems?.map((item: WishListItemProps, idx: number) =>
            item.thumbnail ? (
              <Link
                href={`/search/${item.contentTypeId === '29' ? 'food' : 'tour'}/detail/${item.contentId}`}
                key={item.contentId}
                className="flex flex-col w-[66px]"
              >
                <div className="w-[66px] rounded-[20px] overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={66}
                    height={66}
                    style={{
                      minHeight: '66px',
                    }}
                  />
                </div>
                <p className="text-[12px] text-gray-600 text-center overflow-hidden whitespace-nowrap text-ellipsis break-all">
                  {item.title}
                </p>
              </Link>
            ) : (
              <div
                key={`empty-${idx}`}
                className="bg-gray-200 w-[66px] h-[66px] rounded-[20px]"
              ></div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
