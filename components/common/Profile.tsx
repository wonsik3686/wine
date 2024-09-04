'use client';

import Image from 'next/image';

type ProfileProps = {
  src?: string;
};

export default function Profile({ src }: ProfileProps) {
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
}
