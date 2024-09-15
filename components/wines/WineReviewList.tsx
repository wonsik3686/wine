'use client';

import useDeleteReview from '@/hooks/reviews/useDeleteReview';
import useLikeReview from '@/hooks/wines/useLikeReview';
import { useAuthStore } from '@/providers/auth';
import { useReviewModalStore } from '@/store/useReviewModalStore';
import { WineDetailType } from '@/types/wine.types';
import formatDistanceToNowKor from '@/utils/dateTimeUtils/FormatDistanceToNow';
import translateAromaToKorean from '@/utils/translate/TranslateAromaToKorean';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RatingBox } from '../common/Boxes';
import ChipSwiper from '../common/ChipSwiper';
import Dropdown from '../common/dropdown/Dropdown';
import Profile from '../common/Profile';
import DeleteModal from '../modal/DeleteModal';
import WineTasteSlider from './WineTasteSlider';

type WineReviewListProps = {
  onOpenReviewModal: () => void;
} & Pick<WineDetailType, 'reviews'>;

export default function WineReviewList({
  onOpenReviewModal,
  reviews,
}: WineReviewListProps) {
  const [expandedReviewIndexes, setExpandedReviewIndexes] = useState<number[]>(
    []
  );
  const [selectedReviewId, setSelectedReviewId] = useState<number>(0);
  const { isReviewLiked, likeReview } = useLikeReview();
  const {
    isDeleteReviewModalOpen,
    setIsDeleteReviewModalOpen,
    handleDeleteReview,
    handleDeleteReviewCancel,
  } = useDeleteReview();
  const user = useAuthStore((state) => state.user);
  // const { user } = useAuthStore();
  const { setSelectedReviewToUpdateId, setReviewModalMode } =
    useReviewModalStore();
  const dropdownOptionValues = { EDIT_REVIEW: 'edit', DELETE_REVIEW: 'delete' };
  const dropdwonOptions = [
    { label: '수정하기', value: dropdownOptionValues.EDIT_REVIEW },
    { label: '삭제하기', value: dropdownOptionValues.DELETE_REVIEW },
  ];

  const toggleReview = (index: number) => {
    if (expandedReviewIndexes.includes(index)) {
      setExpandedReviewIndexes(
        expandedReviewIndexes.filter((i) => i !== index)
      );
    } else {
      setExpandedReviewIndexes([...expandedReviewIndexes, index]);
    }
  };

  const handleModalDeleteReview = () => {
    handleDeleteReview(selectedReviewId);
  };

  useEffect(() => {}, [reviews]);

  return (
    <div className="flex flex-col pc:mt-[3.75rem] pc:w-[50rem]">
      <h3 className="font-sans text-xl font-bold text-gray-800 tab:hidden mob:hidden pc:mb-[1.38rem]">
        리뷰 목록
      </h3>
      {reviews.map((review, index) => (
        <article
          className="mb-5 mt-2 flex flex-col items-center justify-center
												gap-[0.625rem] self-stretch rounded-2xl border-[1px] border-gray-300 px-10 pb-6 pt-8
												mob:px-6 mob:py-4"
          key={`review-${review.id}`}
        >
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="h-16 w-16 mob:h-[2.625rem] mob:w-[2.625rem]">
                <Profile src={review.user.image?.toString()} />
              </div>
              <div className="flex flex-col">
                <b className="font-sans text-2lg font-semibold text-gray-800 mob:text-lg">
                  {review.user.nickname}
                </b>
                <p className="font-sans text-lg font-normal text-gray-500 mob:text-md">
                  {formatDistanceToNowKor(review.updatedAt)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-7 mob:gap-[1.12rem]">
              <div>
                <motion.button
                  type="button"
                  className="box relative h-[2.375rem] w-[2.375rem] mob:h-8 mob:w-8"
                  onClick={() => {
                    likeReview(review.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={
                      isReviewLiked(review.id)
                        ? '/icons/iconHeartFilled.svg'
                        : '/icons/iconHeart.svg'
                    }
                    alt="하트 아이콘"
                    fill
                    className="object-contain"
                  />
                </motion.button>
              </div>
              {review.user.id === user?.id && (
                <>
                  <Dropdown
                    type="action"
                    options={dropdwonOptions}
                    onSelect={(value: string | number) => {
                      if (value === dropdownOptionValues.EDIT_REVIEW) {
                        setSelectedReviewToUpdateId(review.id);
                        setReviewModalMode('edit');
                        onOpenReviewModal();
                      } else if (value === dropdownOptionValues.DELETE_REVIEW) {
                        setSelectedReviewId(review.id);
                        setIsDeleteReviewModalOpen(true);
                      }
                    }}
                    optionClassName="text-center"
                    trigger={
                      <button
                        type="button"
                        className="relative h-[2.375rem] w-[2.375rem] cursor-pointer mob:h-8 mob:w-8"
                      >
                        <Image
                          src="/icons/iconDot.png"
                          alt="더보기 아이콘"
                          fill
                          className="object-contain"
                        />
                      </button>
                    }
                  />
                  <DeleteModal
                    isOpen={isDeleteReviewModalOpen}
                    onClick={handleModalDeleteReview}
                    onCancel={handleDeleteReviewCancel}
                  />
                </>
              )}
            </div>
          </div>
          <div className="mt-5 flex w-full justify-between">
            <div className="relative overflow-hidden">
              <div
                className="z-5 pointer-events-none absolute h-full w-full
															bg-gradient-to-l from-white via-white/0 via-5% to-transparent"
              />
              <ChipSwiper slideData={translateAromaToKorean(review.aroma)} />
            </div>
            <div>
              <RatingBox rating={review.rating} />
            </div>
          </div>
          <div
            className={`mt-6 w-full ${expandedReviewIndexes.includes(index) ? '' : 'hidden'}`}
          >
            <p className="font-sans text-lg font-normal text-gray-800">
              {review.content}
            </p>
            <div className="mt-5">
              <WineTasteSlider
                lightBold={review.lightBold}
                smoothTannic={review.smoothTannic}
                drySweet={review.drySweet}
                softAcidic={review.softAcidic}
              />
            </div>
          </div>
          <button
            id="btnExpandReview"
            type="button"
            onClick={() => toggleReview(index)}
            className="relative h-[1.875rem] w-full rounded-b-xl bg-white transition-all duration-200 ease-in-out hover:bg-gray-200 hover:opacity-80 focus:bg-white active:opacity-70 active:hover:bg-gray-300"
          >
            <Image
              src={
                expandedReviewIndexes.includes(index)
                  ? '/icons/iconArrowUp.svg'
                  : '/icons/iconArrowDown.svg'
              }
              alt="펼치기 아이콘"
              fill
              className="object-contain"
            />
          </button>
        </article>
      ))}
    </div>
  );
}
