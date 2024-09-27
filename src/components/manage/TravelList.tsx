import TravelItem from './TravelItem';

export const dummyTravel = [
  {
    id: 1,
    img: 'test1.jpg',
    title: '제주 여행',
    startDate: '2024-09-09',
    endDate: '2024-09-30',
  },
  {
    id: 2,
    img: 'test2.jpg',
    title: '부산 여행',
    startDate: '2024-10-10',
    endDate: '2024-10-11',
  },
  {
    id: 3,
    img: 'test3.jpg',
    title: '경주 여행',
    startDate: '2024-11-03',
    endDate: '2024-11-06',
  },
  {
    id: 4,
    img: 'test1.jpg',
    title: '안동 여행',
    startDate: '2024-11-13',
    endDate: '2024-11-23',
  },
  {
    id: 5,
    img: 'test2.jpg',
    title: '태안 여행',
    startDate: '2024-12-13',
    endDate: '2024-12-20',
  },
];

const TravelList = () => {
  return (
    <div className="mx-[16px] h-[calc(100dvh-423px] pb-[100px] flex flex-col gap-2">
      {dummyTravel.map((travel) => (
        <TravelItem key={travel.id} travel={travel} />
      ))}
    </div>
  );
};

export default TravelList;
