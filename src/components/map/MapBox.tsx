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
  tab: string;
}

const MapBox = ({ lat, lng, list, tab }: MapBoxProps) => {
  const [clickedMarker, setClickedMarker] = useState<ListData | null>(null);

  if (!lat || !lng) return <p>에러나요</p>;

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

  console.log(lat, lng);
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
