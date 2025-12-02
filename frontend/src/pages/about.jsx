import { useEffect, useState, useRef } from "react";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import DoctorProfile from "@/components/DoctorProfile";
import Head from "next/head";
import { getSEOMetadata } from '@/utils/seoUtils';

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const increment = Math.ceil(target / (duration / 50));
          const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
              clearInterval(interval);
              setCount(target);
            } else {
              setCount(start);
            }
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, duration, started]);

  return <span ref={ref}>{count}</span>;
};

export default function About() {
  const seoData = getSEOMetadata('/about');
  
  return (
    <>
      <Head>
        <title>{seoData?.title || 'Dr. Amit Bengani Jain | Best General & Laparoscopic Surgeon in Jaipur'}</title>
        <meta name="description" content={seoData?.description || 'Meet Dr. Amit Bengani Jain, the top general & laparoscopic surgeon in Jaipur. Offering expert care and advanced treatments to ensure your health and well-being.'} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://dramitbenganijain.com/about" />
      </Head>
      <section className="py-20 bg-gray-50 relative overflow-x-clip">
        <div className="max-w-7xl mx-auto mb-3 px-6 space-y-16">
        {/* Heading */}
        <motion.div
          className="flex flex-col md:flex-col justify-between items-start md:items-start gap-6 mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <motion.h4
              className="uppercase tracking-widest text-[#0089FF] font-semibold text-sm"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              About Us
            </motion.h4>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Dr Amit Bengani Jain is Best General & Laparoscopic <br />Surgeon in Jaipur
            </motion.h2>
          </div>
          <motion.p
            className="text-gray-600 max-w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            With over 20+ years of experience and 35,000+ successful surgeries, Dr. Amit Bengani Jain is recognized as the trusted expert in General and Laparoscopic Surgery in Jaipur. He provides advanced, minimally invasive treatments for conditions like hernia, piles, and gallbladder stones with utmost care and precision.
            <br />
            Dr. Amit Bengani Jain and his dedicated medical team are committed to providing compassionate, patient-centered care, ensuring every patient and their loved ones feel protected and informed throughout their surgical journey.
          </motion.p>
        </motion.div>

        {/* Images with hover aura effect */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {["about1.jpg", "about2.jpg", "about3.jpg"].map((img, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_#0089FF]"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.8,ease: [0.23, 1, 0.32, 1] } },
              }}
            >
              <Image
                src={`/${img}`}
                alt={`About Image ${i + 1}`}
                width={400}
                height={250}
                className="w-full h-60 object-cover object-top"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats with blue theme */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-center"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { target: 20000, label: "Successfull Surgeries", suffix: "+" },
            { target: 20, label: "Surgical Experience", suffix: "+" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md border-l-4 border-r-4 border-gray-200 hover:scale-103 hover:border-[#0089FF] transition duration-300 w-64"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
              }}
            >
              <h3 className="text-4xl font-bold text-gray-800">
                <Counter target={item.target} duration={2000} />
                {item.suffix || ""}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Doctor Profile Section */}
      <DoctorProfile />
    </section>
    </>
  );
}
