import ButtonIcon from "../_components/button/ButtonIcon";

const HeaderDetail = () => {
  return <header className="flex height-[24px] px-[16px] py-[20px] leading-[24px]">
    <ButtonIcon type="button" className="ico_pravel ico_prev24">
      이전 페이지
    </ButtonIcon>
    <h2 className="font-medium">장소 탐색하기</h2>
    <ButtonIcon type="button" className="ico_pravel ico_close24">
      닫기
    </ButtonIcon>
  </header>
}
export default HeaderDetail;
