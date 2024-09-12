import Button from '@/components/common/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-[71.25rem] flex-col tab:mt-5 tab:px-5 mob:mt-3 mob:px-4 pc:mt-5">
        <div className="relative mb-10 flex h-80 w-full justify-center">
          <Image
            src="/images/notFound/not_found.png"
            alt="not found image"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <h2 className="mb-4 font-sans text-3xl font-bold text-gray-600">
            Not Found
          </h2>
          <p className="mb-4 break-keep font-sans text-base font-regular text-gray-500">
            존재하지 않는 주소를입력하셨거나 요청하신 페이지의 주소가 변경,
            삭제되어 찾을 수 없습니다.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Button
                buttonColor="purple"
                buttonStyle="floating"
                buttonWidth="fitToChildren"
                textColor="white"
              >
                메인 페이지로 이동
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
