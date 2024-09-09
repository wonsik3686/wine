'use client';

import postImageUpload from '@/api/imageUpload.api';
import { patchUser } from '@/api/user.api';
import Photo from '@/public/icons/photo.svg';
import { ChangeEvent, useRef, useState } from 'react';

function ProfileUpload({
  className,
  children,
  onChange,
}: {
  className: string;
  children: JSX.Element;
  onChange: (profileUrl: string) => void;
}) {
  const [isHover, setIsHover] = useState(false);

  const fileInput = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      throw new Error('파일 로드 실패');
    }

    const { url } = await postImageUpload(file);

    patchUser({ image: url, nickname: 'testID' });

    onChange(url);

    e.target.value = '';
  };

  return (
    <div
      className={`relative overflow-hidden rounded-full ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
      {isHover && (
        <>
          <input
            className="hidden"
            type="file"
            name="image_URL"
            accept="image/*"
            ref={fileInput}
            onChange={handleImageChange}
          />

          <button
            type="submit"
            aria-label="프로필 업로드"
            className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-purple-100/30"
            onClick={() => fileInput.current!.click()}
          >
            <Photo fill="#FFF" />
          </button>
        </>
      )}
    </div>
  );
}

export default ProfileUpload;
