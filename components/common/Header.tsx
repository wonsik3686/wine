'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="sticky top-0 z-30 flex w-full justify-center">
      <header
        className="flex w-full items-center justify-between bg-black
    								tab:mx-5 tab:mt-6 tab:rounded-2xl tab:px-14 tab:py-4 mob:mx-4
										mob:mt-4 mob:rounded-xl mob:px-5 mob:py-4 pc:mx-5
    								pc:mt-6 pc:w-[71.25rem] pc:rounded-2xl pc:px-16 pc:py-4"
      >
        <Link href="/">
          <Image
            src="/icons/wineWhiteLogo-s.svg"
            alt="로고 이미지"
            width={52}
            height={15}
          />
        </Link>

        {/* 로그인 페이지 생성 후 Link로 수정 */}
        <span className="text-[16px] font-medium text-white">로그인</span>
      </header>
    </div>
  );
}
