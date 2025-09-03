import { useRouter } from "next/router";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";
import whatToExpectData from "@/data/expectData";
import WhatToExpect from "@/components/WhatToExpect";

import { useState } from "react";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center md:text-left mb-6">
        <span className="bg-gradient-to-r from-[#0089FF] to-blue-400 bg-clip-text text-transparent">
          {surgeryCategory.name}
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-full mb-12">
        {surgeryCategory.description}
      </p>

      {/* Sub-surgeries */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        Procedures Offered
      </h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
  {surgeryCategory.subSurgeries.map((item, i) => (
    <Link
      key={i}
      href={`/surgery/${surgeryCategory.category}/${item.slug}`}
      className="group relative flex flex-col items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center transition-all duration-300 hover:shadow-2xl hover:border-[#0089FF] hover:bg-gradient-to-b hover:from-[#0089FF] hover:to-[#006FCC] hover:text-white"
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
  ))}
      </div>

      <WhatToExpect serviceId={surgeryCategory.id} />
      {/* Contact Details */}
      <div className="mt-16 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Contact Details
        </h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Phone:</span> +91 96440 32229
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Address:</span> VS MediHUB, 1st Floor,
          28 Shiv Shakti Nagar, near Indo Bharat School, Nirman Nagar, Jaipur,
          Rajasthan 302019
        </p>
        <p className="text-gray-600 mt-4">
          For appointments and inquiries, contact us at the above number or
          visit our clinic. Our experienced team is committed to providing
          expert surgical care with personalized attention.
        </p>
      </div>
    </div>
  );
}

// Reusable FAQ Item (accordion style)

