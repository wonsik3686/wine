import Image from 'next/image';
import Button from '../common/Button';

export default function NoReviewContent() {
  return (
    <div className="flex flex-col pc:mt-[3.75rem] pc:w-[50rem]">
      <h3 className="font-sans text-xl font-bold text-gray-800 tab:mt-6 pc:mb-[1.38rem]">
        리뷰 목록
      </h3>
      <div className="flex w-full flex-col items-center justify-center gap-6 px-[0.625rem] py-20 mob:py-12">
        <div className="relative h-[8.5rem] w-[8.5rem]">
          <Image
            src="/icons/iconNoContent.svg"
            alt="작성 리뷰 없음 아이콘"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="font-sans text-2lg font-normal text-gray-500">
          작성된 리뷰가 없어요
        </p>
        <div className="mt-5 w-[11rem]">
          <Button
            buttonColor="purple"
            buttonStyle="box"
            buttonWidth="fitToParent"
            textColor="white"
          >
            리뷰 남기기
          </Button>
        </div>
      </div>
    </div>
  );
}
