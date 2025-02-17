interface FormattedDate {
  year: number;
  month: number;
  day: number;
  dayOfWeek: string;
}
const daysOfWeek: string[] = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];
const daysOfWeekEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysOfWeekShort: string[] = ['일', '월', '화', '수', '목', '금', '토'];

const getDates = (date: Date, short: boolean = false): FormattedDate => {
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();
  const dayOfWeek: string = short
    ? daysOfWeekShort[date.getDay()]
    : daysOfWeek[date.getDay()];

  return {
    year,
    month,
    day,
    dayOfWeek,
  };
};

export const formattedDate = (date: Date) => {
  const dates = getDates(date);

  return `${dates.year}-${String(dates.month).padStart(2, '0')}-${String(dates.day).padStart(2, '0')}`;
};

export const calculateStayDays = (checkInDate: Date, checkOutDate: Date) => {
  // 두 날짜 간의 차이 계산 (밀리초 단위)
  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();

  // 밀리초를 일수로 변환 (하루는 86,400,000 밀리초)
  const nightDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // 최소 1박 이상, 차이가 0일 이하일 때 1박으로 처리
  return nightDifference <= 0 ? 1 : nightDifference;
};

export const calculateDayNumber = (
  startDate: string,
  currentDate: string,
): number => {
  const start = new Date(startDate);
  const current = new Date(currentDate);
  const diffTime = current.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + 1;
};

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0');
  const dayOfWeek = daysOfWeekEn[date.getDay()]; // 요일 가져오기

  return `${year}.${month}.${day}(${dayOfWeek})`;
};

export const getDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start.getFullYear() === end.getFullYear()) {
    return `${formatDate(start)} - ${String(end.getMonth() + 1).padStart(2, '0')}.${String(end.getDate()).padStart(2, '0')}(${daysOfWeekEn[end.getDay()]})`;
  } else {
    return `${formatDate(start)} - ${formatDate(end)}`;
  }
};

export default getDates;
