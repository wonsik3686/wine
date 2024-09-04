'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../common/Button';
import Dropdown from '../common/dropdown/Dropdown';
import Input from '../common/Input';
import Modal from './Modal';

type ModalProps = {
  isOpen: boolean;
  onClick: () => void;
};

function AddWineModal({ isOpen, onClick }: ModalProps) {
  const [formValue, setFormValue] = useState({
    name: '',
    price: '',
    origin: '',
    type: 'Red',
  });

  const wineOption = [
    { label: 'Red', value: 'red' },
    { label: 'White', value: 'White' },
    { label: 'Sparkling', value: 'Sparkling' },
  ];

  const handleFormChange = (name: string, value: string | null) => {
    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleFormChange(name, value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handleSelect = (value: string | number) => {
    return value;
  };

  const checkAllInputsFilled = () => {
    return (
      formValue.name !== '' && formValue.price !== '' && formValue.origin !== ''
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClick}>
      <h1 className="mb-[40px] font-sans text-2xl font-bold text-gray-800">
        와인 등록
      </h1>
      <form
        style={{ marginBottom: '32px', width: '412px' }}
        onSubmit={handleSubmit}
      >
        <Input
          label="와인 이름"
          id="name"
          name="name"
          placeholder="와인 이름 입력"
          style={{ marginBottom: '32px', width: '412px', height: '48px' }}
          onChange={handleInputChange}
        />
        <Input
          label="가격"
          id="price"
          name="price"
          type="number"
          placeholder="가격 입력"
          style={{ marginBottom: '32px', width: '412px', height: '48px' }}
          onChange={handleInputChange}
        />
        <Input
          label="원산지"
          id="origin"
          name="origin"
          placeholder="원산지 입력"
          style={{ marginBottom: '32px', width: '412px', height: '48px' }}
          onChange={handleInputChange}
        />
        <h2 className="mb-[10px] font-sans text-lg font-medium text-gray-800">
          타입
        </h2>
        <Dropdown
          options={wineOption}
          onSelect={handleSelect}
          type="select"
          width={412}
          initialLabel="Red"
        />
        <div className="mt-[32px] flex gap-[5px]">
          <Button
            buttonStyle="box"
            buttonWidth="fitToChildren"
            buttonColor="lightPurple"
            textColor="purple"
            style={{ flexGrow: '1' }}
          >
            취소
          </Button>
          <Button
            buttonStyle="box"
            buttonWidth="fitToChildren"
            buttonColor="purple"
            textColor="white"
            style={{
              flexGrow: '2',
              backgroundColor: !checkAllInputsFilled() ? '#d1d5db' : '', // Gray 300
              color: !checkAllInputsFilled() ? '#6b7280' : '', // Gray 500
              cursor: !checkAllInputsFilled() ? 'not-allowed' : 'pointer',
            }}
            disabled={!checkAllInputsFilled()}
          >
            와인 등록하기
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddWineModal;
