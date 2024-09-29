import { LocationRequest } from '@/types/location.type';

export interface Plan {
  id: number;
  url: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
}

export type RecommandPlan = Pick<Plan, 'id' | 'url'>;

export type PlanDetails = Pick<Plan, 'startDate' | 'endDate'> & {
  planId: number;
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
//     name: string;
//     description: string;
//     order: number;
//   }[]
// }
