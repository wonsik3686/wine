'use client';

import {
  postWineDetail,
  updateWineDetail,
  uploadWineImage,
} from '@/apis/wines.api';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '../common/Button';
import Dropdown from '../common/dropdown/Dropdown';
import Input from '../common/Input';
import Modal from './Modal';
import WineImageInput from './WineImageInput';

type FormValues = {
  id: number;
  name: string;
  price: number;
  region: string;
  type: string;
  image: File | string | null;
};

type ModalProps = {
  isOpen: boolean;
  onClick: () => void;
  initialFormValue: FormValues | (() => FormValues);
  mode: 'add' | 'edit';
  onUpdate?: (e: any) => void;
};

function AddWineModal({
  isOpen,
  onClick,
  initialFormValue,
  mode,
  onUpdate,
}: ModalProps) {
  const [formValue, setFormValue] = useState<FormValues>(initialFormValue);
  const [postError, setPostError] = useState('');

  useEffect(() => {
    setFormValue(initialFormValue);
  }, [initialFormValue]);

  const wineOption = [
    { label: 'RED', value: 'RED' },
    { label: 'WHITE', value: 'WHITE' },
    { label: 'SPARKLING', value: 'SPARKLING' },
  ];

  const handleFormChange = (
    name: string,
    value: string | number | File | null
  ) => {
    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleFormChange(name, value);
  };

  const handleSelect = (value: string | number) => {
    handleFormChange('type', value); // 와인 타입을 선택할 때 상태 업데이트
  };

  const checkAllInputsFilled = () => {
    return (
      formValue.name !== '' &&
      formValue.price !== 0 &&
      formValue.region !== '' &&
      formValue.image !== null &&
      formValue.image !== ''
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let imageUrl = '';
    let data = {}; // updateWineDetail response 받아오는 용도 삭제하지 마세요.

    try {
      if (typeof formValue.image === 'string') {
        // 기존 이미지 URL 사용
        imageUrl = formValue.image;
      } else if (formValue.image) {
        // 새로 선택한 이미지 파일 업로드
        imageUrl = await uploadWineImage(formValue.image);
      }

      const wineData = {
        name: formValue.name,
        region: formValue.region,
        price: Number(formValue.price),
        type: formValue.type,
        image: imageUrl,
      };

      if (mode === 'add') {
        // 와인 정보 POST 요청
        await postWineDetail(wineData);
      } else if (mode === 'edit') {
        // 와인 정보 PATCH 요청
        data = await updateWineDetail(formValue.id, wineData);
        onUpdate!(data);
      }

      setFormValue({
        id: 0,
        name: '',
        price: 0,
        region: '',
        type: 'RED',
        image: null,
      });

      setPostError(''); // 에러 초기화
    } catch (error) {
      if (mode === 'add' && error) {
        setPostError('와인 등록에 실패했습니다. 다시 시도해 주세요.');
      } else if (mode === 'edit') {
        setPostError('와인 수정에 실패했습니다. 다시 시도해 주세요.');
      }
    }
    onClick();
  };

  const [touched, setTouched] = useState({
    name: false,
    price: false,
    region: false,
  });

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClick}>
      <section className="mb-[40px] flex items-center justify-between mob:mb-[30px]">
        <h1 className="font-sans text-2xl font-bold text-gray-800">
          {mode === 'add' ? '와인 등록' : '와인 수정'}
        </h1>
        <button
          type="button"
          onClick={onClick}
          className="text-2xl text-gray-500 mob:text-xl"
        >
          X
        </button>
      </section>
      <form
        className="mb-[32px] flex w-[412px] flex-col gap-[32px] mob:w-full"
        onSubmit={handleSubmit}
      >
        {postError && <p className="text-red-500">{postError}</p>}{' '}
        {/* 에러 메시지 표시 */}
        <Input
          label="와인 이름"
          id="name"
          name="name"
          placeholder="와인 이름 입력"
          style={{ width: '100%', height: '48px' }}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={formValue.name}
          errorMessage={
            touched.name && !formValue.name
              ? '와인 이름을 입력해주세요.'
              : undefined
          }
        />
        <Input
          label="가격"
          id="price"
          name="price"
          type="number"
          placeholder="가격 입력"
          style={{ width: '100%', height: '48px' }}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={formValue.price}
          errorMessage={
            touched.price && !formValue.price
              ? '와인 가격을 입력해주세요.'
              : undefined
          }
        />
        <Input
          label="원산지"
          id="region"
          name="region"
          placeholder="원산지 입력"
          style={{ width: '100%', height: '48px' }}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={formValue.region}
          errorMessage={
            touched.region && !formValue.region
              ? '원산지를 입력해주세요.'
              : undefined
          }
        />
        <div>
          <h2 className="mb-[10px] font-sans text-lg font-medium text-gray-800">
            타입
          </h2>

          <Dropdown
            options={wineOption}
            onSelect={handleSelect}
            type="select"
            initialLabel={formValue.type}
          />
        </div>
        <div>
          <h2 className="mb-[10px] font-sans text-lg font-medium text-gray-800">
            와인 사진
          </h2>
          <WineImageInput
            name="image"
            value={formValue.image}
            onChange={handleFormChange}
          />
          {!formValue.image && (
            <p className="mt-[10px] font-sans text-lg font-regular text-purple-100">
              와인 사진을 첨부해주세요.
            </p>
          )}
        </div>
        <div className="mt-[32px] flex gap-[5px]">
          <Button
            buttonStyle="box"
            buttonWidth="fitToChildren"
            buttonColor="lightPurple"
            textColor="purple"
            style={{ flexGrow: '1' }}
            onClick={onClick}
          >
            취소
          </Button>
          <Button
            buttonStyle="box"
            buttonWidth="fitToChildren"
            buttonColor="purple"
            textColor="white"
            style={{ flexGrow: '2' }}
            disabled={!checkAllInputsFilled()}
          >
            {mode === 'add' ? '와인 등록하기' : '와인 수정하기'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddWineModal;
