import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is laparoscopic surgery?",
      answer:
        "Laparoscopic surgery is a minimally invasive procedure performed through small incisions with the help of a camera. It results in faster recovery and less pain compared to open surgery.",
    },
    {
      question: "How long does it take to recover from general surgery?",
      answer:
        "Recovery depends on the type of surgery. Minor surgeries may take a few days, while major surgeries can require weeks. Your doctor will provide specific recovery guidelines.",
    },
    {
      question: "Is laparoscopic surgery safe?",
      answer:
        "Yes, laparoscopic surgery is generally safe when performed by experienced surgeons. It also reduces risks of infection and scarring compared to open surgery.",
    },
    {
      question: "Will my insurance cover these surgeries?",
      answer:
        "Most health insurance plans cover both general and laparoscopic surgeries. It’s best to confirm with your insurance provider for exact coverage details.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="space-y-4"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.13 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              variants={{
                hidden: { opacity: 0, x: 40 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1],
                  },
                },
              }}
            >
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                {faq.question}
                <span className="ml-2 text-gray-600">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-40 py-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        })}
      </script>
    </section>
  );
};

export default FaqSection;
