'use client';
import Script from 'next/script';
import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import { useFetchLocation } from '@/hook/useLocation';
import { ListData } from '@/types/search.type';

import MapCard from '../search/card/MapCard';

import MarkerCurrent from './marker/MarkerCurrent';
import MarkerPlace from './marker/MarkerPlace';
export const API = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&libraries=services,clusterer&autoload=false`;
interface MapBoxProps {
  list: ListData[];
  tab: string;
}

const MapBox = ({ list, tab }: MapBoxProps) => {
  const [clickedMarker, setClickedMarker] = useState<ListData | null>(null);

  const { data: location, isLoading, isError } = useFetchLocation();

  if (isLoading) return <p>로딩중...</p>;
  if (isError || !location) return <p>위치 정보를 가져오는데 실패했습니다.</p>;

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
        center={{ lat: location.lat, lng: location.lng }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
        onClick={handleMapClick}
      >
        <MarkerCurrent
          lat={location.lat}
          lng={location.lng}
          color={clickedMarker ? '#FF9040' : '#0BC58D'}
        />
        {list.map((marker) => (
          <MarkerPlace
            key={marker.contentId}
            contentId={marker.contentId}
            type="food"
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
