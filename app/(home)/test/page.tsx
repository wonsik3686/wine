'use client';

import { PriceBox, RatingBox } from '@/components/common/Boxes';
import Button from '@/components/common/Button';
import Chip from '@/components/common/Chip';
import RatingProgressbar from '@/components/common/RatingProgressbar';
import StarRating from '@/components/common/StarRating';
import AddWineModal from '@/components/modal/AddWineModal';
import ConfirmModal from '@/components/modal/ConfirmModal';
import AddReviewModal from '@/components/modal/reviewmodal/AddReviewModal';
import { useState } from 'react';

function Test() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isReviewEditOpen, setIsReviewEditOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else setIsOpen(false);
  };

  const handleCancelClick = () => {
    if (!isDeleteOpen) {
      setIsDeleteOpen(true);
    } else setIsDeleteOpen(false);
  };

  const handleEditClick = () => {
    if (!isEditOpen) {
      setIsEditOpen(true);
    } else setIsEditOpen(false);
  };

  const handleDeleteClick = () => {
    // DELETE요청 대신 넣은 값
    setIsDeleteOpen(false);
  };

  const handleConfirmOpenClick = () => {
    if (!isConfirmOpen) {
      setIsConfirmOpen(true);
    } else setIsConfirmOpen(false);
  };

  const handleConfirmClick = () => {
    // DELETE요청 대신 넣은 값
    setIsConfirmOpen(false);
  };

  const TestWineDetail = {
    id: 279,
    name: 'Sentinel Carbernet Sauvignon 2016',
  };

  const handleReviewClick = () => {
    if (!isReviewOpen) {
      setIsReviewOpen(true);
    } else setIsReviewOpen(false);
  };

  const handleReviewEditClick = () => {
    if (!isReviewEditOpen) {
      setIsReviewEditOpen(true);
    } else setIsReviewEditOpen(false);
  };

  const initialWineValue = {
    id: 0,
    name: '',
    price: 0,
    region: '',
    type: 'RED',
    image: null,
  };

  const existingWineValue = {
    id: 279,
    name: '수정할 와인 이름',
    price: 999999,
    region: '수정할 원산지',
    type: 'WHITE',
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/284/1725959926821/NGRjMmFiYjk4NTU5Yy5qcGc=',
  };

  return (
    <main className="grid grid-cols-3 gap-8 bg-white p-8">
      <PriceBox price={50000} />
      <RatingBox rating={3} />
      <button type="button" onClick={handleClick}>
        와인등록모달열기
      </button>
      <AddWineModal
        isOpen={isOpen}
        onClick={handleClick}
        initialFormValue={initialWineValue}
        mode="add"
      />
      <button type="button" onClick={handleEditClick}>
        와인수정모달열기
      </button>
      <AddWineModal
        isOpen={isEditOpen}
        onClick={handleEditClick}
        initialFormValue={existingWineValue}
        mode="edit"
      />
      <button type="button" onClick={handleCancelClick}>
        삭제모달열기
      </button>
      <ConfirmModal
        isOpen={isDeleteOpen}
        onConfirm={handleDeleteClick}
        onCancel={handleCancelClick}
      />
      <button type="button" onClick={handleConfirmOpenClick}>
        로그인확인모달
      </button>
      <ConfirmModal
        isOpen={isConfirmOpen}
        onConfirm={handleConfirmClick}
        onCancel={handleConfirmOpenClick}
        confirmMessage="로그인이 필요한 서비스입니다. 로그인 페이지로 이동하시겠습니까?"
        label="확인"
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
      <AddReviewModal
        isOpen={isReviewOpen}
        onClick={handleReviewClick}
        mode="add"
        wineDetail={TestWineDetail}
      />
      <button type="button" onClick={handleReviewEditClick}>
        리뷰수정모달열기
      </button>
      <AddReviewModal
        isOpen={isReviewEditOpen}
        onClick={handleReviewEditClick}
        mode="edit"
        wineDetail={TestWineDetail}
        reviewId={981}
      />
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
