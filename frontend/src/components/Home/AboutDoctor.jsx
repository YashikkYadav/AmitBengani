// components/AboutDoctor.jsx
import { easeIn, motion } from 'framer-motion';
import React from "react";
import { FaCheckCircle, FaUserMd, FaTrophy, FaGraduationCap } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, x: "70%" },
 show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1],
                  },
                },
};
const listParent = {
  hidden: {},
  show: { transition: { delay: 1, staggerChildren: 0.13 } }, // delay matches card duration
};
const listItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: "-80%" },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } },
};

const AboutDoctor = () => {
  return (
    <section className="w-full py-16 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12">
        {/* Doctor Image */}
        <motion.div
          className="flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/jain2.png" // place doctor image in /public folder
            alt="Dr. Amit Bengani Jain"
            className="rounded-2xl shadow-lg max-w-sm w-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About Dr. Amit Bengani Jain
          </h2>

          {/* Cards Section */}
         <div className="space-y-6">
  {/* Credentials */}
  <motion.div
    className="border border-gray-200 rounded-xl p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:border-[#0089FF] hover:shadow-[0_0_20px_rgba(0,137,255,0.5)]"
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <h3 className="flex items-center text-xl font-semibold text-black mb-4">
      <FaGraduationCap className="mr-2 text-[#0089FF]" /> Credentials
    </h3>
    <motion.ul className="space-y-2 ml-3 text-gray-700" variants={listParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <motion.li className="flex items-start" variants={listItem}>
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> MBBS, MS – General Surgery
      </motion.li>
      <motion.li className="flex items-start" variants={listItem}>
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Fellowship in Laparoscopic Surgery
      </motion.li>
      <motion.li className="flex items-start" variants={listItem}>
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Minimally Invasive proctology 

      </motion.li>
    </motion.ul>
  </motion.div>

  {/* Experience */}
  <motion.div
    className="border border-gray-200 rounded-xl p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:border-[#0089FF] hover:shadow-[0_0_20px_rgba(0,137,255,0.5)]"
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <h3 className="flex items-center text-xl font-semibold text-black mb-4">
      <FaUserMd className="mr-2 text-[#0089FF]" /> Experience
    </h3>
    <motion.ul className="space-y-2 ml-3 text-gray-700" variants={listParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <motion.li className="flex items-start" variants={listItem}>
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> 20+ years in advanced surgical care
      </motion.li>
      <motion.li className="flex items-start" variants={listItem}>
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Performed 20,000+ successful procedures
      </motion.li>
      <motion.li className="flex items-start" variants={listItem}>
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Renowned in Basic and Advanced laparoscopic surgeries

      </motion.li>
    </motion.ul>
  </motion.div>

  {/* Achievements */}
  <motion.div
    className="border border-gray-200 rounded-xl p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:border-[#0089FF] hover:shadow-[0_0_20px_rgba(0,137,255,0.5)]"
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <h3 className="flex items-center text-xl font-semibold text-black mb-4">
      <FaTrophy className="mr-2 text-[#0089FF]" /> Achievements
    </h3>
    <motion.ul className="space-y-2 ml-3 text-gray-700" variants={listParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <motion.li className="flex items-start" variants={listItem}>
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Recognized as a leading Proctologist in India
      </motion.li>
      <motion.li className="flex items-start" variants={listItem}>
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Regular speaker at national medical conferences
      </motion.li>
      <motion.li className="flex items-start" variants={listItem}>
        <FaCheckCircle className="text-[#0089FF] mr-2 mt-1" /> Published research in reputed journals
      </motion.li>
    </motion.ul>
  </motion.div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
