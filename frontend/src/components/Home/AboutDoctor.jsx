// components/AboutDoctor.jsx
import React from "react";
import { FaCheckCircle, FaUserMd, FaTrophy, FaGraduationCap } from "react-icons/fa";

const AboutDoctor = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12">
        {/* Doctor Image */}
        <div className="flex justify-center">
          <img
            src="/jain2.png" // place doctor image in /public folder
            alt="Dr. Amit Bengani Jain"
            className="rounded-2xl shadow-lg max-w-sm w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About Dr. Amit Bengani Jain
          </h2>

          {/* Cards Section */}
         <div className="space-y-6">
  {/* Credentials */}
  <div className="border border-gray-200 rounded-xl p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:border-[#0089FF] hover:shadow-[0_0_20px_rgba(0,137,255,0.5)]">
    <h3 className="flex items-center text-xl font-semibold text-black mb-4">
      <FaGraduationCap className="mr-2 text-[#0089FF]" /> Credentials
    </h3>
    <ul className="space-y-2 ml-3 text-gray-700">
      <li className="flex items-start">
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> MBBS, MS – General Surgery
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Fellowship in Laparoscopic Surgery
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Specialized Training in Proctology
      </li>
    </ul>
  </div>

  {/* Experience */}
  <div className="border border-gray-200 rounded-xl p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:border-[#0089FF] hover:shadow-[0_0_20px_rgba(0,137,255,0.5)]">
    <h3 className="flex items-center text-xl font-semibold text-black mb-4">
      <FaUserMd className="mr-2 text-[#0089FF]" /> Experience
    </h3>
    <ul className="space-y-2 ml-3 text-gray-700">
      <li className="flex items-start">
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> 20+ years in advanced surgical care
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Performed 20,000+ successful procedures
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Renowned in piles, fissures & fistula treatment
      </li>
    </ul>
  </div>

  {/* Achievements */}
  <div className="border border-gray-200 rounded-xl p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:border-[#0089FF] hover:shadow-[0_0_20px_rgba(0,137,255,0.5)]">
    <h3 className="flex items-center text-xl font-semibold text-black mb-4">
      <FaTrophy className="mr-2 text-[#0089FF]" /> Achievements
    </h3>
    <ul className="space-y-2 ml-3 text-gray-700">
      <li className="flex items-start">
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Recognized as a leading Proctologist in India
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Regular speaker at national medical conferences
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Published research in reputed journals
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
