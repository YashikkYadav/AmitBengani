"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const galleryData = {
  opd: ["/about1.jpg", "/about2.jpg", "/about3.jpg"],
  events: ["/cert1.jpeg", "/cert2.jpeg", "/cert3.png", "/cert4.png"],
  stories: [
    "/gallery/story1.jpg",
    "/gallery/story2.jpg",
    "/gallery/story3.jpg",
    "/gallery/story4.jpg",
    "/gallery/story5.jpg",
    "/gallery/story6.jpg",
  ],
};

const tabs = [
  { key: "opd", label: "Doctor in OPD / Surgery" },
  { key: "events", label: "Certifications" },
  { key: "stories", label: "Before-After Stories" },
];

// Reusable animation configs
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.7 },
  transition: { duration: 0.5, delay },
});

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("opd");

  return (
    <motion.section
      className="bg-gray-100 py-12 mb-10 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center mb-10"
        {...fadeInUp()}
      >
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          {...fadeInUp()}
        >
          Gallery & Media
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-2"
          {...fadeInUp(0.1)}
        >
          Explore our work, events, and real patient transformations.
        </motion.p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="flex justify-center gap-4 mb-10"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6 }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 rounded-full transition ${
              activeTab === tab.key
                ? "bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-blue-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.13 } },
        }}
      >
        {galleryData[activeTab].map((img, index) => (
          <motion.div
            key={img}
            className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg border-2 border-transparent hover:border-[#0089FF] transition bg-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
          >
            <img
              src={img}
              alt="Gallery"
              className="w-full rounded-xl h-60 object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
