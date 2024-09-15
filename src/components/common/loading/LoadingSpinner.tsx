import React from 'react';

import IcoLoading from '@/components/svg/ico_loading';

const LoadingSpinner = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <IcoLoading />
      <span className="sr-only">로딩중...</span>
    </div>
  );
};

export default LoadingSpinner;
