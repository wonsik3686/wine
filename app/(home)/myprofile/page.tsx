'use client';

import Profile from '@/components/auth/Profile';
import { User } from '@/types/user.types';
import { useState } from 'react';

const TEST_PROFILE = {
  id: 128,
  email: 'test1234@email.com',
  nickname: 'testID',
  image:
    'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/128/1725858928578/JTI1LmpwZw==',
  teamId: '8-4',
  createdAt: '2024-08-29T14:00:30.506Z',
  updatedAt: '2024-09-09T05:15:28.825Z',
};

function MyProfile() {
  const [user, setUser] = useState<User>(TEST_PROFILE);

  return (
    <>
      <main className="m-auto box-content flex max-w-[71.25rem] gap-x-[3.75rem] gap-y-[1.875rem] p-5 tab:flex-col mob:px-4 tab2:gap-y-10 pc:py-10">
        <Profile className="pc:self-start" user={user} setUser={setUser} />

        <div className="h-screen w-full bg-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-2lg font-bold tab2:gap-8 tab2:text-xl">
              <p className="text-gray-800">내가 쓴 후기</p>
              <p className="text-gray-500">내가 등록한 와인</p>
            </div>
            <p className="text-xs2 font-normal text-purple-100 tab2:text-md">
              총 N개
            </p>
          </div>
        </div>
      </main>
      <div>
        {user.email}
        {user.nickname}
        <button type="button">{`${user!.id || '로그인'}`}</button>
      </div>
    </>
  );
}

export default MyProfile;
