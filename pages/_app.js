import '../styles/globals.css'
import { LanguageProvider } from '../components/LanguageContext'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* OLD GTM */}
      <Script
        id="gtm-script-old"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PJBDBN3M');
          `,
        }}
      />

      {/* NEW GTM */}
      <Script
        id="gtm-script-new"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M4GCDQHL');
          `,
        }}
      />

      {/* NEW GTM NOSCRIPT */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-M4GCDQHL"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  )
}
