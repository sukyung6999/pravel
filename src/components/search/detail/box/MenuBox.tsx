import { useFetchDetailMenu } from '@/hook/useSearch';

import style from '../detail.module.css';

interface MenuBoxProps {
  tab: string;
  id: string;
}

const MenuBox = ({ tab, id }: MenuBoxProps) => {
  const { data } = useFetchDetailMenu({ tab, id });

  const restBoxs = 3 - ((data?.length || 0) % 3);

  console.log(data);

  return (
    <div className={style.box_detail}>
      <strong className={style.tit_detail}>메뉴</strong>
      <ul className="flex flex-wrap justify-between items-center gap-[8px] mb-[20px]">
        {}
        <li className="relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:w-[calc(100%/3)] before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px] bg-gray-100">
          <img src="" alt="" className="" />
        </li>
        <li className="relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:w-[calc(100%/3)] before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px] bg-gray-100">
          <img src="" alt="" className="" />
        </li>
        <li className="relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:w-[calc(100%/3)] before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px] bg-gray-100">
          <img src="" alt="" className="" />
        </li>
        <li className="relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:w-[calc(100%/3)] before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px] bg-gray-100">
          <img src="" alt="" className="" />
        </li>
        {restBoxs < 3 &&
          Array.from({ length: restBoxs }, (_, idx) => (
            <li
              key={idx}
              className="relative grow shrink-0 w-[calc(100%/3-16px)] before:relative before:z-[-1] before:content-[''] before:block before:w-[calc(100%/3)] before:h-0 before:pt-[100%] max-h-[228px] rounded-[12px] rounded-bl-[5px]"
            ></li>
          ))}
      </ul>
      <button type="button" className="btn_bg_black mt-[20px]">
        메뉴 더보기
      </button>
    </div>
  );
};

export default MenuBox;
