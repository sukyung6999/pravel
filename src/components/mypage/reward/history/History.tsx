import getMyRewardList from '@/lib/actions/reward-action';

import './history.css';

interface HistoryItemProps {
  name: string;
  used: boolean;
  expirationDate: string;
}

const HistoryItem = ({ name, expirationDate, used }: HistoryItemProps) => {
  return (
    <li className={`flex ${used ? 'used' : undefined} text-gray-600`}>
      <div className="flex-1">
        <h2 className="font-bold text-[17px] text-gray-900">{name}</h2>
        <span className="font-semibold text-[15px] text-gray-500">
          {expirationDate}
        </span>
      </div>
      <div>
        <div className="flex items-center cursor-pointer">
          <i
            className={`ico_pravel ico${used ? '_used' : ''}_reward32 mr-[6px]`}
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
  used: boolean;
}

const History = async ({ title, used }: HistoryProps) => {
  const history = await getMyRewardList(used);

  return (
    <div className="px-[16px] mt-[26px]">
      <h1 className="font-semibold text-[14px] text-gray-700">{title}</h1>
      <ul className="mt-[30px]">
        {history.map((value) => (
          <HistoryItem key={value.id} {...value} />
        ))}
        {!history.length && (
          <li className="text-center text-gray-500">
            리워드가 존재하지 않습니다.
          </li>
        )}
      </ul>
    </div>
  );
};

export default History;
