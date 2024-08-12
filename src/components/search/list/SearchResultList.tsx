'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import ShowType from '@/components/search/list/ShowType';
import getLocation from '@/services/api/location.api';

import MapBox from '../../map/Map';

import TextList from './TextList';

enum ShowTypeCategory {
  list = 'list',
  map = 'map',
}

const SearchResultList = () => {
  const showType = useSearchParams().get('type');

  const [[lat, lng], setLocation] = useState<[number, number] | []>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getLocation()
      .then(setLocation)
      .catch((err) => setError(err.message));
  }, []);

  if (!location) {
    return <p>위치를 탐색하고 있습니다...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <ShowType type={showType} />
      {showType === ShowTypeCategory.list && (
        <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
          1,000개의 매장
        </span>
      )}
      <strong className="screen_out">{showType} 리스트</strong>
      {showType === ShowTypeCategory.list ? (
        <TextList />
      ) : (
        <MapBox lat={lat} lng={lng} />
      )}
    </>
  );
};

export default SearchResultList;
