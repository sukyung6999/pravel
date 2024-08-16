// import { useState } from 'react';
import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import { ListData } from '@/types/search.type';

import MapCard from '../search/card/MapCard';

import MarkerCurrent from './marker/MarkerCurrent';
import MarkerPlace from './marker/MarkerPlace';

interface MapBoxProps {
  lat: number;
  lng: number;
  list: ListData[];
}

const MapBox = ({ lat, lng, list }: MapBoxProps) => {
  const [clickedMarker, setClickedMarker] = useState<ListData | null>(null);

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

  if (lat === undefined || lng === undefined) {
    return <p>위치를 탐색하고 있습니다...</p>;
  }
  return (
    <div className="mb-[25px]">
      <Map
        center={{ lat, lng }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
        onClick={handleMapClick}
      >
        <MarkerCurrent
          lat={lat}
          lng={lng}
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
            lat={marker.mapy as number}
            lng={marker.mapx as number}
            onMarkerPlaceClick={() => handleClickMarker(marker)}
          />
        ))}
        {clickedMarker && (
          <MapCard
            contentId={clickedMarker.contentId}
            firstImage={clickedMarker.firstImage}
            title={clickedMarker.title}
            like={clickedMarker.like}
          />
        )}
      </Map>
    </div>
  );
};

export default MapBox;
