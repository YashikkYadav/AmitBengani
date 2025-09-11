import { useRouter } from "next/router";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";
import whatToExpectData from "@/data/expectData";
import WhatToExpect from "@/components/WhatToExpect";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SurgeryDetail() {
  const { query } = useRouter();
  const { slug } = query;

  const surgeryCategory = servicesData.find(
    (s) => s.category === slug
  );

  if (!surgeryCategory) {
    return (
      <h1 className="text-center py-20 text-xl font-semibold text-gray-700">
        Procedure not found
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center md:text-left mb-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="bg-gradient-to-r from-[#0089FF] to-blue-400 bg-clip-text text-transparent">
          {surgeryCategory.name}
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-full mb-12"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {surgeryCategory.description}
      </motion.p>

      {/* Sub-surgeries */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Procedures Offered
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {surgeryCategory.subSurgeries.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
            }}
          >
            <Link
              href={`/surgery/${surgeryCategory.category}/${item.slug}`}
              className={`group relative flex flex-col items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center transition-all duration-300 hover:shadow-2xl hover:border-[#0089FF] hover:bg-gradient-to-b hover:from-[#0089FF] hover:to-[#006FCC] hover:text-white`}
            >
              {/* Optional icon or image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              )}
              {/* Title */}
              <p className="text-lg font-semibold mb-2">{item.name}</p>
              {/* Learn More */}
              <p className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <WhatToExpect serviceId={surgeryCategory.id} />
      {/* Contact Details */}
      <motion.div
        className="mt-16 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Contact Details
        </h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Phone:</span> +91 96440 32229
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Address:</span> 1st Floor,
          28 Shiv Shakti Nagar, near Indo Bharat School, Nirman Nagar, Jaipur,
          Rajasthan 302019
        </p>
        <p className="text-gray-600 mt-4">
          For appointments and inquiries, contact us at the above number or
          visit our clinic. Our experienced team is committed to providing
          expert surgical care with personalized attention.
        </p>
      </motion.div>
    </div>
  );
}

// Reusable FAQ Item (accordion style)

