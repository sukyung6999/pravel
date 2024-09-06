import parse from 'html-react-parser';

import IcoLogo from '../../svg/ico_logo.svg';

interface EmptySearchProps {
  addClass: string;
  text: string;
  logoWidth: number;
  logoHeight: number;
}
const EmptySearch = ({
  addClass,
  text,
  logoWidth,
  logoHeight,
}: EmptySearchProps) => (
  <div
    className={`flex flex-col justify-center items-center w-full min-h-[200px] rounded-[12px] bg-gray-400 text-center${addClass}`}
  >
    <IcoLogo width={logoWidth} height={logoHeight} />
    <p className="mt-[10px] text-[14px] text-white">{parse(text)}</p>
  </div>
);

export default EmptySearch;
