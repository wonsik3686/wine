'use client';

import React, { useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

type ImageCropModalProps = {
  image: string | null;
  onClose: () => void;
  onConfirm: (croppedImage: File) => void;
};

const ImageCropModal: React.FC<ImageCropModalProps> = ({
  image,
  onClose,
  onConfirm,
}) => {
  const [crop, setCrop] = useState<Crop>({
    unit: 'px',
    width: 30,
    height: 100,
    x: 0,
    y: 0,
  });
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  // 크롭 작업을 수행하여 크롭된 이미지를 반환하는 함수
  const makeClientCrop = async (crop: Crop) => {
    if (imageRef && crop.width && crop.height) {
      const canvas = document.createElement('canvas');
      const scaleX = imageRef.naturalWidth / imageRef.width || 1;
      const scaleY = imageRef.naturalHeight / imageRef.height || 1;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
      if (ctx && imageRef) {
        ctx.drawImage(
          imageRef,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
        const blob = await new Promise<Blob | null>((resolve) => {
          canvas.toBlob((b) => resolve(b), 'image/jpeg');
        });
        if (blob) {
          onConfirm(
            new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' })
          );
        }
      }
    }
  };

  const handleConfirmClick = () => {
    if (completedCrop) {
      makeClientCrop(completedCrop);
      onClose(); // Confirm 후 모달 닫기
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {image && (
          <ReactCrop
            crop={crop}
            onChange={(newCrop) => setCrop(newCrop)}
            onComplete={(crop) => setCompletedCrop(crop)}
            aspect={1 / 3}
          >
            <img
              src={image}
              alt="Crop preview"
              onLoad={(e) => setImageRef(e.currentTarget)}
              className="rounded-lg object-cover"
            />
          </ReactCrop>
        )}
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="rounded-xl bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-400"
          >
            취소
          </button>
          <button
            onClick={handleConfirmClick}
            className="rounded-xl bg-purple-600 px-4 py-2 text-white hover:bg-purple-500"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropModal;
