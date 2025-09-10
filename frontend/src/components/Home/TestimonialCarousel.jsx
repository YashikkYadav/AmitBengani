
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    feedback:
      "The doctors here are very professional and caring. My surgery went smoothly and recovery was fast.",
    image: "/test1.jpg",
  },
  {
    name: "Priya Reddy",
    feedback:
      "Excellent facilities and great support from the staff. Highly recommended!",
    image: "/test2.jpg",
  },
  {
    name: "Amit Verma",
    feedback:
      "I was very nervous before my procedure but the doctors made me feel comfortable. Very happy with the treatment.",
    image: "/test3.jpg",
  },
];


const Testimonials = () => {
  return (
    <motion.section className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6 }}
        >
          What Our{" "}
          <span className="text-[#2563eb] text-4xl">Patients</span> Say
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#2563eb] mx-auto mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ originX: 0.5 }}
        />

        {/* Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md text-center border border-transparent transition-all duration-300 transform hover:scale-105 hover:border-[#2563eb] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-[#2563eb]/20"
              />
              <p className="text-gray-600 italic mb-4">
                "{testimonial.feedback}"
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
