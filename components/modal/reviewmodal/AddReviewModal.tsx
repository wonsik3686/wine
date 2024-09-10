'use client';

import { postWineReview, updateWineDetail } from '@/api/reviews.api';
import { useReviewModalStore } from '@/store/useReviewModalStore';
import { FormEvent, useEffect } from 'react';
import Button from '../../common/Button';
import Modal from '../Modal';
import ReviewInput from './ReviewInput';
import TagSelector from './TagSelector';
import TasteSlider from './TasteSlider';

type WineDetailProps = {
  id: number;
  name: string;
};

type ReviewFormValue = {
  id: number;
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: string[];
  content: string;
};

type ReviewModalProps = {
  isOpen: boolean;
  onClick: () => void;
  initialReviewValue?: ReviewFormValue;
  mode: 'add' | 'edit';
  WineDetail: WineDetailProps;
};

export default function AddReviewModal({
  isOpen,
  onClick,
  initialReviewValue,
  mode,
  WineDetail,
}: ReviewModalProps) {
  const {
    rating,
    content,
    tasteValues,
    selectedTags: aroma, // aroma를 selectedTags로 사용
    resetReview,
    setId,
    setContent,
    setRating,
    setTasteValues,
    setSelectedTags,
  } = useReviewModalStore();

  useEffect(() => {
    if (mode === 'edit' && initialReviewValue) {
      setId(initialReviewValue.id);
      setContent(initialReviewValue.content);
      setRating(initialReviewValue.rating);
      setTasteValues([
        initialReviewValue.lightBold,
        initialReviewValue.smoothTannic,
        initialReviewValue.drySweet,
        initialReviewValue.softAcidic,
      ]);
      setSelectedTags(initialReviewValue.aroma);
      console.log(initialReviewValue);
    }
  }, [
    initialReviewValue,
    mode,
    setId,
    setContent,
    setRating,
    setTasteValues,
    setSelectedTags,
    resetReview,
  ]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reviewData = {
      wineId: WineDetail.id,
      rating,
      content,
      aroma,
      lightBold: tasteValues[0],
      smoothTannic: tasteValues[1],
      drySweet: tasteValues[2],
      softAcidic: tasteValues[3],
    };

    const editReviewData = {
      rating,
      content,
      aroma,
      lightBold: tasteValues[0],
      smoothTannic: tasteValues[1],
      drySweet: tasteValues[2],
      softAcidic: tasteValues[3],
    };

    if (mode === 'edit' && initialReviewValue) {
      await updateWineDetail(initialReviewValue.id, editReviewData); // PATCH 요청으로 수정
    } else if (mode === 'add') {
      await postWineReview(reviewData); // POST 요청으로 추가
    }

    // 제출 후 초기화
    resetReview();
    onClick(); // 모달 닫기
  };

  const isButtonDisabled = !rating || !content || aroma.length === 0;

  return (
    <Modal isOpen={isOpen} onClose={onClick}>
      <div className="sm:w-[528px]">
        <section className="mb-[40px] flex items-center justify-between mob:mb-[30px]">
          <h1 className="font-sans text-2xl font-bold text-gray-800 mob:text-xl">
            {mode === 'add' ? '리뷰 등록' : '리뷰 수정'}
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
          <ReviewInput wineName={WineDetail.name} />
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
              disabled={isButtonDisabled}
            >
              {mode === 'add' ? '리뷰 남기기' : '리뷰 수정하기'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
