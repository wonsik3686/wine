'use client';

import useFacebookShare from '@/hooks/share/useFacebookShare';
import useKakaoShare from '@/hooks/share/useKakaoShare';
import useXShare from '@/hooks/share/useXShare';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type ShareButtonsProps = {
  shareImage: string;
  shareTitle: string;
  shareDesc: string;
};

export default function ShareButtons({
  shareImage,
  shareTitle,
  shareDesc,
}: ShareButtonsProps) {
  const [fullUrl, setFullUrl] = useState<string>('');

  useEffect(() => {
    setFullUrl(window.location.href);
  }, []);

  const { handleKaKaoShare } = useKakaoShare({
    sharedUrl: fullUrl,
    shareImage,
    title: shareTitle,
    desc: shareDesc,
  });
  const { handleFacebookShare } = useFacebookShare({ shareUrl: fullUrl });
  const { handleXShare } = useXShare({
    shareUrl: fullUrl,
    shareText: `${shareTitle} | ${shareDesc}`,
  });

  return (
    <div className="flex gap-3 mob:gap-2">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50"
        type="button"
        onClick={handleKaKaoShare}
      >
        <Image
          src="/icons/iconKakao.svg"
          alt="카카오 공유하기 버튼 이미지"
          width={30}
          height={30}
        />
      </button>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50"
        type="button"
        onClick={handleFacebookShare}
      >
        <Image
          src="/icons/iconFacebook.svg"
          alt="카카오 공유하기 버튼 이미지"
          width={30}
          height={30}
        />
      </button>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50"
        type="button"
        onClick={handleXShare}
      >
        <Image
          src="/icons/iconTwitterX.svg"
          alt="카카오 공유하기 버튼 이미지"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
}
