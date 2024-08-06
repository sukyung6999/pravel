import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';

import style from './map.module.css';

const MarkerPlace = () => {
  return (
    <>
      <MapMarker
        position={{ lat: 37.624555, lng: 127.152841 }}
        image={{
          src: '/map/marker_food.png',
          size: {
            width: 47,
            height: 46,
          },
          options: {
            offset: {
              x: 23,
              y: 0,
            },
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 37.624555, lng: 127.152841 }}
        xAnchor={0.5}
        yAnchor={-1.25}
        zIndex={-1}
      >
        <div>
          <span className={style.txt_marker}>한식당</span>
        </div>
      </CustomOverlayMap>
    </>
  );
};

export default MarkerPlace;
