import "@/styles/globals.css";
import Layout from "@/components/Layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa";



export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
       
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919644032229" // Replace with your WhatsApp number in international format
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </Layout>
  );
}
