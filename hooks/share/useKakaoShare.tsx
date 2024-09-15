export const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

declare global {
  interface Window {
    Kakao: any;
  }
}

interface KakaoShareProps {
  sharedUrl: string;
  shareImage: string;
  title: string;
  desc: string;
}

export default function useKakaoShare({
  sharedUrl,
  shareImage,
  title,
  desc,
}: KakaoShareProps) {
  const handleKaKaoShare = () => {
    if (window.Kakao === undefined) {
      return;
    }
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(KAKAO_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description: desc,
        imageUrl: encodeURI(shareImage),
        link: {
          mobileWebUrl: sharedUrl,
          webUrl: sharedUrl,
        },
      },
      buttons: [
        {
          title: '와인 보러가기',
          link: {
            mobileWebUrl: sharedUrl,
            webUrl: sharedUrl,
          },
        },
      ],
      installTalk: true,
    });
  };

  return { handleKaKaoShare };
}
