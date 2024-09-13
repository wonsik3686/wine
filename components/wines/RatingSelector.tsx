'use client';

import RadioButton from '@/components/common/RadioButton';

type RatingOption = {
  label: string;
  value: number | undefined;
};

// RatingOption 컴포넌트: 개별 라디오 버튼을 관리
function RatingOption({
  label,
  value,
  selectedRating,
  onRatingChange,
}: {
  label: string;
  value: number | undefined;
  selectedRating: number | undefined;
  onRatingChange: (rating: number | undefined) => void;
}) {
  return (
    <div
      className={`flex items-center gap-[15px] text-base font-medium leading-relaxed ${
        selectedRating === value && 'text-purple-100'
      }`}
    >
      <RadioButton
        isChecked={selectedRating === value}
        onChange={() => onRatingChange(value)}
      />
      <span>{label}</span>
    </div>
  );
}

// RatingSelector 컴포넌트
export default function RatingSelector({
  selectedRating,
  onRatingChange,
}: {
  selectedRating: number | undefined;
  onRatingChange: (rating: number | undefined) => void;
}) {
  // 라벨과 값을 객체 배열로 관리
  const ratingOptions: RatingOption[] = [
    { label: '전체', value: undefined },
    { label: '4.5 - 5.0', value: 5 },
    { label: '4.0 - 4.5', value: 4.5 },
    { label: '3.5 - 4.0', value: 4 },
    { label: '3.0 - 3.5', value: 3.5 },
  ];

  return (
    <div className="flex flex-col gap-[10px]">
      {ratingOptions.map((option) => (
        <RatingOption
          key={option.label}
          label={option.label}
          value={option.value}
          selectedRating={selectedRating}
          onRatingChange={onRatingChange}
        />
      ))}
    </div>
  );
}
