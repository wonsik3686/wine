'use client';
import React, { useState } from 'react';

type StarRatingProps = {
  rating?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  sizeVariant?: 'default' | 'mobile';
};

/**
 * StarRating 컴포넌트
 *
 * 별점 표시 및 사용자의 상호작용에 따라 별점 설정을 제공하는 컴포넌트입니다.
 *
 * @component
 * @param {StarRatingProps} props - 컴포넌트에 전달되는 props.
 * @param {number} [props.rating=0] - 초기 별점 값 (0-5 사이의 숫자).
 * @param {boolean} [props.interactive=false] - 사용자가 별점과 상호작용할 수 있는지 여부.
 * @param {(rating: number) => void} [props.onRatingChange] - 사용자가 별점을 변경할 때 호출되는 콜백 함수.
 * @param {'default' | 'mobile'} [props.sizeVariant] - 별 컴포넌트의 크기를 바꿈. 모바일 사이즈일 경우 'mobile' 전달
 * @returns {JSX.Element} 별점 컴포넌트.
 * @example 'use client';

import { useState } from 'react';
import StarRating from './StarRating';

function TestComponent() {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
    // 여기서 별점이 업데이트될 때 API 요청을 보낼 수 있음
    console.log('선택된 별점:', rating);
  };

  return (
    <>
      <StarRating rating={3.8} sizeVariant={'mobile'}/> //값을 받아서 별점을 정적 렌더링
      <StarRating interactive={true} onRatingChange={handleRatingChange} /> //사용자가 누르는 값을 보여주도록 렌더링
    </>
  );
}
 */
const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  interactive = false,
  onRatingChange,
  sizeVariant = 'default',
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState<number>(rating);

  const getStarSize = () => {
    switch (sizeVariant) {
      case 'mobile':
        return { width: '17px', height: '17px' }; // 모바일 사이즈 설정
      case 'default':
      default:
        return { width: '22px', height: '22px' }; // 기본 사이즈
    }
  };

  /**
   * 사용자가 별점을 클릭했을 때 호출되는 함수.
   *
   * @param {number} newRating - 사용자가 선택한 새로운 별점 값.
   */
  const handleStarClick = (newRating: number) => {
    if (interactive) {
      setCurrentRating(newRating);
      if (onRatingChange) {
        onRatingChange(newRating);
      }
    }
  };

  /**
   * 사용자가 별 위에 마우스를 올렸을 때 호출되는 함수.
   *
   * @param {number} starIndex - 마우스가 호버 중인 별의 인덱스 (1-5).
   */
  const handleMouseEnter = (starIndex: number) => {
    if (interactive) {
      setHoverRating(starIndex);
    }
  };

  /**
   * 사용자가 별에서 마우스를 뗐을 때 호출되는 함수.
   */
  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(null);
    }
  };

  /**
   * 별점 컴포넌트를 렌더링하는 함수.
   *
   * @returns {JSX.Element[]} 렌더링된 별들의 배열.
   */
  const renderStars = () => {
    const stars = [];
    const starSize = getStarSize();
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
          style={starSize}
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

  /**
   * 별이 얼마나 채워져야 하는지를 백분율로 계산하는 함수.
   *
   * @param {number} starIndex - 별의 인덱스 (1-5).
   * @param {number} activeRating - 현재 별점 값.
   * @returns {number} 채워져야 하는 비율 (0-100%).
   */
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