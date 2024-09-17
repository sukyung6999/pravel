'use client';

import Link from 'next/link';

import LoadingSpinner from '@/components/common/loading/LoadingSpinner';
import { useFetchKeywordList } from '@/hook/useSearch';
import { SanitizedInnerHTML } from '@/lib/const/sanitizedInnerHTML';
import { KeywordListData } from '@/types/search.type';

import styled from '../search.module.css';

interface SearchKeywordsProps {
  keyword: string;
}

const SearchKeywords = ({ keyword }: SearchKeywordsProps) => {
  const { data, isLoading } = useFetchKeywordList(keyword);
  const foodList: KeywordListData[] = [];
  const tourList: KeywordListData[] = [];

  const replaceHighlightText = (str: string) => {
    return str.replaceAll(
      keyword,
      `<em style="font-style: normal;
  color: #0BC58D;">${keyword}</em>`,
    );
  };

  if (isLoading) return <LoadingSpinner className="align-center" />;

  if (!data?.length)
    return (
      <p className="pt-[20px] text-gray-500">
        관련 검색어가 존재하지 않습니다.
      </p>
    );

  data.forEach((item) => {
    if (item.category === '39') foodList.push(item);
    else tourList.push(item);
  });

  return (
    <>
      {foodList.length > 0 && (
        <div className={styled.wrap_keywords}>
          <strong className={styled.tit_keywords}>맛집</strong>
          <ul>
            {foodList.map((item) => (
              <li key={item.keyword}>
                <Link
                  href={`/search/food/detail/${item.contentId}`}
                  className={styled.box_txt}
                >
                  <strong className={styled.txt_keyword}>
                    {SanitizedInnerHTML(replaceHighlightText(item.keyword))}
                  </strong>
                  <span className={styled.txt_address}>{item.address}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {tourList.length > 0 && (
        <div className={styled.wrap_keywords}>
          <strong className={styled.tit_keywords}>관광</strong>
          <ul>
            {tourList.map((item) => (
              <li key={item.keyword}>
                <Link
                  href={`/search/tour/detail/${item.contentId}`}
                  className={styled.box_txt}
                >
                  <strong className={styled.txt_keyword}>
                    {SanitizedInnerHTML(replaceHighlightText(item.keyword))}
                  </strong>
                  <span className={styled.txt_address}>{item.address}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchKeywords;
