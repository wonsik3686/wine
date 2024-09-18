'use client';

import postImageUpload from '@/apis/imageUpload.api';
import Photo from '@/public/icons/photo.svg';
import { useUpdateUser } from '@/queries/users.queries';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

function ProfileUpload({
  className,
  children,
}: {
  className?: string;
  children: JSX.Element;
}) {
  const [image, setImage] = useState<File | null>(null);
  const { mutate: updateUser } = useUpdateUser();
  const [isHover, setIsHover] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const getImageUrl = async (target: File) => {
    const { url } = await postImageUpload(target);
    updateUser({ image: url });
  };

  useEffect(() => {
    if (image !== null) {
      getImageUrl(image);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0] || null;
    setImage(imageFile);

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
            onChange={handleChangeImage}
          />

          <button
            type="button"
            aria-label="프로필 업로드"
            className="absolute inset-0 flex items-center justify-center bg-purple-100/30"
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
