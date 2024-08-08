import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import MapCard from '../search/card/MapCard';

import MarkerCurrent from './marker/MarkerCurrent';
import MarkerPlace from './marker/MarkerPlace';

interface Props {
  lat: number;
  lng: number;
}

const dummyData = [
  {
    lat: 37.625470122479804,
    lng: 127.14900255203247,
    type: 'restaurant',
    txt: '비스트로',
    star: 4.3,
  },
  {
    lat: 37.62711010931329,
    lng: 127.15185105800629,
    type: 'cafe',
    txt: '베이커리 카페',
    star: 4.0,
  },
  {
    lat: 37.62624338502879,
    lng: 127.15340673923492,
    type: 'ramen',
    txt: '라멘라멘',
    star: 4.0,
  },
  {
    lat: 37.625665563224366,
    lng: 127.1543401479721,
    type: 'food',
    txt: '고깃집',
    star: 4.2,
  },
  {
    lat: 37.62337972411467,
    lng: 127.15134143829346,
    type: 'food',
    txt: '한식',
    star: 4.1,
  },
];

const MapBox = ({ lat, lng }: Props) => {
  // const [clickedMarker, setClickedMarker] = useState<string | null>(null);

  // const handleClickMarker = (marker: string) => {
  //   setClickedMarker(marker);
  // };

  return (
    <div className="mb-[25px]">
      <Map
        center={{ lat, lng }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
      >
        <MarkerCurrent
          lat={lat}
          lng={lng}
          // color={clickedMarker ? '#0BC58D' : '#FF9040'}
          color="#0BC58D"
        />
        {dummyData.map((marker) => (
          <MarkerPlace
            key={marker.txt}
            type={marker.type}
            color={'#FFF'}
            lat={marker.lat}
            lng={marker.lng}
          />
        ))}
        <MapCard />
      </Map>
    </div>
  );
};

export default MapBox;
