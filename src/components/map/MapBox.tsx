import { Suspense, useState } from 'react';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

import Loading from '@/app/loading';
import useKakaoLoader from '@/hook/useKakaoLoader';
import useFetchLocation from '@/hook/useLocation';
import { ListData } from '@/types/search.type';

import MapCard from './card/MapCard';
import MarkerCurrent from './marker/MarkerCurrent';
import MarkerPlace from './marker/MarkerPlace';

interface MapBoxProps {
  list: ListData[];
  tab: string;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult>;
}

const MapBox = ({ list, tab, fetchNextPage }: MapBoxProps) => {
  useKakaoLoader();
  const [mapLevel, setMapLevel] = useState(3);
  const [clickedMarker, setClickedMarker] = useState<ListData | null>(null);

  const { data: location, isError } = useFetchLocation();

  if (isError) return <p>위치 정보를 가져오는데 실패했습니다.</p>;

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
      <Suspense fallback={<Loading />}>
        <Map
          center={{ lat: 37.579617, lng: 126.977041 }}
          style={{ width: '100%', height: 'calc(100vh - 200px)' }}
          onClick={handleMapClick}
          draggable={true}
          level={3}
          onZoomChanged={async (map) => {
            const currentLevel = map.getLevel();

            if (currentLevel > mapLevel) {
              await fetchNextPage();
              await fetchNextPage();
              await fetchNextPage();
              setMapLevel((prev) => prev + 1);
            } else {
              setMapLevel((prev) => prev - 1);
            }
          }}
        >
          <MarkerCurrent
            lat={37.579617}
            lng={126.977041}
            color={clickedMarker ? '#FF9040' : '#0BC58D'}
          />
          <MarkerClusterer
            averageCenter={true}
            minLevel={6}
            styles={[
              {
                minWidth: '30px',
                minHeight: '30px',
                color: 'rgb(255, 255, 255)',
                fontSize: '12px',
                lineHeight: '30px',
                textAlign: 'center',
                borderRadius: '50%',
                backgroundColor: '#0BC58D',
                opacity: 0.7,
              },
            ]}
          >
            {list.map((marker) => (
              <MarkerPlace
                key={marker.contentId}
                contentId={marker.contentId}
                category={marker.category}
                color={
                  clickedMarker?.contentId === marker.contentId
                    ? '#0BC58D'
                    : '#FFF'
                }
                title={marker.title}
                lat={marker.lon as number}
                lng={marker.lat as number}
                onMarkerPlaceClick={() => handleClickMarker(marker)}
              />
            ))}
          </MarkerClusterer>
          {clickedMarker && <MapCard item={clickedMarker} tab={tab} />}
        </Map>
      </Suspense>
    </div>
  );
};

export default MapBox;
