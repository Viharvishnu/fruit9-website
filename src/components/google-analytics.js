// components/GoogleAnalytics.js
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-0L4EM6X1YE`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0L4EM6X1YE');
          `
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
