import DefaultProfileImage from '@/public/svg/defaultProfile.svg';
import Image from 'next/image';
import React from 'react';

interface ProfileImageProps {
  src?: string | null; // 이미지 URL 또는 경로
  alt: string; // 이미지의 대체 텍스트
  defaultImage?: string; // 기본 이미지 URL 또는 경로
  width?: number; // 이미지 가로 크기
  height?: number; // 이미지 세로 크기
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  defaultImage = DefaultProfileImage,
  width = 64,
  height = 64,
}) => {
  const imageSrc = src || defaultImage;

  return (
    <div className="h-16 w-16 overflow-hidden rounded-full">
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
      />
    </div>
  );
};

export default ProfileImage;

// interface ProfileImageProps {
//   image?: string | null;
//   nickname: string;
//   size?: number; // 이미지 크기를 조절할 수 있도록 size 옵션 추가
// }

// const ProfileImage: React.FC<ProfileImageProps> = ({
//   image,
//   nickname,
//   size = 64, // 기본 크기 설정
// }) => {
//   return (
//     <div
//       className={`overflow-hidden rounded-full`}
//       style={{ width: size, height: size }}
//     >
//       {image ? (
//         <Image
//           src={image}
//           alt={`${nickname}'s profile`}
//           width={size}
//           height={size}
//           className="object-cover"
//         />
//       ) : (
//         <DefaultProfileImage
//           width={size}
//           height={size}
//           aria-label={`${nickname}'s profile`}
//         />
//       )}
//     </div>
//   );
// };

// export default ProfileImage;

// interface ProfileImageProps {
//   image: string | null;
//   nickname: string;
// }
// const ProfileImage: React.FC<ProfileImageProps> = ({ image, nickname }) => {
//   return (
//     <div className="h-[42px] w-[42px] overflow-hidden rounded-full sm:h-[64px] sm:w-[64px]">
//       {image ? (
//         <Image
//           src={image}
//           alt={`${nickname}님의 프로필 사진`}
//           width={64}
//           height={64}
//           className="object-cover"
//         />
//       ) : (
//         <DefaultProfileImage aria-label={`${nickname}님의 프로필 사진`} />
//       )}
//     </div>
//   );
// };

// export default ProfileImage;

// const AuthorProfile: React.FC<UserProfileProps> = ({ userInfo }) => {
//   return (
//     <div className="flex items-center gap-2">
//       {userInfo.image ? (
//         <div className="h-10 w-10 overflow-hidden rounded-full">
//           <Image
//             src={userInfo.image}
//             alt={`${userInfo.nickname}님의 프로필 사진`}
//             width={40}
//             height={40}
//             className="object-cover"
//           />
//         </div>
//       ) : (
//         <div className="h-10 w-10 overflow-hidden rounded-full">
//           <DefaultProfileImage
//             aria-label={`${userInfo.nickname}님의 프로필 사진`}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthorProfile;

// export default function Profile() {
//   return (
//     <div>
//       {/* <DefaultProfile /> */}
//       <UserProfile>
//     </div>
//   );
// }
