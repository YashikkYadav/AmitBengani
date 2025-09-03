"use client";
import { useState } from "react";

const galleryData = {
  opd: [
    "/about10.jpg",
    "/about20.jpg",
    "/about30.jpg",
  ],
  events: [
    "/cert1.jpeg",
    "/cert2.jpeg",
    "/cert3.png",
    "/cert4.png",
  ],
  stories: [
    "/gallery/story1.jpg",
    "/gallery/story2.jpg",
    "/gallery/story3.jpg",
  ],
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("opd");

  return (
    <section className="bg-gray-100 py-12 mb-10">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Gallery & Media</h1>
        <p className="text-gray-600 mt-2">
          Explore our work, events, and real patient transformations.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {[
          { key: "opd", label: "Doctor in OPD / Surgery" },
          { key: "events", label: "Certifications" },
          { key: "stories", label: "Before-After Stories" },
        ].map((tab) => (
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
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl  mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryData[activeTab].map((img, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-105 hover:border-2 hover:border-[#0089FF] transition transform bg-white"
          >
            <img
              src={img}
              alt="Gallery"
              className="w-full h-64 object-contain group-hover:opacity-90 transition"
            />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
