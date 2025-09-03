import expectData from "@/data/expectData";
import { useState } from "react";
import Link from "next/link";

export default function WhatToExpect({ serviceId }) {
  const data = expectData.find((item) => item.id === serviceId);

  if (!data) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        What to Expect During Surgery
      </h2>

      {/* What to Expect Items */}
      <div className="space-y-6 mb-12">
        {data.items.map((step, i) => (
          <div
            key={i}
            className={`p-6 bg-white rounded-2xl shadow-md border-l-4 ${step.color}`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Recovery Section */}
  {/* Recovery & Post-Operative Care Section */}
{data.recovery && (
  <div className="mt-16">
    {/* Heading */}
    <div className="relative w-fit mx-auto mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        {data.recovery.title}
      </h2>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
    </div>

    {/* Points Grid */}
    <div className="grid md:grid-cols-2 gap-6">
      {data.recovery.points.map((point, i) => (
        <div
          key={i}
          className="flex items-start gap-4 bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Number Badge */}
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold shadow-md">
            {i + 1}
          </div>

          {/* Text */}
          <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
        </div>
      ))}
    </div>
  </div>
)}


      {/* FAQ Section */}
     {/* FAQ + CTA Section */}
{data.faq && data.faq.length > 0 && (
  <div className="mt-16 bg-gradient-to-r from-[#f9fafb] to-[#f0fdf4] rounded-2xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Left side - FAQ */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {data.faq.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>

    {/* Right side - CTA */}
    <div className="flex flex-col items-center text-center md:text-left">
      <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md mb-6">
        {/* Replace with an icon/image if needed */}
        <span className="text-3xl text-[#0089FF]">💡</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
        Looking for the best  surgeon in Jaipur?
      </h3>
      <p className="text-gray-600 mb-6">
        Book your consultation today and take the first step toward a healthier life.
      </p>
      <Link
        href="/contact"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0089FF] to-blue-400 text-white font-medium shadow-md hover:shadow-lg transition"
      >
        Book Consultation →
      </Link>
    </div>
  </div>
)}

    </div>
  );
}

// Reusable FAQ accordion
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:text-[#0089FF] focus:outline-none"
      >
        {question}
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
