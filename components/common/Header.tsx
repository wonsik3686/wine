'use client';

import { useAuthStore } from '@/providers/auth';
import profileIcon from '@/public/img/empty_profill.png';
import Image from 'next/image';
import Link from 'next/link';

function DropDown() {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  if (!user)
    return (
      <Link href="/login" className="text-[16px] font-medium text-white">
        로그인
      </Link>
    );

  const profileImage = user.image || profileIcon;

  return (
    <div>
      <Link
        href="/"
        className="text-[16px] font-medium text-white"
        onClick={() => logout()}
      >
        <Image
          src={profileImage}
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full" // 원형 이미지로 설정
        />
        {/* </Link>
      <Link
        href="/"
        className="text-[16px] font-medium text-white"
        onClick={() => {
          logout();
        }}
      > */}
        로그아웃
      </Link>
    </div>
  );
}

export default function Header() {
  return (
    <div className="sticky top-0 z-30 flex w-full justify-center">
      <header
        className="flex w-full items-center justify-between bg-black
                    pc:mx-5 pc:mt-6 pc:w-[71.25rem] pc:rounded-2xl pc:px-16 pc:py-4
                    tab:mx-5 tab:mt-6 tab:rounded-2xl tab:px-14 tab:py-4
                    mob:mx-4 mob:mt-4 mob:rounded-xl mob:px-5 mob:py-4"
      >
        <Link href="/">
          <Image
            src="/icons/wineWhiteLogo-s.svg"
            alt="로고 이미지"
            width={52}
            height={15}
          />
        </Link>

        <DropDown />
      </header>
    </div>
  );
}
