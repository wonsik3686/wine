'use client';

import defaultProfill from '@/public/icons/defaultProfile.svg?url';
import Image from 'next/image';
import { useState } from 'react';
import ProfileUpload from './ProfileUpload';

function ProfileImage() {
  const [profile, setProfile] = useState<string>(defaultProfill);

  const handleChangeImage = (profileUrl: string) => {
    setProfile(profileUrl);
  };

  return (
    <ProfileUpload
      className="size-[3.75rem] border border-gray-300 tab2:size-20 pc:size-[10.25rem]"
      onChange={handleChangeImage}
    >
      <Image
        src={profile}
        alt="프로필 이미지"
        width={164}
        height={164}
        quality={100}
        className="h-full object-cover"
      />
    </ProfileUpload>
  );
}

export default ProfileImage;
