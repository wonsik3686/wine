'use client';

import DefaultProfileImage from '@/public/svg/defaultProfile.svg';
import React from 'react';
interface ProfileProps {
  image?: string;
}

const Profile: React.FC<ProfileProps> = ({ image }) => {
  const displayImage = image || DefaultProfileImage;
  return (
    <div>
      {/* 문자열 URL일 때는 img 태그 사용, 컴포넌트일 때는 직접 렌더링 */}
      {typeof displayImage === 'string' ? (
        <img
          src={displayImage}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      ) : (
        React.createElement(displayImage, {
          className: 'h-full w-full object-cover',
          role: 'img',
          'aria-label': 'Profile',
        })
      )}
    </div>
  );
};

export default Profile;
