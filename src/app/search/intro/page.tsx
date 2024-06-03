import SearchInput from "@/app/_components/form/SearchInput";
import HeaderDetail from "@/app/_layout/header_detail";

const SearchIntro = () => {
  return <div>
    <HeaderDetail/>
    <div className="px-[16px]">
      <SearchInput/>
      <h3 className="mt-[40px] mb-[16px] text-[20px] font-bold">탐색하기</h3>
      <ul>
        <li className="mb-[10px]">
          <button type="button"><img src="/img_food.png" alt="맛집 탐색하기" /></button>
        </li>
        <li className="mb-[10px]">
          <button type="button"><img src="/img_tour.png" alt="관광 탐색하기" /></button>
        </li>
        <li>
          <button type="button"><img src="/img_accommodation.png" alt="숙소 탐색하기" /></button>
        </li>
      </ul>
    </div>
  </div>
}
export default SearchIntro;