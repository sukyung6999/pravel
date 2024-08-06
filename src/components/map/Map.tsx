'use client';

import { Map } from 'react-kakao-maps-sdk';

import MarkerCurrent from './MarkerCurrent';
import MarkerPlace from './MarkerPlace';

interface Props {
  lat: number;
  lng: number;
}

const MapBox = ({ lat, lng }: Props) => {
  return (
    <div className="mb-[25px]">
      <Map
        center={{ lat, lng }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
      >
        <MarkerCurrent lat={lat} lng={lng} />
        <MarkerPlace />
      </Map>
    </div>
  );
};

export default MapBox;
