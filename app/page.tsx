import SignIn from './auth/login/SignIn';

export default function Home() {
  return (
    <div className="bg-white">
      <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
        <SignIn />
      </main>
    </div>
  );
}
