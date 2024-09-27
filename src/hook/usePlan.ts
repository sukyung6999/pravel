import { useQuery } from '@tanstack/react-query';

export const useFetchPlan = () => {
  return useQuery({
    queryKey: ['plan'],
    // queryFn: () => getPlanDetails(),
    queryFn: () => {
      return {
        planId: 1,
        startDate: '2024-09-24',
        endDate: '2024-09-28',
        schedules: [
          {
            id: 1,
            date: '2024-09-24',
            category: '관광',
            thumbnail:
              'http://tong.visitkorea.or.kr/cms/resource/51/3085251_image2_1.JPG',
            name: '아쿠아플라넷',
            description: '아쿠아플라넷아쿠아플라넷아쿠아플라넷아쿠아플라넷',
            order: 1,
          },
          {
            id: 2,
            date: '2024-09-24',
            category: '식당',
            thumbnail:
              'http://tong.visitkorea.or.kr/cms/resource/51/3085251_image2_1.JPG',
            name: '진라이',
            description: '진라이진라이진라이진라이진라이',
            order: 2,
          },
          {
            id: 3,
            date: '2024-09-24',
            category: '식당',
            thumbnail:
              'http://tong.visitkorea.or.kr/cms/resource/51/3085251_image2_1.JPG',
            name: '사케야',
            description: '사케야사케야사케야',
            order: 3,
          },
          {
            id: 4,
            date: '2024-09-25',
            category: '식당',
            thumbnail:
              'http://tong.visitkorea.or.kr/cms/resource/51/3085251_image2_1.JPG',
            name: '제주공항',
            description: '제주공항제주공항제주공항제주공항제주공항',
            order: 4,
          },
        ],
      };
    },
  });
};
