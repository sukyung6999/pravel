import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="max_min_width fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full px-[16px] h-[64px] box-border bg-primary flex justify-between items-center after:content-[''] after:absolute after:bottom-[-53px] after:left-0 after:w-full after:h-[53px] after:bg-primary after-content-['']">
      <h1 className="logo">
        <Link href="/">
          <Image
            src="/logo_pravel.png"
            alt="P’revel"
            width={24}
            height={29}
            sizes="24px"
          />
        </Link>
      </h1>
      <Link
        href="/manage"
        className="relative text-white border border-white/60 text-[13px] pr-[10px] pl-[40px] py-[8px] rounded-[34px] ico_pravel_before before:absolute before:top-1/2 before:-translate-y-1/2 before:left-[10px] before:w-[24px] before:h-[24px] before:bg-[-216px_-40px]"
      >
        여행 관리
      </Link>
    </header>
  );
};

export default Header;
