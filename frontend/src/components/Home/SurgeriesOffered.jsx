import { FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { GiScalpel, GiMedicalDrip, GiKidneys } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { servicesData } from "../../data/servicesData";
import { motion } from "framer-motion";
import Link from "next/link";

// map categories to icons
const iconMap = {
  "Gallbladder Surgeries": GiKidneys,
  "Appendix Surgeries": GiScalpel,
  "Hernia Surgeries": FaStethoscope,
  "Piles, Fissure & Fistula Treatments": FaHeartbeat,
  "Abdominal Surgeries": GiMedicalDrip,
  "Bariatric & Obesity Surgeries": MdHealthAndSafety,
  "Breast Surgeries": FaUserMd,
  "Thyroid & Neck Surgeries": FaUserMd,
  "Liver, Spleen & Pancreas Surgeries": GiMedicalDrip,
  "Other Surgeries": FaStethoscope,
  "Trauma & Emergency Surgeries": FaHeartbeat,
};


const gridParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const gridItem = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};


export default function SurgeriesOffered() {
  // Use category (already slug-safe) for the URL
  const surgeries = servicesData.map((service) => ({
    name: service.name,
    slug: `/surgeries/${service.category}`, // ✅ use category field
    icon: iconMap[service.name] || FaUserMd, // ✅ map by service.name
  }));

  return (
    <section className="py-16 bg-gray-50 overflow-x-hidden" id="surgeries">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-[#0089FF] text-4xl">Surgeries</span> Offered (General + Laparoscopic)
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-[#0089FF] mx-auto mb-10 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        />

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {surgeries.map((surgery, idx) => {
            const Icon = surgery.icon;
            return (
              <motion.div  className={
                    "cursor-pointer p-6 bg-white border border-gray-200 rounded-xl text-center font-medium text-gray-800 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-[#0089FF] hover:text-white hover:bg-[#0089FF] hover:shadow-[#0089FF]/30"
                  } key={idx} variants={gridItem}>
                <Link
                  href={surgery.slug}
                 
                >
                  <Icon className="text-4xl mx-auto" />
                  <p className="mt-3">{surgery.name}</p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      
      </div>
    </section>
  );
}
