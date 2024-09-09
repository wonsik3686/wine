'use client';

import { PriceBox, RatingBox } from '@/components/common/Boxes';
import Button from '@/components/common/Button';
import Chip from '@/components/common/Chip';
import StarRating from '@/components/common/StarRating';
import AddWineModal from '@/components/modal/AddWineModal';
import DeleteModal from '@/components/modal/DeleteModal';
import { useState } from 'react';

function Test() {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else setIsOpen(false);
  };

  const handleCancelClick = () => {
    if (!deleteIsOpen) {
      setDeleteIsOpen(true);
    } else setDeleteIsOpen(false);
  };

  const handleDeleteClick = () => {
    // DELETE요청 대신 넣은 값
    console.log('삭제되었습니다!');
    setDeleteIsOpen(false);
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
      <button type="button" onClick={handleCancelClick}>
        삭제모달열기
      </button>
      <DeleteModal
        isOpen={deleteIsOpen}
        onClick={handleCancelClick}
        onCancel={handleDeleteClick}
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
      <StarRating isInteractive />
      <StarRating rating={3.8} size="small" />
      <Chip label="체리" selected isDisabled={false} />
      <Chip label="오크" isDisabled />
    </main>
  );
}

export default Test;
