interface SearchKeywordsProps {
  keyword: string;
}

const SearchKeywords = ({ keyword }: SearchKeywordsProps) => {
  return (
    <ul>
      <li>{keyword}</li>
    </ul>
  );
};

export default SearchKeywords;
