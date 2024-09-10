'use client';

import { useEffect } from 'react';
import Button from '../common/Button';

type DeleteModalProps = {
  isOpen: boolean;
  onClick: () => void;
  onCancel: () => void;
};

export default function DeleteModal({
  isOpen,
  onClick,
  onCancel,
}: DeleteModalProps) {
  useEffect(() => {
    if (isOpen) {
      // 모달이 열렸을 때 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫혔을 때 스크롤 복구
      document.body.style.overflow = '';
    }

    // 컴포넌트가 언마운트되거나 모달이 닫힐 때 원래 상태로 복구
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50 " onClick={onCancel} />
      <div className="fixed z-20 w-[350px] max-w-lg overflow-y-auto rounded-lg bg-white p-8 shadow-lg mob:mx-[10px] mob:w-[calc(100%-20px)]">
        <h1 className="mb-[40px] mt-[10px] text-center text-xl font-bold mob:text-lg">
          정말 삭제하시겠습니까?
        </h1>
        <div className="flex justify-between gap-[9px] mob:gap-[6px]">
          <Button
            buttonStyle="box"
            buttonWidth="fitToChildren"
            buttonColor="white"
            textColor="gray"
            onClick={onCancel}
            style={{ flexGrow: '1' }}
          >
            취소
          </Button>
          <Button
            buttonStyle="box"
            buttonWidth="fitToChildren"
            buttonColor="purple"
            textColor="white"
            style={{ flexGrow: '1' }}
            onClick={onClick}
          >
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
}
