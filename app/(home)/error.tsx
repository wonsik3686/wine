'use client';

import Button from '@/components/common/Button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-[71.25rem] flex-col tab:mt-5 tab:px-5 mob:mt-3 mob:px-4 pc:mt-5">
        <div className="text-center">
          <h2 className="mb-4 font-sans text-3xl font-bold text-gray-600">
            {error.name}
          </h2>
          <p className="mb-4 break-keep font-sans text-base font-regular text-gray-500">
            {error.message}
          </p>
          <div className="flex flex-col gap-5">
            <Button
              buttonColor="purple"
              buttonStyle="box"
              buttonWidth="fitToChildren"
              textColor="white"
              onClick={() => reset()}
            >
              재시도
            </Button>
            <Link href="/">
              <Button
                buttonColor="purple"
                buttonStyle="box"
                buttonWidth="fitToParent"
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
