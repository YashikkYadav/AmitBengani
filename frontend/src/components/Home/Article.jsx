
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SurgeryActivities = () => {
  const images = [
    "/news4.jpg",
    "/news5.jpg",
    "/news3.jpg",
    "/news6.jpg",
   
     "/news2.jpg",
  ];

  return (
    <motion.section className="py-12 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.p
          className="text-sm uppercase tracking-widest text-[#0089FF] font-semibold"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5 }}
        >
          Have a Look At
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6 }}
        >
          Our Surgeries and OT <br /> Latest Activities
        </motion.h2>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-xl"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="relative w-full h-72 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Image
                  src={src}
                  alt={`Activity ${i + 1}`}
                  fill
                  className="object-contain rounded-xl"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default SurgeryActivities;
