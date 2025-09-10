import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link'

// Typing effect for the tagline
function TypingText({ text, speed = 30, ...props }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span {...props}>{displayed}</span>;
}

const parentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1] } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 1.4, ease: [0.23, 1, 0.32, 1] } },
};

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#E6F3FF] via-[#CCE9FF] to-[#99D0FF]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left"
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="text-[#0089FF] font-semibold uppercase tracking-wide mb-2 min-h-[1.5em]"
            variants={childVariants}
          >
            <TypingText text="Expert Hands, Faster Healing" />
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            variants={leftVariants}
          >
            Best General & Laparoscopic Surgeon in Jaipur
          </motion.h1>
          <motion.p
            className="mt-6 text-gray-700 max-w-lg mx-auto md:mx-0"
            variants={rightVariants}
          >
            Dr. Amit Bengani provides advanced treatments for hernia, piles, gallbladder stones, appendicitis, fissure, fistula, varicose veins, hydrocele, and more. He is known for honest guidance, patient comfort, and ensuring a safe recovery every step of the way.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={leftVariants}
          >
            <Link href='/contact'>
              <button className="bg-gradient-to-r from-[#0089FF] to-[#005FCC] hover:scale-105 transition-transform text-white font-semibold px-7 py-3 rounded-lg shadow-lg">
                Book Apointment
              </button>
            </Link>
            <Link href='/about'>
              <button className="border-2 border-[#0089FF] text-[#0089FF] hover:bg-[#E6F3FF] transition font-semibold px-7 py-3 rounded-lg">
                Learn More
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute -z-10 w-80 h-80 bg-[#B3E6FF] rounded-full blur-3xl opacity-40"></div>
          <img
            src="/jain2.png"
            alt="Doctor"
            className="w-full max-w-sm object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
