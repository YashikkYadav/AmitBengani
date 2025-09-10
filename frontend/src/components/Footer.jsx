"use client"

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61579038320766" },
    { icon: FaTwitter, link: "https://x.com/DrAmitBengani" },
    { icon: FaYoutube, link: "https://youtube.com/@dramitbenganijain?si=pTcxpxfYB0D4pJ0j" },
    { icon: FaInstagram, link: "https://www.instagram.com/dr.amit.bengani.jain/" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/dr-amit-bengani-jain/" },
  ];

  return (
    <motion.footer
      className="bg-white border-t border-gray-200"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Main Footer Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-gray-700"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Logo & Info */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center md:text-left">
          <img
            src="/logo.png"
            alt="logo"
            className="h-[70px] mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Providing trusted surgical expertise and compassionate care with the latest technology.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            {socialLinks.map(({ icon: Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-[#0089FF] hover:text-white transition duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="md:text-left">
          <h3 className="font-semibold text-lg mb-4 text-[#0089FF]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/#surgeries", label: "Surgeries" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#0089FF] transition duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Details */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="md:text-left">
          <h3 className="font-semibold text-lg mb-4 text-[#0089FF]">Contact Details</h3>
          <div className="space-y-3 text-sm">
            {/* Location */}
            <a
              href="https://share.google/s3mzPiuUDaQfXPXOD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 md:justify-start hover:text-[#0089FF] transition"
            >
              <FaMapMarkerAlt className="text-[#0089FF] text-xl" />
              1st floor, 28 Shiv Shakti Nagar, Near Indo Bharat School, Nirman Nagar, Jaipur, Rajasthan 302019
            </a>

            {/* Phone */}
            <a
              href="tel:+919644032229"
              className="flex items-center gap-2 md:justify-start hover:text-[#0089FF] transition"
            >
              <FaPhoneAlt className="text-[#0089FF] text-lg" /> +91 96440 32229
            </a>

            {/* Email */}
            <a
              href="mailto:dramitbenganisocial@gmail.com"
              className="flex items-center gap-2 md:justify-start hover:text-[#0089FF] transition"
            >
              <FaEnvelope className="text-[#0089FF] text-lg" /> dramitbenganisocial@gmail.com
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.hr className="w-full border-gray-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }} />
      <motion.div className="text-center py-5 text-sm text-gray-600" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}>
        Copyright © 2025 Dr Amit Bengani Jain | Design & Developed By{" "}
        <span className="font-semibold text-[#0089FF]">Yashik Yadav & Co.</span>
      </motion.div>
    </motion.footer>
  );
}
