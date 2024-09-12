'use client';

import UserTapMenu from '@/components/auth/UserTapMenu';

function MyProfile() {
  return (
    <main className="m-auto box-content flex max-w-[71.25rem] gap-x-[3.75rem] gap-y-[1.875rem] p-5 tab:flex-col mob:px-4 tab2:gap-y-10 pc:py-10">
      {/* <Profile className="pc:self-start" user={user} setUser={setUser} /> */}

      <UserTapMenu />
    </main>
  );
}

export default MyProfile;
