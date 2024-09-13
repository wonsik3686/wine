'use client';

import Chip from '@/components/common/Chip';
import DoubleSlider from '@/components/common/DoubleSlider';
import Modal from '@/components/modal/Modal';
import RatingSelector from '@/components/wines/RatingSelector';
import { useEffect, useState } from 'react';

type FilterState = {
  type?: 'RED' | 'WHITE' | 'SPARKLING';
  priceRange?: [number, number];
  rating?: number;
};

type FilteringModalProps = {
  isModal?: boolean;
  isOpen?: boolean;
  onClick: () => void;
  onChange?: (filters: FilterState) => void;
  filters: FilterState;
};

export default function FilteringModal({
  isModal = false,
  isOpen = false,
  onClick,
  onChange,
  filters,
}: FilteringModalProps) {
  const [filterState, setFilterState] = useState<FilterState>({});

  // 필터 타입 옵션 배열
  const typeOptions: { label: string; value: 'RED' | 'WHITE' | 'SPARKLING' }[] =
    [
      { label: 'Red', value: 'RED' },
      { label: 'White', value: 'WHITE' },
      { label: 'Sparkling', value: 'SPARKLING' },
    ];

  // 부모 컴포넌트에서 변경된 필터 값이 들어올 때마다 상태 업데이트
  useEffect(() => {
    setFilterState({
      type: filters.type,
      priceRange: filters.priceRange,
      rating: filters.rating,
    });
  }, [filters]);

  // 필터 상태를 변경하는 핸들러
  const updateFilterState = (updatedValues: Partial<typeof filterState>) => {
    const newFilterState = { ...filterState, ...updatedValues };
    setFilterState(newFilterState);
    onChange?.(newFilterState); // 부모 컴포넌트에 업데이트된 필터 상태 전달
  };

  const handleChipClick = (chipValue: 'RED' | 'WHITE' | 'SPARKLING') => {
    const newType = filterState.type === chipValue ? undefined : chipValue;
    updateFilterState({ type: newType });
  };

  const handleSliderChange = (values: [number, number]) => {
    updateFilterState({ priceRange: values });
  };

  const handleRatingChange = (rating: number | undefined) => {
    updateFilterState({ rating });
  };

  const filterContent = (
    <div className="flex h-auto w-[260px] flex-col justify-center gap-[60px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="select-none text-xl font-bold leading-loose">
          WINE TYPES
        </h2>
        <div className="flex gap-[12px]">
          {typeOptions.map((option) => (
            <Chip
              key={option.value}
              label={option.label}
              selected={filterState.type === option.value}
              onClick={() => handleChipClick(option.value)}
              isDisabled={false}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="select-none text-xl font-bold leading-loose">PRICE</h2>
        <div className="flex flex-col gap-[14px]">
          <div className="flex justify-between">
            <span className="text-center text-base font-medium text-purple-100">
              {`₩ ${filterState.priceRange?.[0].toLocaleString()}`}
            </span>
            <span className="text-center text-base font-medium text-purple-100">
              {filterState.priceRange?.[1] === 200000
                ? '₩ 200,000+'
                : `₩ ${filterState.priceRange?.[1].toLocaleString()}`}
            </span>
          </div>
          <DoubleSlider
            values={filterState.priceRange ?? [0, 200000]}
            onChange={handleSliderChange}
            min={0}
            max={200000}
            step={10000}
            minDistance={50000}
            width="full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="select-none text-xl font-bold leading-loose">RATING</h2>
        <RatingSelector
          selectedRating={filterState.rating}
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
        <div className="mb-[32px] flex items-center justify-between">
          <h1 className="select-none font-sans text-2xl font-bold text-gray-800 mob:text-xl">
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
