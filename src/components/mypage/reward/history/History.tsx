import Image from 'next/image';

import './history.css';

interface HistoryItemProps {
  title: string;
  date: string;
  used: boolean;
}

const HistoryItem = ({ title, date, used }: HistoryItemProps) => {
  return (
    <li className={`flex ${used ? 'used' : undefined} text-gray-600`}>
      <div className="flex-1 ml-4">
        <h2 className="font-bold text-[17px] text-gray-900">{title}</h2>
        <span className="font-semibold text-[15px] text-gray-500">{date}</span>
      </div>
      <div>
        <div className="flex items-center">
          <Image
            className="mr-[6px]"
            src={
              used
                ? '/mypage/history-used-energy-icon.png'
                : '/mypage/history-energy-icon.png'
            }
            width={32}
            height={32}
            alt="energe"
          />
          <span className="text-[14px] font-semibold text-gray-900 mr-1">
            사용하기
          </span>
        </div>
      </div>
    </li>
  );
};

interface HistoryProps {
  title: string;
}

const History = ({ title }: HistoryProps) => {
  const history = [
    {
      id: 1,
      title: '전국 맛집 할인 쿠폰 30%',
      date: '~ 24.12.12',
      used: true,
    },
  ];

  return (
    <div className="px-4 mt-[26px]">
      <h1 className="font-semibold text-[14px] text-gray-700">{title}</h1>
      <ul className="mt-[30px]">
        {history.map((value) => (
          <HistoryItem key={value.id} {...value} />
        ))}
      </ul>
    </div>
  );
};

export default History;
