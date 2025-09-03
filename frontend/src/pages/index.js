import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Home/HeroSection'
import AboutDoctor from '@/components/Home/AboutDoctor';
import DiseasesGrid from '@/components/Home/DiseasesGrid';
import SurgeriesOffered from '@/components/Home/SurgeriesOffered';
import SurgeryActivities from '@/components/Home/Article';
import TestimonialCarousel from '@/components/Home/TestimonialCarousel';
import FaqSection from '@/components/Home/FaqSection';
import WhyChoose from '@/components/Home/WhyChoose';
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutDoctor/>
      <DiseasesGrid/>
      <SurgeriesOffered/>
      <SurgeryActivities/>
      <WhyChoose/>
      <TestimonialCarousel/>
      <FaqSection/>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919644032229" // Replace with your WhatsApp number in international format
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp size={28} />
      </a>


    </>
  );
}
