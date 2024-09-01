'use client';
import React, { useState } from 'react';

type StarRatingProps = {
  rating?: number; // 기본 별점 값 (API로 받거나 초기값으로 설정)
  interactive?: boolean; // 사용자가 상호작용할 수 있는지 여부 (기본값: false)
  onRatingChange?: (rating: number) => void; // 상호작용할 경우 별점 변경을 처리하는 콜백 함수
};

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  interactive = false,
  onRatingChange,
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState<number>(rating);

  const handleStarClick = (newRating: number) => {
    if (interactive) {
      setCurrentRating(newRating);
      if (onRatingChange) {
        onRatingChange(newRating);
      }
    }
  };

  const handleMouseEnter = (starIndex: number) => {
    if (interactive) {
      setHoverRating(starIndex);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(null);
    }
  };

  const renderStars = () => {
    const stars = [];
    const effectiveRating = hoverRating || currentRating;

    for (let i = 1; i <= 5; i++) {
      const fillPercentage = getStarFillPercentage(i, effectiveRating);

      stars.push(
        <div
          key={i}
          className={`relative inline-block mr-[8px] ${interactive ? 'cursor-pointer' : 'cursor-default'}`}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleStarClick(i)}
          style={{ width: '24px', height: '24px' }}
        >
          <img
            src="/images/star_inactive.svg"
            alt="비어있는 별"
            className="absolute top-0 left-0 w-full h-full"
          />
          <img
            src="/images/star_active.svg"
            alt="채워진 별"
            className="absolute top-0 left-0 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
          />
        </div>
      );
    }
    return stars;
  };

  const getStarFillPercentage = (starIndex: number, activeRating: number) => {
    if (starIndex <= activeRating) {
      return 100;
    }
    if (starIndex === Math.ceil(activeRating)) {
      return (activeRating % 1) * 100;
    }
    return 0;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default StarRating;
