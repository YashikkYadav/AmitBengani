import "@/styles/globals.css";
import Layout from "@/components/Layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZP0F3FXLJ9"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZP0F3FXLJ9');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />

        {/* Floating WhatsApp Icon */}
        <a
          href="https://wa.me/919644032229"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
        >
          <FaWhatsapp size={28} />
        </a>
      </Layout>
    </>
  );
}
