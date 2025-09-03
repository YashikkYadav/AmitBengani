// src/pages/PatientResources.jsx
import React from "react";
import Link from "next/link";
import Testimonials from "@/components/Home/TestimonialCarousel";
import FaqSection from "@/components/Home/FaqSection"; // Adjust path if needed
import Blogs from "@/pages/blogs"; // Adjust path if needed

export default function PatientResources() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <p className="text-[#0089FF] font-semibold uppercase tracking-wide">
            Patient Resources
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Everything You Need for Your Healthcare Journey
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Access FAQs, surgery guidelines, blogs, testimonials, and insurance
            details—all in one place.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* FAQs */}
          <Link
            href="/faqs"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all border border-transparent hover:border-[#0089FF]"
          >
            <h3 className="text-xl font-bold text-gray-800">FAQs</h3>
            <p className="text-gray-600 mt-2">
              Find answers to general and surgery-related questions.
            </p>
          </Link>

          {/* Pre & Post Surgery Guidelines */}
          <Link
            href="/guidelines"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all border border-transparent hover:border-[#0089FF]"
          >
            <h3 className="text-xl font-bold text-gray-800">
              Pre & Post Surgery Guidelines
            </h3>
            <p className="text-gray-600 mt-2">
              Know what to expect before and after your surgery.
            </p>
          </Link>

          {/* Blogs */}
          <Link
            href="/blogs"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all border border-transparent hover:border-[#0089FF]"
          >
            <h3 className="text-xl font-bold text-gray-800">Blogs & Articles</h3>
            <p className="text-gray-600 mt-2">
              Read informative articles and tips on healthcare.
            </p>
          </Link>

          {/* Patient Testimonials */}
          <Link
            href="/testimonials"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all border border-transparent hover:border-[#0089FF]"
          >
            <h3 className="text-xl font-bold text-gray-800">
              Patient Testimonials
            </h3>
            <p className="text-gray-600 mt-2">
              Watch and read patient stories and feedback.
            </p>
          </Link>

          {/* Insurance Assistance */}
          <Link
            href="/insurance"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all border border-transparent hover:border-[#0089FF]"
          >
            <h3 className="text-xl font-bold text-gray-800">
              Insurance & TPA Assistance
            </h3>
            <p className="text-gray-600 mt-2">
              Get help with insurance and TPA formalities.
            </p>
          </Link>
        </div>

        {/* Integrate Components */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h3>
          <FaqSection />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Latest Blogs</h3>
          <Blogs />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Patient Testimonials
          </h3>
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
