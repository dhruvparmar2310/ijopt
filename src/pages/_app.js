import { useEffect, useState } from "react";
import "@/styles/main.scss";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoadingScreen from "@/components/LoadingScreen";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

const GA_MEASUREMENT_ID = 'G-P080GEG6FN';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

  
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true) 
      document.body.classList.add("no-scroll")
    }
    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false)
        document.body.classList.remove("no-scroll")
      }, 500)
    }

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events])

  // Google Analytic
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {/* GOOGLE ANALYTICS */}
      <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {isLoading && <LoadingScreen className={isLoading ? "logoLoading" : ""} />}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
