import "@/styles/globals.css";
import Layout from "@/components/Layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
