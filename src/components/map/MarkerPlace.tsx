'use client';

import { useMemo, useState } from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';

import MapCard from '../search/card/MapCard';

import style from './map.module.css';
import { FoodMarkerString, MarkerPlaceImage } from './marker/markers';

interface Props {
  type: string;
  color: string;
}
const MarkerPlace = ({ type, color }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const FoodMarker = useMemo(() => FoodMarkerString('#fff'), [color]);

  const markerImage = useMemo(() => MarkerPlaceImage(FoodMarker), [FoodMarker]);

  return (
    <>
      <MapMarker
        position={{ lat: 37.624555, lng: 127.152841 }} // 나중에 변수로 변경해야함
        clickable={true}
        onClick={() => setIsOpen((prev) => !prev)}
        image={markerImage}
      />
      <CustomOverlayMap
        position={{ lat: 37.624555, lng: 127.152841 }} // 나중에 변수로 변경해야함
        xAnchor={0.5}
        yAnchor={-1.25}
        zIndex={-1}
      >
        <div>
          <span className={style.txt_marker}>한식당</span>
        </div>
      </CustomOverlayMap>
      <MapCard />
    </>
  );
};

export default MarkerPlace;
