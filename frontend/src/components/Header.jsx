"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import { servicesData } from "../data/servicesData";

const headerVariants = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};
const navStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const navItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const mobileMenuVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.07 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  return (
    <motion.header
      className="w-full bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50"
      variants={headerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="h-[55px]" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex space-x-8 items-center font-medium text-gray-700"
          variants={navStagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={navItem}>
            <Link href="/" className="hover:text-[#0089FF] transition">
              Home
            </Link>
          </motion.div>
          <motion.div variants={navItem}>
            <Link href="/about" className="hover:text-[#0089FF] transition">
              About
            </Link>
          </motion.div>
          {/* Services Dropdown */}
          <motion.div variants={navItem}>
            <div
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setOpenDropdown("service")}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSubmenu(null);
              }}
            >
              <span className="hover:text-[#0089FF] transition flex items-center">
                Our Services
                <FiChevronDown
                  className={`ml-1 transition-transform duration-300 ${
                    openDropdown === "service" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
              <AnimatePresence>
                {openDropdown === "service" && (
                  <motion.div
                    className="absolute left-0 top-3 mt-2 z-20 flex"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative flex" onMouseLeave={() => setOpenSubmenu(null)}>
                      {/* Main Category Dropdown */}
                      <div className="bg-white shadow-lg rounded-xl py-2 border border-gray-100 w-64">
                        {servicesData.map((category, i) => (
                          <div
                            key={i}
                            className="relative"
                            onMouseEnter={() => setOpenSubmenu(category.category)}
                          >
                            <Link
                              href={`/surgeries/${category.category}`}
                              className="flex justify-between items-center px-4 py-2 hover:bg-[#F0F8FF] cursor-pointer"
                            >
                              {category.name}
                              <FiChevronRight />
                            </Link>
                          </div>
                        ))}
                      </div>
                      {/* Sub-surgeries Dropdown */}
                      <AnimatePresence>
                        {openSubmenu && (
                          <motion.div
                            className="bg-white shadow-lg rounded-xl py-2 w-64 border border-gray-100 absolute left-full top-0 z-50"
                            style={{ height: "100%" }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                          >
                            {servicesData
                              .find((cat) => cat.category === openSubmenu)
                              ?.subSurgeries.map((sub, j) => (
                                <Link
                                  key={j}
                                  href={`/surgery/${openSubmenu}/${sub.slug}`}
                                  className="block px-4 py-2 hover:bg-[#F0F8FF]"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          {/* Pages Dropdown */}
          <motion.div variants={navItem}>
            <div
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setOpenDropdown("pages")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="flex items-center hover:text-[#0089FF] transition">
                Pages
                <FiChevronDown
                  className={`ml-1 transition-transform duration-300 ${
                    openDropdown === "pages" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
              <AnimatePresence>
                {openDropdown === "pages" && (
                  <motion.div
                    className="absolute left-0 top-4 mt-2 w-48 bg-white shadow-lg rounded-xl py-2 z-20 border border-gray-100"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href="/blogs"
                      className="block px-4 py-2 hover:bg-[#F0F8FF]"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/gallery"
                      className="block px-4 py-2 hover:bg-[#F0F8FF]"
                    >
                      Gallery & Media
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.nav>

        {/* Auth Buttons - Desktop */}
        <motion.div className="hidden md:flex space-x-4 items-center" variants={navStagger} initial="hidden" animate="show">
          <motion.div variants={navItem}>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white px-5 py-2.5 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Book Apointment
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg border-t border-gray-100 px-6 py-4 space-y-4 h-[70vh] overflow-y-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Link
              href="/"
              className="block hover:bg-blue-50 rounded-md px-2 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:bg-blue-50 rounded-md px-2 transition"
            >
              About
            </Link>
            {/* Services Toggle (Mobile) */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex justify-between items-center w-full font-medium px-2 py-2 hover:bg-blue-50 rounded-md transition"
              >
                <span>Our Services</span>
                <FiChevronDown
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    className="ml-4 mt-2 space-y-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, staggerChildren: 0.07 }}
                  >
                    {servicesData.map((category, i) => (
                      <div key={i}>
                        <button
                          onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === category.category ? null : category.category)}
                          className="flex justify-between items-center w-full text-left px-2 py-1 rounded-md transition hover:bg-blue-100 font-medium"
                        >
                          <span>{category.name}</span>
                          <FiChevronRight className={`transition-transform ${mobileSubmenuOpen === category.category ? 'rotate-90' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenuOpen === category.category && (
                            <motion.div
                              className="ml-4 mt-1 space-y-1"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.3 }}
                            >
                              {category.subSurgeries.map((sub, j) => (
                                <Link
                                  key={j}
                                  href={`/surgery/${category.category}/${sub.slug}`}
                                  className="block px-2 py-1 rounded-md transition hover:bg-blue-100 text-sm"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Pages Toggle (Mobile) */}
            <div>
              <button
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                className="flex justify-between items-center w-full font-medium px-2 py-2 hover:bg-blue-50 rounded-md transition"
              >
                <span>Pages</span>
                <FiChevronDown
                  className={`transition-transform ${
                    mobilePagesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <AnimatePresence>
                {mobilePagesOpen && (
                  <motion.div
                    className="ml-4 mt-2 space-y-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, staggerChildren: 0.07 }}
                  >
                    <Link
                      href="/blogs"
                      className="block px-2 py-1 rounded-md transition hover:bg-blue-100"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/gallery"
                      className="block px-2 py-1 rounded-md transition hover:bg-blue-100"
                    >
                      Gallery & Media
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Login / Signup Buttons */}
            <div className="pt-2 flex gap-4">
              <Link
                href="/contact"
                className="flex-1 text-center bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white px-3 py-2 rounded-lg hover:opacity-90 transition"
              >
                Book Apointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
