
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import LocationCard from "@/components/LocationCard";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    membership: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(formData.email))
      tempErrors.email = "Email is not valid";
    if (!formData.membership) tempErrors.membership = "Please select an option";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        membership: "",
        message: "",
      });
    }
  };
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0,  scale: 0.3 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
     ease: [0.23, 1, 0.32, 1] 
    },
  },
};

  return (
    <div className="bg-gray-50">
      {/* Top Info Section */}
      <motion.section
      className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Address */}
      <motion.a
        href="https://share.google/s3mzPiuUDaQfXPXOD"
        target="_blank"
        rel="noopener noreferrer"
       className="p-6 bg-white shadow-md rounded-2xl border border-transparent 
           transition-all duration-300 transform 
           hover:scale-105 hover:border-[#0076BC] 
           hover:shadow-[0_0_25px_rgba(0,118,188,0.5)] block"
        variants={card}
      >
        <FaMapMarkerAlt className="mx-auto text-4xl text-[#0076BC] mb-3" />
        <h3 className="font-semibold text-lg">Our Address</h3>
        <p className="text-gray-600 mt-1">
          1st floor, 28 Shiv Shakti Nagar, Near Indo Bharat School, Nirman
          Nagar, Jaipur, Rajasthan 302019
        </p>
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:+919644032229"
       className="p-6 bg-white shadow-md rounded-2xl border border-transparent 
           transition-all duration-300 transform 
           hover:scale-105 hover:border-[#0076BC] 
           hover:shadow-[0_0_25px_rgba(0,118,188,0.5)] block"
        variants={card}
      >
        <FaPhoneAlt className="mx-auto text-4xl text-[#0076BC] mb-3" />
        <h3 className="font-semibold text-lg">Phone Number</h3>
        <p className="text-gray-600 mt-1">96440 32229</p>
      </motion.a>

      {/* Email */}
      <motion.a
        href="mailto:dramitbenganisocial@gmail.com"
        className="p-6 bg-white shadow-md rounded-2xl border border-transparent 
           transition-all duration-300 transform 
           hover:scale-105 hover:border-[#0076BC] 
           hover:shadow-[0_0_25px_rgba(0,118,188,0.5)] block"
        variants={card}
      >
        <FaEnvelope className="mx-auto text-4xl text-[#0076BC] mb-3" />
        <h3 className="font-semibold text-lg">Email Address</h3>
        <p className="text-gray-600 mt-1">dramitbenganisocial@gmail.com</p>
      </motion.a>
    </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="max-w-3xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Title + Text */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5 }}
          >
            Get in touch
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions about our treatments or need to schedule a consultation? 
            Our expert medical team is here to assist you. Fill out the form below 
            and we will get back to you promptly to provide the guidance and care you need.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.11 } },
          }}
        >
          {/* Name */}
          <motion.div className="mb-4" variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div className="mb-4" variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.05 } } }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          {/* Company */}
          <motion.div className="mb-4" variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 } } }}>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            />
          </motion.div>

          {/* Membership */}
          <motion.div className="mb-4" variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.15 } } }}>
            <label className="block mb-2 font-medium text-gray-700">
              Do you have membership?
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="membership"
                  value="yes"
                  checked={formData.membership === "yes"}
                  onChange={handleChange}
                  className="text-[#0089FF]"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="membership"
                  value="no"
                  checked={formData.membership === "no"}
                  onChange={handleChange}
                  className="text-[#0089FF]"
                />
                No
              </label>
            </div>
            {errors.membership && (
              <p className="text-red-500 text-sm mt-1">{errors.membership}</p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div className="mb-4" variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } } }}>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            className="w-full bg-[#0089FF] text-white py-3 rounded-lg hover:bg-[#0073d6] transition"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.25 } } }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.section>

      <motion.section
        className="max-w-3xl mx-auto px-6 py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <LocationCard 
          title="Dr Amit Bengani Jain"
          address="1st floor, 28 Shiv Shakti Nagar, near Indo Bharat School, Nirman Nagar, Jaipur, Rajasthan 302019"
          timing="9 AM to 8 PM (BY APPOINTMENT Except Sunday)"
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.542086181923!2d75.7537574!3d26.886286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5bb837643bd%3A0x6526a14c1938214a!2sDr.%20Amit%20Bengani%20jain!5e0!3m2!1sen!2sin!4v1757406558816!5m2!1sen!2sin"
        />
      </motion.section>
    </div>
  );
}
