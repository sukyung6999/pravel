'use client';

import { useMemo } from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';

import {
  CafeMarkerString,
  FoodMarkerString,
  MarkerPlaceImage,
  RamenMarkerString,
  RestaurantMarkerString,
} from '../../../lib/const/markers';

import style from '../map.module.css';

interface Props {
  contentId: string;
  type: string;
  color: string;
  lat: number;
  lng: number;
  title: string;
  onMarkerPlaceClick: (contentId: string) => void;
}
interface MarkerImage {
  src: string;
  size: {
    width: number;
    height: number;
  };
  options?: {
    offset: {
      x: number;
      y: number;
    };
  };
}

type MarkerImages = {
  [key: string]: MarkerImage;
};

const MarkerPlace = ({
  contentId,
  type,
  color,
  lat,
  lng,
  title,
  onMarkerPlaceClick,
}: Props) => {
  const markerImages = useMemo(() => {
    return {
      food: MarkerPlaceImage(FoodMarkerString(color)),
      cafe: MarkerPlaceImage(CafeMarkerString(color)),
      ramen: MarkerPlaceImage(RamenMarkerString(color)),
      restaurant: MarkerPlaceImage(RestaurantMarkerString(color)),
    } as MarkerImages;
  }, [color]);

  return (
    <>
      <MapMarker
        position={{ lat, lng }}
        clickable={true}
        image={markerImages[type]}
        onClick={() => onMarkerPlaceClick(contentId)}
      />
      <CustomOverlayMap
        position={{ lat, lng }}
        xAnchor={0.5}
        yAnchor={-1.25}
        zIndex={-1}
      >
        <div>
          <span className={style.txt_marker}>{title}</span>
        </div>
      </CustomOverlayMap>
    </>
  );
};

export default MarkerPlace;
