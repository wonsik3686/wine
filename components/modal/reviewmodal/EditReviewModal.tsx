'use client';

import { useReviewModalStore } from '@/store/useReviewModalStore';
import { FormEvent } from 'react';
import Button from '../../common/Button';
import Modal from '../Modal';
import ReviewInput from './ReviewInput';
import TagSelector from './TagSelector';
import TasteSlider from './TasteSlider';

type ModalProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function AddReviewModal({ isOpen, onClick }: ModalProps) {
  const { rating, content, tasteValues, selectedTags, wineId, resetReview } =
    useReviewModalStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      rating,
      wineId,
      content,
      selectedTags,
      tasteValues,
    };

    // API POST 요청 대신 임시로 넣은 값
    console.log(formData);

    // 제출 후 초기화
    resetReview();
    onClick(); // 모달 닫기
  };

  return (
    <Modal isOpen={isOpen} onClose={onClick}>
      <div className="sm:w-[528px]">
        <section className="mb-[40px] flex items-center justify-between mob:mb-[30px]">
          <h1 className="font-sans text-2xl font-bold text-gray-800 mob:text-xl">
            리뷰 등록
          </h1>
          <button
            type="button"
            onClick={onClick}
            className="text-2xl text-gray-500 mob:text-xl"
          >
            X
          </button>
        </section>
        <form
          style={{ marginBottom: '32px', width: '100%' }}
          onSubmit={handleSubmit}
        >
          <ReviewInput />
          <p className="mb-[24px] font-sans text-xl font-bold text-gray-800 mob:mb-[20px] mob:text-lg">
            와인의 맛은 어땠나요?
          </p>
          <TasteSlider />
          <p className="my-[24px] font-sans text-xl font-bold text-gray-800 mob:my-[20px] mob:text-lg">
            기억에 남는 향이 있나요?
          </p>
          <TagSelector />
          <div className="mt-[32px] flex gap-[7px] mob:mt-[24px]">
            <Button
              buttonStyle="box"
              buttonWidth="fitToChildren"
              buttonColor="purple"
              textColor="white"
              style={{ flexGrow: '2', marginTop: '20px' }}
              disabled={!content}
            >
              리뷰 수정하기
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
