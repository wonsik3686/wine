'use client';

import RadioButton from '@/components/common/RadioButton';

export default function RatingSelector({
  selectedRating,
  onRatingChange,
}: {
  selectedRating: string;
  onRatingChange: (rating: string) => void;
}) {
  const handleRadioChange = (rating: string) => {
    onRatingChange(rating);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <div
        className={`flex items-center gap-[15px] text-base font-medium leading-relaxed ${
          selectedRating === '전체' && 'text-purple-100'
        }`}
      >
        <RadioButton
          isChecked={selectedRating === '전체'}
          onChange={() => handleRadioChange('전체')}
        />
        <span>전체</span>
      </div>

      <div
        className={`flex items-center gap-[15px] text-base font-medium leading-relaxed ${
          selectedRating === '4.8 - 5.0' && 'text-purple-100'
        }`}
      >
        <RadioButton
          isChecked={selectedRating === '4.8 - 5.0'}
          onChange={() => handleRadioChange('4.8 - 5.0')}
        />
        <span>4.8 - 5.0</span>
      </div>

      <div
        className={`flex items-center gap-[15px] text-base font-medium leading-relaxed ${
          selectedRating === '4.5 - 4.8' && 'text-purple-100'
        }`}
      >
        <RadioButton
          isChecked={selectedRating === '4.5 - 4.8'}
          onChange={() => handleRadioChange('4.5 - 4.8')}
        />
        <span>4.5 - 4.8</span>
      </div>

      <div
        className={`flex items-center gap-[15px] text-base font-medium leading-relaxed ${
          selectedRating === '4.0 - 4.5' && 'text-purple-100'
        }`}
      >
        <RadioButton
          isChecked={selectedRating === '4.0 - 4.5'}
          onChange={() => handleRadioChange('4.0 - 4.5')}
        />
        <span>4.0 - 4.5</span>
      </div>

      <div
        className={`flex items-center gap-[15px] text-base font-medium leading-relaxed ${
          selectedRating === '3.0 - 4.0' && 'text-purple-100'
        }`}
      >
        <RadioButton
          isChecked={selectedRating === '3.0 - 4.0'}
          onChange={() => handleRadioChange('3.0 - 4.0')}
        />
        <span>3.0 - 4.0</span>
      </div>
    </div>
  );
}
