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

  if (isLoading) return <LoadingSpinner className="mt-[100px] text-center" />;

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
      {[foodList, tourList].map((list, idx) => {
        if (list.length > 0)
          return (
            <div key={`keywordlist${idx}`} className={styled.wrap_keywords}>
              <strong className={styled.tit_keywords}>
                {!idx ? '맛집' : '관광'}
              </strong>
              <ul>
                {list.map((item) => (
                  <li key={item.contentId}>
                    <Link
                      href={`/search/food/detail/${item.contentId}`}
                      className={styled.box_txt}
                    >
                      <span className="ico_pravel ico_location24_g mx-[4px] my-[8px]"></span>
                      <div className="inline-block ml-[20px]">
                        <strong className={styled.txt_keyword}>
                          {SanitizedInnerHTML(
                            replaceHighlightText(item.keyword),
                          )}
                        </strong>
                        <span className={styled.txt_address}>
                          {item.address}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        else return null;
      })}
    </>
  );
};

export default SearchKeywords;
