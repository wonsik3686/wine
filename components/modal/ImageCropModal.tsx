'use client';

import { useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

type ImageCropModalProps = {
  image: string | null;
  onClose: () => void;
  onConfirm: (croppedImage: File) => void;
};

function ImageCropModal({ image, onClose, onConfirm }: ImageCropModalProps) {
  const [imgCrop, setImgCrop] = useState<Crop>({
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
          canvas.toBlob((b) => resolve(b), 'image/png'); // 'image/png'로 설정
        });

        if (blob) {
          onConfirm(
            new File([blob], 'cropped-image.png', { type: 'image/png' })
          ); // 'image/png'로 설정
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
      <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-2 top-1 p-2 text-xl text-gray-600"
          type="button"
        >
          X
        </button>
        {image && (
          <ReactCrop
            crop={imgCrop}
            onChange={(newCrop) => setImgCrop(newCrop)}
            onComplete={(c) => setCompletedCrop(c)}
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
            type="button"
          >
            취소
          </button>
          <button
            onClick={handleConfirmClick}
            className="rounded-xl bg-purple-600 px-4 py-2 text-white hover:bg-purple-500"
            type="button"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCropModal;
