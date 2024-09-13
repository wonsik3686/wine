'use client';

import { useAuthStore } from '@/providers/auth';
import defaultProfill from '@/public/icons/defaultProfile.svg?url';
import { useUpdateUser } from '@/queries/users.queries';
import Image from 'next/image';
import { useRef } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import ProfileUpload from './ProfileUpload';

function Profile() {
  const user = useAuthStore((state: any) => state.user);
  const { mutate: updateUser } = useUpdateUser();
  const NicknameInput = useRef<HTMLInputElement>(null);

  const handelChangeNickname = () => {
    const target = NicknameInput.current;
    const data = target?.value;

    if (data) {
      updateUser({ nickname: data });
      target.value = '';
    }
  };

  return (
    <aside className="flex flex-col gap-y-5 rounded-2xl border border-gray-300 p-5 shadow-[0_2px_20px_0_rgba(0,0,0,0.04)] tab2:gap-y-[1.875rem] tab2:py-[1.875rem] tab:tab2:px-10 pc:w-[17.5rem] pc:gap-y-12 pc:self-start pc:py-10">
      <div className="flex items-center gap-8 mob:gap-x-4 pc:flex-col">
        <ProfileUpload className="size-[3.75rem] tab2:size-20 pc:size-[10.25rem]">
          <Image
            src={user?.image || defaultProfill}
            alt="프로필 이미지"
            width={164}
            height={164}
            quality={100}
            className="h-full rounded-full border border-gray-300 object-cover"
          />
        </ProfileUpload>

        <div className="flex flex-col gap-y-1 tab2:gap-y-2 pc:gap-y-4 pc:text-center">
          <p className="text-xl font-bold text-gray-800 tab2:text-2xl">
            {user?.nickname}
          </p>

          <p className="text-md font-normal text-gray-500 tab2:text-lg">
            {user?.email}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 gap-y-1.5 tab:tab2:flex-row pc:gap-y-2">
        <Input
          wrapClassName="gap-y-2 tab2:gap-y-2.5"
          labelClassName="mob:text-md"
          inputClassName="placeholder:text-gray-500 mob:py-[0.5625rem] tab2:py-[0.6875rem]"
          label="닉네임"
          placeholder={user?.nickname}
          ref={NicknameInput}
        />

        <Button
          type="button"
          buttonStyle="box"
          buttonColor="purple"
          buttonWidth="fitToChildren"
          textColor="white"
          className="self-end py-[0.5625rem] !font-bold mob:text-md tab2:py-[0.6875rem] tab2:tab:px-[1.875rem] pc:py-2"
          onClick={handelChangeNickname}
        >
          변경하기
        </Button>
      </div>
    </aside>
  );
}

export default Profile;
