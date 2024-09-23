import Image from 'next/image';

import LineEndEven from '@/components/svg/ico_line_end_even.svg';
import LineEndOdd from '@/components/svg/ico_line_end_odd.svg';
import LineEven from '@/components/svg/ico_line_even.svg';
import LineOdd from '@/components/svg/ico_line_odd.svg';
import LineStart from '@/components/svg/ico_line_start.svg';

import dummy from './dummy_schedule.json';

import styles from './Schedule.module.css';

const ScheduleItem = ({ schedule }: { schedule: (typeof dummy)['0'] }) => {
  const categoryClass =
    schedule.category === '식당'
      ? styles.category_restaurant
      : styles.category_sightseeing;

  const renderGreenLineSvg = () => {
    if (schedule.order === 1) {
      return (
        <LineStart
          width={356}
          height={92}
          alt=""
          className="absolute top-full left-1/2 -translate-x-1/2"
        />
      );
    }

    // 마지막 id일 경우
    if (schedule.order === dummy.length) {
      if (schedule.order % 2 === 0) {
        return (
          <LineEndEven
            width={356}
            height={92}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2"
          />
        );
      } else {
        return (
          <LineEndOdd
            width={356}
            height={92}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2"
          />
        );
      }
    }

    // 그 외 짝수/홀수 처리
    if (schedule.order % 2 === 0) {
      return (
        <LineEven
          width={356}
          height={168}
          alt=""
          className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      );
    } else {
      return (
        <LineOdd
          width={356}
          height={168}
          alt=""
          className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      );
    }
  };

  return (
    <div
      className={`${styles.schedule_item} relative flex items-center gap-[16px] h-[155px]`}
    >
      <div>
        <div className="inline-block rounded-[30px_30px_30px_10px] overflow-hidden">
          <Image
            src={`/${schedule.img}`}
            alt="test"
            width={100}
            height={100}
            sizes="100px"
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
          {schedule.category}
        </span>
        <h4 className="text-gray-900 text-[18px] font-semibold my-[6px] leading-[1.16]">
          {schedule.title}
        </h4>
        <p className="mb-[4px] text-gray-500 text-[13px] font-semibold">
          {schedule.description}
        </p>
        <button className="flex text-primary text-[13px] font-semibold ico_pravel_before before:inline-block before:w-[18px] before:h-[18px] before:bg-[-104px_-208px]">
          리뷰쓰기
        </button>
      </div>
      <div>{renderGreenLineSvg()}</div>
    </div>
  );
};

export default ScheduleItem;
