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
  const [clickedMarker, setClickedMarker] = useState<string | null>(null);

  const handleClickMarker = (contentId: string) => {
    setClickedMarker((prev) => {
      if (prev === contentId) {
        return null;
      } else {
        return contentId;
      }
    });
  };

  if (lat === undefined || lng === undefined) {
    return <p>위치를 탐색하고 있습니다...</p>;
  }
  return (
    <div className="mb-[25px]">
      <Map
        center={{ lat, lng }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
      >
        <MarkerCurrent
          lat={lat}
          lng={lng}
          color={clickedMarker ? '#FF9040' : '#0BC58D'}
        />
        {list.map((marker) => (
          <MarkerPlace
            key={marker.contentId}
            type="food"
            color={clickedMarker === marker.contentId ? '#0BC58D' : '#FFF'}
            title={marker.title}
            lat={marker.mapy}
            lng={marker.mapx}
            onMarkerPlaceClick={() => handleClickMarker(marker.contentId)}
          />
        ))}
        {clickedMarker && <MapCard />}
      </Map>
    </div>
  );
};

export default MapBox;
