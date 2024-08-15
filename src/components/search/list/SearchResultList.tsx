'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useFetchFood, useFetchTour } from '@/hook/useSearch';
import getLocation from '@/services/api/location.api';
import { ListData, ShowTypeCategory, tabCategory } from '@/types/search.type';

import MapBox from '../../map/Map';
import UtilBox from '../box/UtilBox';

import TextList from './TextList';

interface SearchResultListProps {
  tab: string;
}

const SearchResultList = ({ tab }: SearchResultListProps) => {
  const showType = useSearchParams().get('type');

  const [[lat, lng], setLocation] = useState<[number, number] | []>([]);
  const [list, setList] = useState<ListData[]>([]);

  useEffect(() => {
    getLocation().then(setLocation);
  }, [tab, showType]);

  const { data: foodData, isLoading: isFoodLoading } = useFetchFood({
    lat,
    lng,
    pageNo: 1,
  });
  const { data: tourData, isLoading: isTourLoading } = useFetchTour({
    lat,
    lng,
    pageNo: 1,
  });

  useEffect(() => {
    if (tab === tabCategory.food && foodData) {
      setList(foodData.list);
    } else if (tourData) {
      setList(tourData.list);
    }
  }, [tab, foodData, tourData]);

  if (lat === undefined || lng === undefined) {
    return <p>위치를 탐색하고 있습니다...</p>;
  }

  return (
    <>
      <UtilBox />
      {showType === ShowTypeCategory.list && (
        <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
          1,000개의 매장
        </span>
      )}
      <strong className="screen_out">{showType} 리스트</strong>
      {showType === ShowTypeCategory.list ? (
        <TextList list={list} />
      ) : (
        <MapBox lat={lat} lng={lng} list={list} />
      )}
    </>
  );
};

export default SearchResultList;
