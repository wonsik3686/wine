import HeaderWrapper from './header-wrapper';

function HomeLayout({ children }: { children: React.ReactNode | JSX.Element }) {
  return (
    <>
      <HeaderWrapper />
      {children}
    </>
  );
}

export default HomeLayout;
