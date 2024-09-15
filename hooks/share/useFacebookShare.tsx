export default function useFacebookShare({ shareUrl }: { shareUrl: string }) {
  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      '페이스북 공유하기',
      'width=600,height=800,location=no,status=no,scrollbars=yes'
    );
  };

  return { handleFacebookShare };
}
