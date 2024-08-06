import { MapMarker } from 'react-kakao-maps-sdk';

interface Props {
  lat: number;
  lng: number;
}

const MarkerCurrent = ({ lat, lng }: Props) => {
  return (
    <>
      <MapMarker
        position={{ lat, lng }}
        image={{
          src: '/map/marker_current.png',
          size: {
            width: 34,
            height: 34,
          },
          options: {
            offset: {
              x: 0,
              y: 0,
            },
          },
        }}
      />
      <p className="screen_out">
        현재 위치는 위도 {lat}, 경도 {lng}에 위치하고 있습니다.
      </p>
    </>
  );
};

export default MarkerCurrent;
