'use client';

import { PriceBox, RatingBox } from '@/components/common/Boxes';
import Button from '@/components/common/Button';
import StarRating from '@/components/common/StarRating';
import AddReviewModal from '@/components/modal/AddReviewModal';
import { useState } from 'react';

function Test() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else setIsOpen(false);
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
      <button type="button" onClick={handleClick}>
        리뷰모달열기
      </button>
      <AddReviewModal
        isOpen={isOpen}
        onClick={handleClick}
        initialFormValue={initialWineValue}
      />
      <StarRating isInteractive />
    </main>
  );
}

export default Test;
