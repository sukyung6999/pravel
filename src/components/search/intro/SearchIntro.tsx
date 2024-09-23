import SearchInput from '../../form/SearchInput';
import SearchBtnList from '../list/SearchBtnList';
import SearchKeywords from '../list/SearchKeywords';

interface SearchIntroProps {
  keyword: string;
}

const SearchIntro = ({ keyword }: SearchIntroProps) => (
  <div className="w-full pt-[80px] px-[16px] box-border">
    <SearchInput />
    {!keyword ? <SearchBtnList /> : <SearchKeywords keyword={keyword} />}
  </div>
);

export default SearchIntro;
