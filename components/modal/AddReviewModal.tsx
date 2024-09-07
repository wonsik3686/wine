'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../common/Button';
import StarRating from '../common/StarRating';
import TextArea from '../common/TextArea';
import Modal from './Modal';
import TagSelector from './Tagselector';
import TasteSlider from './TasteSlider';

type FormValues = {
  name: string;
  price: string;
  origin: string;
  type: string;
  imgFile: File | null;
};

type ModalProps = {
  isOpen: boolean;
  onClick: () => void;
  initialFormValue: FormValues | (() => FormValues);
  WineDetail: {
    id: string;
    name: string;
  };
};

// API로 받을 정보를 대신해서 테스트
const TestWineDetail = {
  id: '3',
  name: 'Sentinel Carbernet Sauvignon 2016',
};

export default function AddReviewModal({
  isOpen,
  onClick,
  initialFormValue,
  WineDetail = TestWineDetail,
}: ModalProps) {
  const [formValue, setFormValue] = useState<FormValues>(initialFormValue);

  const handleFormChange = (
    name: string,
    value: string | number | File | null
  ) => {
    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    handleFormChange(name, value);
  };

  const checkAllInputsFilled = () => {
    return (
      formValue.name !== '' && formValue.price !== '' && formValue.origin !== ''
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', formValue.name);
    formData.append('price', formValue.price);
    formData.append('origin', formValue.origin);
    formData.append('type', formValue.type);

    if (formValue.imgFile) {
      formData.append('imgFile', formValue.imgFile); // 파일 있을 때만 추가
    }

    // API POST 요청 대신 임시로 넣은 값
    console.log(formValue);
    setFormValue(initialFormValue);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClick} className="">
      <div className="w-[528px] ">
        <section className="mb-[40px] flex justify-between">
          <h1 className="font-sans text-2xl font-bold text-gray-800">
            리뷰 등록
          </h1>
          <button type="button" onClick={onClick}>
            X
          </button>
        </section>
        <form
          style={{ marginBottom: '32px', width: '100%', whiteSpace: 'nowrap' }}
          onSubmit={handleSubmit}
        >
          <Image
            width={67}
            height={67}
            alt="기본 와인 이미지"
            src="/icons/defaultWine.png"
          />
          <p>{WineDetail.name}</p>
          <StarRating isInteractive />
          <TextArea
            id="content"
            name="content"
            placeholder="후기를 작성해주세요"
            style={{ marginBottom: '32px', width: '100%', height: '100px' }}
            onChange={handleInputChange}
          />
          <p>와인의 맛은 어땠나요?</p>
          <TasteSlider />
          <TagSelector />
          <div className="mt-[32px] flex gap-[5px]">
            <Button
              buttonStyle="box"
              buttonWidth="fitToChildren"
              buttonColor="purple"
              textColor="white"
              style={{ flexGrow: '2' }}
              disabled={!checkAllInputsFilled()}
            >
              리뷰 남기기
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
