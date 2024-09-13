'use client';

// import postImageUpload from '@/api/imageUpload.api';
import Photo from '@/public/icons/photo.svg';
import { User } from '@/types/user.types';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';

function ProfileUpload({
  className,
  children,
  setUser,
}: {
  className?: string;
  children: JSX.Element;
  setUser: Dispatch<SetStateAction<User>>;
}) {
  const [isHover, setIsHover] = useState(false);

  const fileInput = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      throw new Error('파일 로드 실패');
    }

    // const { url } = await postImageUpload(file);

    // patchUser({ image: url, nickname: 'testID' });

    const url = {
      id: 128,
      email: 'test1234@email.com',
      nickname: 'testID',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/128/1725858928578/JTI1LmpwZw==',
      teamId: '8-4',
      createdAt: '2024-08-29T14:00:30.506Z',
      updatedAt: '2024-09-09T05:15:28.825Z',
    };

    setUser(url);

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
