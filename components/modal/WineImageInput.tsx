'use client';

import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface Props {
  name: string;
  value: string | File | null;
  onChange: (name: string, value: string | File | null) => void;
}

function WineImageInput({ name, value, onChange }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files?.[0] || null;
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview: string = URL.createObjectURL(value as File);
    setPreview(nextPreview);

    return () => {
      setPreview(null);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className="flex items-start gap-5">
      <div className="hover:outline-3 relative h-[150px] w-[150px] rounded-lg bg-white bg-[url('/icons/icon_photo.png')] bg-center bg-no-repeat ring-1 ring-gray-300 hover:outline hover:outline-purple-500">
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
      <div className="relative h-[150px] w-[150px]">
        {value && (
          <button
            type="button"
            className="absolute right-2 top-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-400 text-gray-50 hover:bg-purple-400"
            onClick={handleClearClick}
          >
            X
          </button>
        )}
        {preview && (
          <Image
            src={preview}
            alt="이미지 미리보기"
            className="h-[150px] w-[150px] rounded-lg object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default WineImageInput;
