'use client';

import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/navigation';

const SearchInput = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const debouncedFunction = _.debounce((value) => {
    setSearchInput(value);
  }, 200);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    debouncedFunction(event.target.value);
  };

  const handleSeacrhInputDelete = () => {
    setSearchInput('');

    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
    router.push(`/search`);
  };

  useEffect(() => {
    if (searchInput) router.push(`/search?keyword=${searchInput}`);
  }, [searchInput]);

  return (
    <div className="flex items-center w-full h-[49px] px-[16px] box-border bg-gray-100 rounded-[20px] rounded-bl-[5px]">
      <label htmlFor="searchKeyword">
        <span className="ico_pravel ico_search24">키워드로 검색하기</span>
      </label>
      <input
        ref={searchInputRef}
        type="text"
        id="searchKeyword"
        placeholder="가고 싶은곳이 있다면 바로 추가해요!"
        className="grow ml-[14px] bg-gray-100 text-[14px] placeholder-gray-600"
        onChange={handleSearchInputChange}
      />
      {!!searchInput && (
        <button
          type="button"
          className="ico_pravel ico_close24"
          onClick={handleSeacrhInputDelete}
        >
          검색 키워드 삭제하기
        </button>
      )}
    </div>
  );
};

export default SearchInput;
