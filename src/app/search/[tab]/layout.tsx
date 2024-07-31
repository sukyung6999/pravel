import React from 'react';

import HeaderDetail from '@/layout/header/HeaderDetail';
import ModalWrapper from '@/layout/wrapper/ModalWrapper';

interface Props {
  tabList: React.ReactNode;
  tabContent: React.ReactNode;
}

const SearchPage = ({ tabList, tabContent }: Props) => {
  return (
    <ModalWrapper>
      <HeaderDetail moveTo="/search" />
      {tabList}
      {tabContent}
    </ModalWrapper>
  );
};

export default SearchPage;
