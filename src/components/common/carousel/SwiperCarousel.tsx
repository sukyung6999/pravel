'use client';

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RecommandPlan } from '@/types/plan.type';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';
import styles from './carousel.module.css';

interface SwiperCarouselProps {
  data: RecommandPlan[];
}

const SwiperCarousel = ({ data }: SwiperCarouselProps) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper-record"
        breakpoints={{
          520: {
            spaceBetween: 30,
          },
          360: {
            spaceBetween: 20,
          },
        }}
      >
        {data.map(({ id, url }) => (
          <SwiperSlide key={id}>
            <div className={styles.slide__item}>
              <Image
                src={`/record/travel/${url}`}
                alt="travel"
                width={246}
                height={362}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
