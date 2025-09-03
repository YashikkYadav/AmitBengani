
import Image from "next/image";
import {
  FaAward,
  FaHospital,
  FaUserMd,
  FaStethoscope,
} from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

export default function DoctorProfile() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Row 1 - Doctor Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h4 className="uppercase tracking-widest text-[#0089FF] font-semibold text-sm mb-2">
              Our Doctor
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
              Patients deserve the{" "}
              <span className="text-[#0089FF]">best care</span> from us
            </h2>
            <p className="text-gray-600 mb-6">
              Dr. Amit Bengani Jain is a{" "}
              <strong>General Surgeon in Jaipur</strong> and{" "}
              <strong>Laparoscopic Surgeon in Jaipur</strong> with years of
              experience delivering advanced surgical care. His expertise lies
              in minimally invasive laparoscopic procedures,
              gastrointestinal surgeries, and patient-centered treatment
              approaches.
            </p>
          </div>

          {/* Right Image with aura effect */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_#0089FF]">
              <Image
                src="/jain2.png"
                alt="Dr. Amit Bengani Jain - General Surgeon in Jaipur"
                width={400}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 2 - Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Biography */}
          <div className="p-6 bg-white rounded-2xl shadow-md text-center border border-transparent hover:border-[#0089FF] hover:shadow-[0_0_20px_#0089FF] transform transition duration-300 hover:scale-105">
            <h3 className="flex justify-center items-center text-lg font-semibold text-gray-800">
              <FaUserMd className="text-[#0089FF] mr-2" /> Biography
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              <strong>Education:</strong> MBBS, MS (General Surgery) <br />
              <strong>Specialization:</strong> General & Laparoscopic Surgery <br />
              <strong>Experience:</strong> Over 20+ years in surgical practice
            </p>
          </div>

          {/* Hospital Affiliations */}
          <div className="p-6 bg-white rounded-2xl shadow-md text-center border border-transparent hover:border-[#0089FF] hover:shadow-[0_0_20px_#0089FF] transform transition duration-300 hover:scale-105">
            <h3 className="flex justify-center items-center text-lg font-semibold text-gray-800">
              <FaHospital className="text-[#0089FF] mr-2" /> Hospital Affiliations
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Associated with leading hospitals in Jaipur for advanced general
              and laparoscopic surgeries.
            </p>
          </div>

          {/* Memberships */}
          <div className="p-6 bg-white rounded-2xl shadow-md text-center border border-transparent hover:border-[#0089FF] hover:shadow-[0_0_20px_#0089FF] transform transition duration-300 hover:scale-105">
            <h3 className="flex justify-center items-center text-lg font-semibold text-gray-800">
              <FaStethoscope className="text-[#0089FF] mr-2" /> Memberships
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-2 text-sm space-y-1 text-left">
              <li>Association of Surgeons of India (ASI)</li>
              <li>Indian Medical Association (IMA)</li>
              <li>Other reputed medical societies</li>
            </ul>
          </div>

          {/* Awards */}
          <div className="p-6 bg-white rounded-2xl shadow-md text-center border border-transparent hover:border-[#0089FF] hover:shadow-[0_0_20px_#0089FF] transform transition duration-300 hover:scale-105">
            <h3 className="flex justify-center items-center text-lg font-semibold text-gray-800">
              <FaAward className="text-[#0089FF] mr-2" /> Awards & Recognitions
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Recognized for excellence in patient care and laparoscopic
              innovations, awarded multiple times for outstanding contribution
              in surgical practice.
            </p>
          </div>

          {/* Philosophy of Care */}
          <div className="p-6 bg-white rounded-2xl shadow-md text-center border border-transparent hover:border-[#0089FF] hover:shadow-[0_0_20px_#0089FF] transform transition duration-300 hover:scale-105 sm:col-span-2 lg:col-span-3">
            <h3 className="flex justify-center items-center text-lg font-semibold text-gray-800">
              <MdWorkspacePremium className="text-[#0089FF] mr-2" /> Philosophy of Care
            </h3>
            <p className="text-gray-600 mt-2 italic text-sm">
              "My focus has always been to provide compassionate, safe, and
              advanced surgical care with minimal discomfort and faster recovery
              for patients."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
