import React from "react";
import Link from "next/link";
import { FaStethoscope, FaHeartbeat, FaProcedures, FaUserMd } from "react-icons/fa";

const diseases = [
  { name: "Piles", slug: "/treatments/piles", icon: <FaStethoscope /> },
  { name: "Fissure", slug: "/treatments/fissure", icon: <FaHeartbeat /> },
  { name: "Fistula", slug: "/treatments/fistula", icon: <FaProcedures /> },
  { name: "Hernia", slug: "/treatments/hernia", icon: <FaUserMd /> },
  { name: "Gallstones", slug: "/treatments/gallstones", icon: <FaStethoscope /> },
  { name: "Appendicitis", slug: "/treatments/appendicitis", icon: <FaHeartbeat /> },
  { name: "Varicose Veins", slug: "/treatments/varicose-veins", icon: <FaProcedures /> },
  { name: "Hydrocele", slug: "/treatments/hydrocele", icon: <FaUserMd /> },
];

const DiseasesGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Diseases & Conditions <span className="text-[#0089FF]">Treated</span>
        </h2>
        <div className="w-24 h-1 bg-[#0089FF] mx-auto mb-10 rounded-full"></div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {diseases.map((disease, idx) => (
            <Link key={idx} href={disease.slug}>
              <div className="cursor-pointer p-6 bg-white border border-gray-200 rounded-xl text-center font-medium text-gray-800 shadow-md transition-transform duration-300 hover:scale-101 hover:text-white hover:shadow-lg hover:border-[#0089FF] hover:bg-[#0089FF] hover:shadow-[#0089FF]/30">
                <div className="text-3xl mb-2 flex justify-center">
                  {disease.icon}
                </div>
                {disease.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseasesGrid;
