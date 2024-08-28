'use client';

import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import Script from 'next/script';

import { useFetchLocation } from '@/hook/useLocation';
import { ListData } from '@/types/search.type';

import MapCard from './card/MapCard';
import MarkerCurrent from './marker/MarkerCurrent';
import MarkerPlace from './marker/MarkerPlace';

export const API = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&libraries=services,clusterer&autoload=false`;
interface MapBoxProps {
  list: ListData[];
  tab: string;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult>;
}

const MapBox = ({ list, tab, fetchNextPage }: MapBoxProps) => {
  const [mapLevel, setMapLevel] = useState(3);
  const [clickedMarker, setClickedMarker] = useState<ListData | null>(null);

  // const { data: location, isLoading, isError } = useFetchLocation();

  // if (isLoading) return <p>로딩중...</p>;
  // if (isError || !location) return <p>위치 정보를 가져오는데 실패했습니다.</p>;

  const handleClickMarker = (cardInfo: ListData) => {
    setClickedMarker((prev) => {
      if (prev?.contentId === cardInfo.contentId) {
        return null;
      } else {
        return cardInfo;
      }
    });
  };
  const handleMapClick = () => {
    setClickedMarker(null);
  };

  return (
    <div className="mb-[25px]">
      <Script src={API} strategy="afterInteractive" />
      <Map
        center={{ lat: 37.579617, lng: 126.977041 }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
        onClick={handleMapClick}
        draggable={true}
        level={3} // 지도의 확대 레벨
        onZoomChanged={async (map) => {
          const currentLevel = map.getLevel();

          if (currentLevel > mapLevel) {
            await fetchNextPage();
            await fetchNextPage();
            await fetchNextPage();
            setMapLevel((prev) => prev + 1);
          } else {
            setMapLevel((prev) => prev - 1);
          }
        }}
      >
        <MarkerCurrent
          lat={37.579617}
          lng={126.977041}
          color={clickedMarker ? '#FF9040' : '#0BC58D'}
        />
        {list.map((marker) => (
          <MarkerPlace
            key={marker.contentId}
            contentId={marker.contentId}
            category={marker.category}
            color={
              clickedMarker?.contentId === marker.contentId ? '#0BC58D' : '#FFF'
            }
            title={marker.title}
            lat={marker.lon as number}
            lng={marker.lat as number}
            onMarkerPlaceClick={() => handleClickMarker(marker)}
          />
        ))}
        {clickedMarker && <MapCard item={clickedMarker} tab={tab} />}
      </Map>
    </div>
  );
};

export default MapBox;
