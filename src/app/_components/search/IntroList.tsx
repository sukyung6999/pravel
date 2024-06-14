'use client';
import { setCurrentTab } from "@/app/_store/slice/search";
import SearchInput from "../form/SearchInput";

import { introList } from "@/app/_types/search.type";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

interface Props {
  list: introList[]
}

const IntroList = ({list}: Props) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleNavButtonClick = (id: string) => {
    router.push(`/search/list/${id}`);
    dispatch(setCurrentTab({data: id}));
  }
  return (
    <div className="w-full px-[16px] box-border">
      <SearchInput />
      <h3 className="mt-[40px] mb-[16px] text-[20px] font-bold">탐색하기</h3>
      <ul className='w-full'>
        {list.map((item,idx) => (
          <li className="mb-[10px]" key={item.alt}>
            <button className="w-full" type="button" onClick={() => handleNavButtonClick(item.id)}>
              <img
                className="w-full"
                src={item.img}
                alt={`${item.alt} 탐색하기`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default IntroList;