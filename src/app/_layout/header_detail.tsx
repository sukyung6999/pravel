import ButtonIcon from "../_components/button/ButtonIcon";

const HeaderDetail = () => {
  return <header className="">
    <ButtonIcon type="button" className="ico_pravel ico_prev24">
      이전 페이지
    </ButtonIcon>
    <h2>장소 탐색하기</h2>
    <ButtonIcon type="button" className="ico_pravel ico_close24">
      닫기
    </ButtonIcon>
  </header>
}
export default HeaderDetail;
