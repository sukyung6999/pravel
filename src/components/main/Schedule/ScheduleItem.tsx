import { useEffect, useRef } from 'react';
import Image from 'next/image';

import LineEndEven from '@/components/svg/ico_line_end_even.svg';
import LineEndOdd from '@/components/svg/ico_line_end_odd.svg';
import LineEven from '@/components/svg/ico_line_even.svg';
import LineOdd from '@/components/svg/ico_line_odd.svg';
import LineStart from '@/components/svg/ico_line_start.svg';
import { useFetchPlan } from '@/hook/usePlan';
import { PlanDetails } from '@/types/plan.type';

import styles from './Schedule.module.css';

const ScheduleItem = ({
  schedule,
  svgId,
}: {
  schedule: PlanDetails['schedules']['0'];
  svgId: number;
}) => {
  const { data } = useFetchPlan();

  const containerRef = useRef<HTMLDivElement | null>(null);

  const animateSvg = () => {
    const containerElement = containerRef.current;

    if (!containerElement) return;

    // container 안의 svg path 요소 찾기
    const path = containerElement.querySelector('path');

    if (!path) return;

    const totalLength = path.getTotalLength(); // path의 총 길이 계산

    path.style.strokeDasharray = `${totalLength}`;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const progress = Math.min(elapsed / 1000, 1); // 2초 동안 애니메이션 진행

      path.style.strokeDashoffset = `${totalLength * (1 - progress)}`; // 진행률에 따른 dashoffset 업데이트

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    if (svgId > schedule.order) {
      path.style.strokeDashoffset = '0';
    } else {
      requestAnimationFrame(animate);
    }
  };

  // svgId가 변경될 때 애니메이션 실행
  useEffect(() => {
    if (svgId >= schedule.order) {
      animateSvg(); // svgId와 order가 일치하면 애니메이션 실행
    }
  }, [svgId, schedule.order]);

  const categoryClass =
    schedule.category === 'FOOD'
      ? styles.category_restaurant
      : styles.category_sightseeing;

  const renderLineSvg = (base: boolean): React.ReactElement => {
    const basicClass = 'absolute left-1/2 -translate-x-1/2';

    if (schedule.order === 1) {
      return (
        <div ref={containerRef}>
          <LineStart
            width={356}
            height={99}
            className={`${basicClass} top-full ${base ? styles.line_color_gray : ''}`}
          />
        </div>
      );
    }

    // 마지막 id일 경우
    if (schedule.order === data?.schedules.length) {
      if (schedule.order % 2 === 0) {
        return (
          <div ref={containerRef}>
            <LineEndEven
              width={356}
              height={99}
              className={`${basicClass} bottom-0 ${base ? styles.line_color_gray : ''}`}
            />
          </div>
        );
      } else {
        return (
          <div ref={containerRef}>
            <LineEndOdd
              width={356}
              height={99}
              className={`${basicClass} bottom-0 ${base ? styles.line_color_gray : ''}`}
            />
          </div>
        );
      }
    }

    // 그 외 짝수/홀수 처리
    if (schedule.order % 2 === 0) {
      return (
        <div ref={containerRef}>
          <LineEven
            width={356}
            height={184}
            className={`${basicClass} top-full -translate-y-1/2 ${base ? styles.line_color_gray : ''}`}
          />
        </div>
      );
    } else {
      return (
        <div ref={containerRef}>
          <LineOdd
            width={356}
            height={184}
            className={`${basicClass} top-full -translate-y-1/2 ${base ? styles.line_color_gray : ''}`}
          />
        </div>
      );
    }
  };

  return (
    <div
      className={`${styles.schedule_item} relative flex items-center gap-[16px] h-[170px]`}
    >
      <div>
        <div className="relative inline-block rounded-[30px_30px_30px_10px] overflow-hidden w-[100px] h-[100px]">
          <Image
            src={
              schedule.thumbnail
                ? schedule.thumbnail
                : '/img_schedule_default.jpg'
            }
            alt={schedule.title}
            width={100}
            height={100}
            sizes="100px"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-full"
          />
        </div>
        <button className="blind">일정 삭제하기</button>
      </div>

      <div
        className={`flex flex-col text-[0px] items-start ${styles.schedule_info}`}
      >
        <span
          className={`${styles.category} ${categoryClass} ico_pravel_before`}
        >
          {schedule.category === 'FOOD' ? '식당' : '관광'}
        </span>
        <h4 className="text-gray-900 text-[18px] font-semibold my-[6px] leading-[1.16]">
          {schedule.title}
        </h4>
        {schedule.description && (
          <p className="mb-[4px] text-gray-500 text-[13px] font-semibold max-w-[170px] truncate">
            {schedule.description}
          </p>
        )}
        <button className="flex text-primary text-[13px] font-semibold ico_pravel_before before:inline-block before:w-[18px] before:h-[18px] before:bg-[-104px_-208px]">
          리뷰쓰기
        </button>
      </div>
      <div>
        <div>{renderLineSvg(true)}</div>
        <div className={styles.primary_line}>{renderLineSvg(false)}</div>
      </div>
    </div>
  );
};

export default ScheduleItem;
