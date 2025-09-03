import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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

  return (
    <div className="bg-gray-50">
      {/* Top Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
  {/* Address */}
  <a
    href="https://share.google/s3mzPiuUDaQfXPXOD"
    target="_blank"
    rel="noopener noreferrer"
    className="p-6 bg-white shadow-md rounded-xl border border-transparent transition-all duration-300 transform hover:scale-105 hover:border-[#0076BC] hover:shadow-[0_0_25px_rgba(0,118,188,0.5)] block"
  >
    <FaMapMarkerAlt className="mx-auto text-4xl text-[#0076BC] mb-3" />
    <h3 className="font-semibold text-lg">Our Address</h3>
    <p className="text-gray-600 mt-1">
      1st floor, 28 Shiv Shakti Nagar, near Indo Bharat School, Nirman Nagar, Jaipur, Rajasthan 302019
    </p>
  </a>

  {/* Phone */}
  <a
    href="tel:+919644032229"
    className="p-6 bg-white shadow-md rounded-xl border border-transparent transition-all duration-300 transform hover:scale-105 hover:border-[#0076BC] hover:shadow-[0_0_25px_rgba(0,118,188,0.5)] block"
  >
    <FaPhoneAlt className="mx-auto text-4xl text-[#0076BC] mb-3" />
    <h3 className="font-semibold text-lg">Phone Number</h3>
    <p className="text-gray-600 mt-1">96440 32229</p>
  </a>

  {/* Email */}
  <a
    href="mailto:dramitbenganisocial@gmail.com"
    className="p-6 bg-white shadow-md rounded-xl border border-transparent transition-all duration-300 transform hover:scale-105 hover:border-[#0076BC] hover:shadow-[0_0_25px_rgba(0,118,188,0.5)] block"
  >
    <FaEnvelope className="mx-auto text-4xl text-[#0076BC] mb-3" />
    <h3 className="font-semibold text-lg">Email Address</h3>
    <p className="text-gray-600 mt-1">dramitbenganisocial@gmail.com</p>
  </a>
</section>


      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        {/* Title + Text */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our treatments or need to schedule a consultation? 
    Our expert medical team is here to assist you. Fill out the form below 
    and we will get back to you promptly to provide the guidance and care you need.

          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          {/* Name */}
          <div className="mb-4">
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
          </div>

          {/* Email */}
          <div className="mb-4">
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
          </div>

          {/* Company */}
          <div className="mb-4">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            />
          </div>

          {/* Membership */}
          <div className="mb-4">
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
          </div>

          {/* Message */}
          <div className="mb-4">
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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#0089FF] text-white py-3 rounded-lg hover:bg-[#0073d6] transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
