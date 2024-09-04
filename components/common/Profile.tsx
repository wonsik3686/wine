'use client';

import Image from 'next/image';
import React from 'react';
interface ProfileProps {
  src?: string;
}

const Profile: React.FC<ProfileProps> = ({ src }) => {
  const DefaultProfileImage = '/icons/defaultProfile.svg';
  const displayImage = src || DefaultProfileImage;
  return (
    <Image
      className="h-full w-full rounded-full ring-1 ring-gray-300"
      src={displayImage}
      alt="Profile"
      width={64}
      height={64}
    />
  );
};

export default Profile;
