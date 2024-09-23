import SearchIntro from '@/components/search/intro/SearchIntro';

interface SearchParams {
  [key: string]: string;
}
interface IntroProps {
  searchParams: SearchParams;
}

const Intro = ({ searchParams }: IntroProps) => {
  return (
    <>
      <SearchIntro keyword={searchParams.keyword} />
    </>
  );
};

export default Intro;
