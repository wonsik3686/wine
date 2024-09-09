'use client';

import { PriceBox, RatingBox } from '@/components/common/Boxes';
import Button from '@/components/common/Button';
import Chip from '@/components/common/Chip';
import RatingProgressbar from '@/components/common/RatingProgressbar';
import StarRating from '@/components/common/StarRating';
import AddWineModal from '@/components/modal/AddWineModal';
import AddReviewModal from '@/components/modal/reviewmodal/AddReviewModal';
import { useState } from 'react';

function Test() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else setIsOpen(false);
  };

  const handleReviewClick = () => {
    if (!isReviewOpen) {
      setIsReviewOpen(true);
    } else setIsReviewOpen(false);
  };

  const initialWineValue = {
    name: '',
    price: '',
    origin: '',
    type: 'Red',
    imgFile: null,
  };

  return (
    <main className="grid grid-cols-3 gap-8 bg-white p-8">
      <PriceBox price={50000} />
      <RatingBox rating={3} />
      <button type="button" onClick={handleClick}>
        모달열기
      </button>
      <AddWineModal
        isOpen={isOpen}
        onClick={handleClick}
        initialFormValue={initialWineValue}
      />
      <Button
        buttonColor="purple"
        buttonStyle="box"
        buttonWidth="fitToChildren"
        textColor="white"
        disabled
      >
        와인 등록하기
      </Button>
      <Button
        buttonColor="lightPurple"
        buttonStyle="box"
        buttonWidth="fitToChildren"
        textColor="purple"
        disabled
      >
        취소
      </Button>
      <Button
        buttonColor="purple"
        buttonStyle="floating"
        buttonWidth="fitToChildren"
        textColor="white"
        disabled
      >
        와인 보러가기
      </Button>
      <Button
        buttonColor="white"
        buttonStyle="box"
        buttonWidth="fitToChildren"
        textColor="gray"
        disabled
      >
        취소
      </Button>
      <Button
        buttonColor="purple"
        buttonStyle="box"
        buttonWidth="fitToChildren"
        textColor="white"
      >
        와인 등록하기
      </Button>
      <Button
        buttonColor="lightPurple"
        buttonStyle="box"
        buttonWidth="fitToChildren"
        textColor="purple"
      >
        취소
      </Button>
      <Button
        buttonColor="purple"
        buttonStyle="floating"
        buttonWidth="fitToChildren"
        textColor="white"
      >
        와인 보러가기
      </Button>
      <Button
        buttonColor="white"
        buttonStyle="box"
        buttonWidth="fitToChildren"
        textColor="gray"
      >
        취소
      </Button>
      <button type="button" onClick={handleReviewClick}>
        리뷰모달열기
      </button>
      <AddReviewModal isOpen={isReviewOpen} onClick={handleReviewClick} />
      <StarRating isInteractive />
      <StarRating rating={3.8} size="small" />
      <RatingProgressbar
        Ratings={[
          { key: 5, value: 50 }, // 5점의 개수는 50개
          { key: 4, value: 30 }, // 4점의 개수는 30개
          { key: 3, value: 20 }, // 3점의 개수는 20개
          { key: 2, value: 10 }, // 2점의 개수는 10개
          { key: 1, value: 5 }, // 1점의 개수는 5개
        ]}
        totalCount={5000}
      />
      <Chip label="체리" selected isDisabled={false} />
      <Chip label="오크" isDisabled />
    </main>
  );
}

export default Test;