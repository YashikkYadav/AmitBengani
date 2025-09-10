import Hero from '@/components/Home/HeroSection'
import AboutDoctor from '@/components/Home/AboutDoctor';
import DiseasesGrid from '@/components/Home/DiseasesGrid';
import SurgeriesOffered from '@/components/Home/SurgeriesOffered';
import SurgeryActivities from '@/components/Home/Article';
import TestimonialCarousel from '@/components/Home/TestimonialCarousel';
import FaqSection from '@/components/Home/FaqSection';
import WhyChoose from '@/components/Home/WhyChoose';

const Home = () => {
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
    </>
  );
}

export default Home
