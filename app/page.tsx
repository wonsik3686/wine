// import Header from '@/components/common/Header';
import Signup from '@/app/auth/register/Signup';

export default function Home() {
  return (
    <div className="bg-white">
      {/* <Header /> */}

      <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
        <Signup />
      </main>
    </div>
  );
}
