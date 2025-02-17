import { LocationRequest } from '@/types/location.type';

export interface Plan {
  id: number;
  url: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  startPoint: string;
  endPoint: string;
}

export type RecommandPlan = Pick<Plan, 'id' | 'url'>;

export type PlanDetails = Plan & {
  planId: number;
  adult: number;
  child: number;
  schedules: (Omit<LocationRequest, 'planId'> & { order: number })[];
};
// {
//   planId: number;
//   startDate: string;
//   endDate: string;

//   schedules: {
//     id: number;
//     date: string;
//     category: string;
//     thumbnail: string;
//     title: string;
//     description: string;
//     order: number;
//   }[]
// }
