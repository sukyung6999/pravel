import { getMyEnergyList } from '@/lib/actions/energy-action';

import './history.css';

interface HistoryItemProps {
  location: string;
  title: string;
  expirationDate: string;
  usedDate: string;
  energy: number;
  used: boolean;
}

const HistoryItem = ({
  location,
  title,
  expirationDate,
  energy,
  used,
}: HistoryItemProps) => {
  return (
    <li className={`flex ${used ? 'used' : undefined} text-gray-600`}>
      <div className="w-[60px] text-primary text-[14px] font-semibold">
        {location}
      </div>
      <div className="flex-1 ml-[16px]">
        <h2 className="font-bold text-[17px] text-gray-900">{title}</h2>
        <span className="font-semibold text-[15px] text-gray-500">
          {expirationDate}
        </span>
      </div>
      <div>
        <div className="flex items-center">
          <i
            className={`ico_pravel ico${used ? '_used' : ''}_energy32 mr-[6px]`}
          />
          <span className="text-[14px] font-semibold text-gray-900 mr-[4px]">
            에너지
          </span>
          <span className="text-[16px] font-semibold text-primary">
            {energy}%
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
  const history = await getMyEnergyList(used);

  return (
    <div className="px-[16px] mt-[26px]">
      <h1 className="font-semibold text-[14px] text-gray-700">{title}</h1>
      <ul className="mt-[30px]">
        {history.map((value) => (
          <HistoryItem key={value.id} {...value} />
        ))}
        {!history.length && (
          <li className="text-center text-gray-500">
            에너지가 존재하지 않습니다.
          </li>
        )}
      </ul>
    </div>
  );
};

export default History;
