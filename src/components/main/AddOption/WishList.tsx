import { useState } from 'react';
import Image from 'next/image';

import HeaderModal from '@/layout/header/HeaderModal';

interface WishListProps {
  closeWishList: () => void;
  closeModals: () => void;
}

const items = [
  {
    id: 1,
    src: '/test1.jpg',
    alt: '아쿠아플라넷',
    category: '관광',
  },
  {
    id: 2,
    src: '/test2.jpg',
    alt: '풍등축제',
    category: '맛집',
  },
  {
    id: 3,
    src: '/test3.jpg',
    alt: '재즈 페스티벌',
    category: '관뢍',
  },
  {
    id: 4,
    src: '/test1.jpg',
    alt: '아쿠아플라넷',
    category: '관광',
  },
  {
    id: 5,
    src: '/test2.jpg',
    alt: '풍등축제',
    category: '맛집',
  },
  {
    id: 6,
    src: '/test3.jpg',
    alt: '재즈 페스티벌',
    category: '관뢍',
  },
  {
    id: 7,
    src: '',
    alt: '',
    category: '',
  },
  {
    id: 8,
    src: '',
    alt: '',
    category: '',
  },
  {
    id: 9,
    src: '',
    alt: '',
    category: '',
  },
  {
    id: 10,
    src: '',
    alt: '',
    category: '',
  },
  {
    id: 11,
    src: '',
    alt: '',
    category: '',
  },
  {
    id: 12,
    src: '',
    alt: '',
    category: '',
  },
  {
    id: 13,
    src: '',
    alt: '',
    category: '',
  },
  {
    id: 14,
    src: '',
    alt: '',
    category: '',
  },
  {
    id: 15,
    src: '',
    alt: '',
    category: '',
  },
];

const WishList = ({ closeWishList, closeModals }: WishListProps) => {
  const [activeTab, setActiveTab] = useState('All');
  const filteredItems = items.filter(
    (item) => activeTab === 'All' || item.category === activeTab,
  );

  return (
    <div className="modal-content absolute bottom-0 left-0 w-full pt-[10px] pb-[41px] z-20 bg-white animate-modalUp rounded-[20px_20px_0_0] shadow-[0px_0px_20px_0px_#00000020]">
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
        {filteredItems.map((item, idx) =>
          item.src ? (
            <div key={item.id} className="flex flex-col w-[66px]">
              <div className="w-[66px] rounded-[20px] overflow-hidden">
                <Image src={item.src} alt={item.alt} width={66} height={66} />
              </div>
              <p className="text-[12px] text-gray-600 text-center">
                {item.alt}
              </p>
            </div>
          ) : (
            <div
              key={`empty-${idx}`}
              className="bg-gray-200 w-[66px] h-[66px] rounded-[20px]"
            ></div>
          ),
        )}
      </div>
    </div>
  );
};

export default WishList;
