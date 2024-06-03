import SearchInput from "@/app/_components/common/form/SearchInput";
import HeaderDetail from "@/app/_layout/header_detail";

const introList = [
  {
    img: '/img_food.png',
    alt: '맛집'
  },
  {
    img: '/img_tour.png',
    alt: '관광'
  },
  {
    img: '/img_accommodation.png',
    alt: '숙소'
  },
]

const SearchIntro = () => {
  return <div>
    <HeaderDetail/>
    <div className="px-[16px]">
      <SearchInput/>
      <h3 className="mt-[40px] mb-[16px] text-[20px] font-bold">탐색하기</h3>
      <ul>
        {
          introList.map(item => (
            <li className="mb-[10px]">
              <button className="w-full" type="button"><img className="w-full" src={item.img} alt={`${item.alt} 탐색하기`} /></button>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
}
export default SearchIntro;