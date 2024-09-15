export default function useXShare({
  shareUrl,
  shareText,
}: {
  shareUrl: string;
  shareText: string;
}) {
  const handleXShare = () => {
    const xIntent = encodeURI(
      `https://x.com/intent/post?text=${shareText}&url=${shareUrl}`
    );
    window.open(xIntent, '_blank');
  };

  return { handleXShare };
}
