'use client';

import Profile from '@/components/auth/Profile';
import UserTapMenu from '@/components/auth/UserTapMenu';
import { useAuthStore } from '@/providers/auth';
import { redirect } from 'next/navigation';

function MyProfile() {
  const user = useAuthStore((state: any) => state.user);
  if (!user) {
    redirect('/login');
  }

  return (
    <main className="m-auto box-content flex max-w-[71.25rem] gap-x-[3.75rem] gap-y-[1.875rem] p-5 tab:flex-col mob:px-4 tab2:gap-y-10 pc:py-10">
      <Profile />

      <UserTapMenu />
    </main>
  );
}

export default MyProfile;
