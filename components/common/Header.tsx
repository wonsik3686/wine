'use client';

import Dropdown from '@/components/common/dropdown/Dropdown';
import { useAuthStore } from '@/providers/auth';
import profileIcon from '@/public/img/empty_profill.png';
import Image from 'next/image';
import Link from 'next/link';
import Profile from './Profile';

function ProfileDropDown() {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  if (!user)
    return (
      <div className="flex gap-[2.5rem]">
        <Link href="/login" className="text-[16px] font-medium text-white">
          로그인
        </Link>

        <Link href="/register" className="text-[16px] font-medium text-white">
          회원가입
        </Link>
      </div>
    );
  const profileImage = user.image || profileIcon.src;

  const options = [
    {
      label: '마이페이지',
      value: 'mypage',
      onClick: () => {
        // TODO: 마이페이지 이동경로 설정
      },
    },
    {
      label: '로그아웃',
      value: 'logout',
      onClick: () => {
        logout();
      },
    },
  ];
  return (
    <div>
      <Dropdown
        type="action"
        options={options}
        trigger={
          <div className="h-[45px] w-[45px]">
            <Profile src={profileImage.toString()} />
          </div>
        }
        onSelect={(value: string | number) => {
          const selectedOption = options.find(
            (option) => option.value === value
          );
          if (selectedOption && selectedOption.onClick) {
            selectedOption.onClick();
          }
        }}
        dropdownClassName="mt-2 bg-white"
        optionClassName="text-gray-800 hover:bg-purple-10 hover:text-purple-100"
      />
    </div>
  );
}

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

        <ProfileDropDown />
      </header>
    </div>
  );
}
