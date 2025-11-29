import "@/styles/globals.css";
import Layout from "@/components/Layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa";
import Head from 'next/head';



export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZP0F3FXLJ9"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZP0F3FXLJ9');
          `}
        </script>
      </Head>
      <Layout>
        <Component {...pageProps} />
         
        {/* Floating WhatsApp Icon */}
        <a
          href="https://wa.me/919644032229" // Replace with your WhatsApp number in international format
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
        >
          <FaWhatsapp size={28} />
        </a>
      </Layout>
    </>
  );
}
