import Header from '@/components/common/Header';

function HomeLayout({ children }: { children: React.ReactNode | JSX.Element }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default HomeLayout;
