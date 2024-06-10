'use client'
import { useRouter } from "next/navigation";

const HeaderDetail = () => {
  const router = useRouter();

  return <header className="flex height-[24px] px-[16px] py-[20px] leading-[24px]">
    <button type="button" className="ico_pravel ico_prev24" onClick={() => router.back()}>
      이전 페이지
    </button>
    <h2 className="font-medium">장소 탐색하기</h2>
    <button type="button" className="ico_pravel ico_close24" onClick={() => router.push('/')}>
      닫기
    </button>
  </header>
}
export default HeaderDetail;
