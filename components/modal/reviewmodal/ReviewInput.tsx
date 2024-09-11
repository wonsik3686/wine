'use client';

import StarRating from '@/components/common/StarRating';
import TextArea from '@/components/common/TextArea';
import { useReviewModalStore } from '@/store/useReviewModalStore';
import Image from 'next/image';

export default function ReviewInput({ wineName }: any) {
  const { content, rating, setContent, setRating } = useReviewModalStore();

  return (
    <>
      <section className="flex-start mb-[30px] flex items-center gap-[10px] mob:mb-[20px]">
        <div className="relative h-[67px] w-[67px]">
          <Image fill alt="기본 와인 이미지" src="/icons/defaultWine.png" />
        </div>
        <div className="flex flex-col justify-between gap-[4px]">
          <p className="break-words text-lg font-semibold mob:w-[150px] mob:text-md mob:leading-[20px]">
            {wineName}
          </p>

          <StarRating
            isInteractive
            onRatingChange={(newRating) => setRating(newRating)}
            rating={rating}
          />
        </div>
      </section>
      <TextArea
        id="content"
        name="content"
        placeholder="후기를 작성해주세요"
        style={{
          marginBottom: '32px',
          width: '100%',
          height: '200px',
        }}
        onChange={(e) => setContent(e.target.value)} // store에서 관리
        value={content}
      />
    </>
  );
}
