import React from 'react';

import IcoLoading from '../../svg/ico_loading.svg';

const LoadingSpinner = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <IcoLoading />
      <span className="sr-only">로딩중...</span>
    </div>
  );
};

export default LoadingSpinner;
