import UserTapMenu from '@/components/auth/UserTapMenu';

function MyProfile() {
  return (
    <main className="m-auto box-content flex max-w-[71.25rem] gap-x-[3.75rem] gap-y-[1.875rem] p-5 tab:flex-col mob:px-4 tab2:gap-y-10 pc:py-10">
      <aside className="pc:self-start">
        <div className="pc:w-[280px]">aaa</div>
      </aside>

      <UserTapMenu />
    </main>
  );
}

export default MyProfile;
