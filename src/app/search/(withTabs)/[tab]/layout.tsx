import React from 'react';

interface SearchPageProps {
  tabList: React.ReactNode;
  tabContent: React.ReactNode;
}

const SearchPage = ({ tabList, tabContent }: SearchPageProps) => {
  return (
    <>
      {tabList}
      {tabContent}
    </>
  );
};

export default SearchPage;
