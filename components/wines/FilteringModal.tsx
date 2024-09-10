'use client';

import Chip from '@/components/common/Chip';
import DoubleSlider from '@/components/common/DoubleSlider';
import Modal from '@/components/modal/Modal';
import RatingSelector from '@/components/wines/RatingSelector';
import { useState } from 'react';

type FilteringModalProps = {
  isModal?: boolean;
  isOpen?: boolean;
  onClick: () => void;
  onChange?: (filters: {
    type?: 'RED' | 'WHITE' | 'SPARKLING' | undefined;
    limit?: number;
    priceRange?: [number, number];
    rating?: number;
  }) => void;
  priceRange: [number, number];
};

// TODO: 더블 슬라이더 값 표기 구현
/**
 * 필터링 기능을 관리하는 컴포넌트 (모달 겸용)
 *
 * - isModal - 모달로 사용되는지 여부
 * - isOpen - 모달로 사용될 경우, 열려있는지에 대한 정보를 받는 prop
 * - onClick - 모달로 사용할 경우, 모달 창을 닫을 때 사용하는 함수 prop
 * - onChange - filter 정보를 변경할 함수 객체 prop
 * - priceRange - 가격 더블 슬라이더 min max 정보를 담은 배열 prop
 *
 */
export default function FilteringModal({
  isModal = false,
  isOpen = false,
  onClick,
  onChange,
  priceRange,
}: FilteringModalProps) {
  const [selectedChip, setSelectedChip] = useState<
    'RED' | 'WHITE' | 'SPARKLING' | undefined
  >(undefined);
  const [sliderValues, setSliderValues] =
    useState<[number, number]>(priceRange);
  const [selectedRating, setSelectedRating] = useState<string>('전체');

  const handleChipClick = (chipLabel: 'RED' | 'WHITE' | 'SPARKLING') => {
    const newSelectedChip = selectedChip === chipLabel ? undefined : chipLabel;
    setSelectedChip(newSelectedChip);
    onChange?.({ type: newSelectedChip });
  };

  const handleSliderChange = (values: [number, number]) => {
    setSliderValues(values);
    onChange?.({ priceRange: values });
  };

  const handleRatingChange = (rating: string) => {
    setSelectedRating(rating);
    const ratingValue = parseFloat(rating);
    if (!Number.isNaN(ratingValue)) {
      onChange?.({ rating: ratingValue });
    }
  };

  const filterContent = (
    <div className="flex h-auto w-[260px] flex-col justify-center gap-[60px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="select-none text-xl font-bold leading-loose">
          WINE TYPES
        </h2>
        <div className="flex gap-[15px]">
          <Chip
            label="Red"
            selected={selectedChip === 'RED'}
            onClick={() => handleChipClick('RED')}
            isDisabled={false}
          />
          <Chip
            label="White"
            selected={selectedChip === 'WHITE'}
            onClick={() => handleChipClick('WHITE')}
            isDisabled={false}
          />
          <Chip
            label="Sparkling"
            selected={selectedChip === 'SPARKLING'}
            onClick={() => handleChipClick('SPARKLING')}
            isDisabled={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[60px]">
        <h2 className="select-none text-xl font-bold leading-loose">PRICE</h2>
        <DoubleSlider
          values={sliderValues}
          onChange={handleSliderChange}
          min={0}
          max={150000}
          width="full"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="select-none text-xl font-bold leading-loose">RATING</h2>
        <RatingSelector
          selectedRating={selectedRating}
          onRatingChange={handleRatingChange}
        />
      </div>
    </div>
  );

  if (isModal) {
    if (!isOpen) {
      return null;
    }

    // TODO: X 아이콘으로 바꿔야 합니다.
    return (
      <Modal isOpen={isOpen} onClose={onClick}>
        <div className="mb-[40px] flex items-center justify-between mob:mb-[30px]">
          <h1 className="font-sans text-2xl font-bold text-gray-800 mob:text-xl">
            필터
          </h1>
          <button
            type="button"
            onClick={onClick}
            className="text-2xl text-gray-500 mob:text-xl"
          >
            X
          </button>
        </div>
        {filterContent}
      </Modal>
    );
  }

  return filterContent;
}
