import Script from 'next/script';

function GoogleAdsense() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4401670037491070"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

export default GoogleAdsense;
