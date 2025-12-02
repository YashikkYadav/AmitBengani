import Hero from "@/components/Home/HeroSection";
import AboutDoctor from "@/components/Home/AboutDoctor";
import DiseasesGrid from "@/components/Home/DiseasesGrid";
import SurgeriesOffered from "@/components/Home/SurgeriesOffered";
import SurgeryActivities from "@/components/Home/Article";
import TestimonialCarousel from "@/components/Home/TestimonialCarousel";
import FaqSection from "@/components/Home/FaqSection";
import WhyChoose from "@/components/Home/WhyChoose";
import Head from "next/head";
import { getSEOMetadata } from "@/utils/seoUtils";

const Home = () => {
  const seoData = getSEOMetadata("/");

  return (
    <>
      <Head>
        <title>{"Dr Amit Bengani"}</title>
        <meta
          name="description"
          content={
            seoData?.description ||
            "Discover the leading general & laparoscopic surgeon in Jaipur. Get personalized care, advanced techniques, and a focus on quick, smooth recovery."
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta
          name="google-site-verification"
          content="NdJIqqzblQF1uoaWxQ5KdCYpXWte0a1vdUVKAbY-Kxw"
        />
        <link rel="canonical" href="https://dramitbenganijain.com/" />
      </Head>
      <Hero />
      <AboutDoctor />
      <DiseasesGrid />
      <SurgeriesOffered />
      <SurgeryActivities />
      <WhyChoose />
      <TestimonialCarousel />
      <FaqSection />
    </>
  );
};

export default Home;
