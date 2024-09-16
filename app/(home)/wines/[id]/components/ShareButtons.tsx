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
    <div className="flex gap-3 mob:mb-3 mob:mr-3 mob:gap-2">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white mob:h-[35px] mob:w-[35px]"
        type="button"
        onClick={handleKaKaoShare}
      >
        <Image
          src="/icons/sns_kakao.png"
          alt="카카오 공유하기 버튼 이미지"
          width={40}
          height={40}
        />
      </button>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-blue-200 mob:h-[35px] mob:w-[35px]"
        type="button"
        onClick={handleFacebookShare}
      >
        <Image
          src="/icons/sns_facebook.png"
          alt="페이스북 공유하기 버튼 이미지"
          width={40}
          height={40}
        />
      </button>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white mob:h-[35px] mob:w-[35px]"
        type="button"
        onClick={handleXShare}
      >
        <Image
          src="/icons/sns_twitter.png"
          alt="트위터 공유하기 버튼 이미지"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
}
