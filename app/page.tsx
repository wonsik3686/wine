import Header from '@/components/common/Header';

export default function Home() {
  return (
    // <BrowserRouter>
    //   <div className="bg-white">
    //     <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
    //       <Routes>
    //         <Route path="signIn" element={<SignIn />} />
    //       </Routes>
    //     </main>
    //   </div>
    // </BrowserRouter>

    <div className="bg-white">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24" />
    </div>
  );
}
