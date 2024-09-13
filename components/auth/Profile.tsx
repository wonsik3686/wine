'use client';

import defaultProfill from '@/public/icons/defaultProfile.svg?url';
import { User } from '@/types/user.types';
import Image from 'next/image';
import { Dispatch, SetStateAction, useRef } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import ProfileUpload from './ProfileUpload';

function Profile({
  className,
  user,
  setUser,
}: {
  className?: string;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}) {
  const textInput = useRef<HTMLInputElement>(null);

  const handelChangeNickname = () => {
    // patchUser({ image: user.image, nickname: textInput.current?.value });
  };

  return (
    <aside
      className={`flex flex-col gap-y-5 rounded-2xl border border-gray-300 p-5 shadow-[0_2px_20px_0_rgba(0,0,0,0.04)] tab2:gap-y-[1.875rem] tab2:py-[1.875rem] tab:tab2:px-10 pc:w-[17.5rem] pc:gap-y-12 pc:py-10 ${className}`}
    >
      <div className="flex items-center gap-8 mob:gap-4 pc:flex-col">
        <ProfileUpload
          className="size-[3.75rem] border border-gray-300 tab2:size-20 pc:size-[10.25rem]"
          setUser={setUser}
        >
          <Image
            // eslint-disable-next-line no-constant-condition
            src={null ? defaultProfill : user.image}
            alt="프로필 이미지"
            width={164}
            height={164}
            quality={100}
            className="h-full object-cover"
          />
        </ProfileUpload>

        <div className="flex flex-col gap-y-1 tab2:gap-2 pc:gap-4 pc:text-center">
          <p className="text-xl font-bold text-gray-800 tab2:text-2xl">
            {user.nickname}
          </p>

          <p className="text-md font-normal text-gray-500 tab2:text-lg">
            {user.email}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 gap-y-1.5 tab2:tab:flex-row pc:gap-y-2">
        <Input
          wrapClassName="gap-y-2 tab2:gap-y-2.5"
          labelClassName="mob:text-md"
          inputClassName="mob:py-[0.5625rem] tab2:py-[0.6875rem]"
          label="닉네임"
          placeholder={user.nickname}
          ref={textInput}
        />

        <Button
          type="button"
          buttonStyle="box"
          buttonColor="purple"
          buttonWidth="fitToChildren"
          textColor="white"
          className="self-end text-nowrap py-[0.5625rem] !font-bold mob:text-md tab2:py-[0.6875rem] tab2:tab:px-[1.875rem] pc:py-2"
          onClick={handelChangeNickname}
        >
          변경하기
        </Button>
      </div>
    </aside>
  );
}

export default Profile;
