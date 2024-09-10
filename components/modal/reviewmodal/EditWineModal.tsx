import Button from '@/components/common/Button';
import Dropdown from '@/components/common/dropdown/Dropdown';
import Input from '@/components/common/Input';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Modal from '../Modal';
import WineImageInput from '../WineImageInput';

type FormValues = {
  name: string;
  price: number;
  region: string;
  type: string;
  imgFile: File | null;
};

type ModalProps = {
  isOpen: boolean;
  onClick: () => void;
  wineData: FormValues; // 수정할 와인 데이터를 받는 props
  onUpdate: (updatedWineData: FormValues) => void; // 수정된 데이터를 부모 컴포넌트로 전달하는 함수
};

function EditWineModal({ isOpen, onClick, wineData, onUpdate }: ModalProps) {
  const [formValue, setFormValue] = useState<FormValues>(wineData);
  const [postError, setPostError] = useState('');

  const wineOption = [
    { label: 'Red', value: 'red' },
    { label: 'White', value: 'white' },
    { label: 'Sparkling', value: 'sparkling' },
  ];

  useEffect(() => {
    setFormValue(wineData);
  }, [wineData]);

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
    handleFormChange('type', value);
  };

  const checkAllInputsFilled = () => {
    return (
      formValue.name !== '' && formValue.price !== 0 && formValue.region !== ''
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let imageUrl = '';

    try {
      // 이미지 파일이 있을 때 업로드 진행
      if (formValue.imgFile) {
        imageUrl = await uploadWineImage(formValue.imgFile);
      }

      const updatedWineData = {
        ...formValue,
        imageUrl,
      };

      // 와인 정보 PUT 요청
      await updateWineDetail(updatedWineData);
      onUpdate(updatedWineData); // 부모 컴포넌트로 수정된 데이터 전달
      setPostError(''); // 에러 초기화
    } catch (error) {
      console.error('와인 수정에 실패했습니다:', error);
      setPostError('와인 수정에 실패했습니다. 다시 시도해 주세요.'); // 에러 메시지 설정
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClick}>
      <h1 className="mb-[40px] font-sans text-2xl font-bold text-gray-800">
        와인 수정
      </h1>
      <form className="mb-[32px] w-[412px] mob:w-full" onSubmit={handleSubmit}>
        {postError && <p className="text-red-500">{postError}</p>}
        <Input
          label="와인 이름"
          id="name"
          name="name"
          placeholder="와인 이름 입력"
          style={{ marginBottom: '32px', width: '100%', height: '48px' }}
          value={formValue.name}
          onChange={handleInputChange}
        />
        <Input
          label="가격"
          id="price"
          name="price"
          type="number"
          placeholder="가격 입력"
          style={{ marginBottom: '32px', width: '100%', height: '48px' }}
          value={formValue.price}
          onChange={handleInputChange}
        />
        <Input
          label="원산지"
          id="region"
          name="region"
          placeholder="원산지 입력"
          style={{ marginBottom: '32px', width: '100%', height: '48px' }}
          value={formValue.region}
          onChange={handleInputChange}
        />
        <h2 className="mb-[10px] font-sans text-lg font-medium text-gray-800">
          타입
        </h2>
        <Dropdown
          options={wineOption}
          onSelect={handleSelect}
          type="select"
          initialLabel={formValue.type || 'Red'}
        />
        <br />
        <br />
        <WineImageInput
          name="imgFile"
          value={formValue.imgFile}
          onChange={(file) => handleFormChange('imgFile', file)}
        />
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
            와인 수정하기
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default EditWineModal;
