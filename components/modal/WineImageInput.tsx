'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';

// 모달을 띄우는 함수 (실제 사용 시, 이 부분은 모달 컴포넌트에서 호출될 부분입니다)
import ImageCropModal from './ImageCropModal'; // 모달 컴포넌트 임포트

type FileProps = {
  name: string;
  value: string | File | null;
  onChange: (name: string, value: string | File | null) => void;
};

function WineImageInput({ name, value, onChange }: FileProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [showCropModal, setShowCropModal] = useState(false); // 모달 표시 상태
  const [croppedImage, setCroppedImage] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    if (typeof value === 'string') {
      setPreview(value);
    } else if (value instanceof File) {
      const nextPreview: string = URL.createObjectURL(value);
      setPreview(nextPreview);

      return () => {
        URL.revokeObjectURL(nextPreview); // 메모리 누수 방지
      };
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files?.[0] || null;
    onChange(name, nextValue);
    if (nextValue) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreview(fileReader.result as string);
        setShowCropModal(true); // 이미지 선택 후 모달 표시
      };
      fileReader.readAsDataURL(nextValue);
    }
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = '';
    onChange(name, null);
    setPreview(null);
  };

  const handleCropConfirm = (croppedImg: File) => {
    setCroppedImage(croppedImg);
    setShowCropModal(false);
  };

  const handleCropModalClose = () => {
    setShowCropModal(false);
    setPreview(null); // 모달을 닫으면 미리보기 초기화
  };

  useEffect(() => {
    if (croppedImage) {
      // 크롭된 이미지가 있으면 상태 업데이트
      onChange(name, croppedImage);
    }
  }, [croppedImage]);

  return (
    <div className="flex items-start gap-5">
      <div className="hover:outline-3 relative h-[150px] w-[150px] shrink-0 rounded-lg bg-white bg-[url('/icons/icon_photo.png')] bg-center bg-no-repeat ring-1 ring-gray-300 hover:outline hover:outline-purple-500">
        <input
          id="imgFile"
          name="imgFile"
          type="file"
          accept="image/png, image/jpeg"
          className="absolute inset-0 cursor-pointer rounded-lg opacity-0"
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
      <div className="relative w-[200px] shrink-0">
        <div className="relative overflow-hidden rounded-lg">
          {preview && <img src={preview} alt="이미지 미리보기" />}
        </div>
        {croppedImage && (
          <button
            type="button"
            className="absolute right-2 top-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-400 text-gray-50 hover:bg-purple-400"
            onClick={handleClearClick}
          >
            X
          </button>
        )}
      </div>
      {showCropModal && (
        <ImageCropModal
          image={preview}
          onClose={handleCropModalClose}
          onConfirm={handleCropConfirm}
        />
      )}
    </div>
  );
}

export default WineImageInput;
