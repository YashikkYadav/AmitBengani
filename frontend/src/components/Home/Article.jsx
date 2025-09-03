"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <p className="text-sm uppercase tracking-widest text-[#0089FF] font-semibold">
          Have a Look At
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">
          Our Surgeries and OT <br /> Latest Activities
        </h2>

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
              <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <Image
                  src={src}
                  alt={`Activity ${i + 1}`}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SurgeryActivities;
