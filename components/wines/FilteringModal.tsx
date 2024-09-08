'use client';

import Chip from '@/components/common/Chip';
import DoubleSlider from '@/components/common/DoubleSlider';
import RatingSelector from '@/components/wines/RatingSelector';
import { useState } from 'react';

// TODO: 필터링 모달에 따른 불러오기 구현
// TODO: 더블 슬라이더 값 표기 구현
export default function FliteringModal() {
  const [selectedChip, setSelectedChip] = useState<string>('Red');
  const [sliderValues, setSliderValues] = useState<[number, number]>([
    0, 150000,
  ]);
  const [selectedRating, setSelectedRating] = useState<string>('전체');
  const handleChipClick = (chipLabel: string) => {
    setSelectedChip(chipLabel); // 선택된 칩을 업데이트
  };

  return (
    <div className="flex h-auto w-[284px] flex-col gap-[60px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="select-none text-xl font-bold leading-loose">
          WINE TYPES
        </h2>
        <div className="flex gap-[15px]">
          <Chip
            label="Red"
            selected={selectedChip === 'Red'}
            onClick={() => handleChipClick('Red')}
            isDisabled={false}
          />
          <Chip
            label="White"
            selected={selectedChip === 'White'}
            onClick={() => handleChipClick('White')}
            isDisabled={false}
          />
          <Chip
            label="Sparkling"
            selected={selectedChip === 'Sparkling'}
            onClick={() => handleChipClick('Sparkling')}
            isDisabled={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[60px]">
        <h2 className="select-none text-xl font-bold leading-loose">PRICE</h2>
        <DoubleSlider
          values={sliderValues}
          onChange={(values: [number, number]) => {
            setSliderValues(values);
          }}
          min={0}
          max={150000}
          width="full"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="select-none text-xl font-bold leading-loose">RATING</h2>
        <RatingSelector
          selectedRating={selectedRating}
          onRatingChange={setSelectedRating} // 상태를 변경하는 함수 전달
        />
      </div>
    </div>
  );
}
