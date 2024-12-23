'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useFetchPlan } from '@/hook/usePlan';

const HomeWrapper = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchPlan();

  useEffect(() => {
    if (!isLoading && !data) {
      router.push('/onboarding');
    }
  }, [data, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data && !isLoading) {
    return null;
  }

  return null;
};

export default HomeWrapper;
