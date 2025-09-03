"use client";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { FaMapMarkerAlt, FaPhoneAlt, FaAmbulance } from "react-icons/fa";

export default function BookAppointment() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Appointment booked successfully!");
  };

  const diseaseOptions = [
    { value: "piles", label: "Piles" },
    { value: "fissure", label: "Fissure" },
    { value: "fistula", label: "Fistula" },
    { value: "hernia", label: "Hernia" },
    { value: "appendicitis", label: "Appendicitis" },
    { value: "gallstones", label: "Gallstones" },
  ];

  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-blue-600" />,
      title: "Address",
      detail: "123 Health Street, Jaipur, Rajasthan",
    },
    {
      icon: <FaPhoneAlt className="text-green-600" />,
      title: "Helpline",
      detail: "+91-9876543210",
    },
    {
      icon: <FaAmbulance className="text-red-600" />,
      title: "Emergency",
      detail: "24/7 Available",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mb-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Book an Appointment
          </h1>
          <p className="mt-2 text-gray-600">
            Fill out the form below to schedule your consultation.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full h-[50px] rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                className="mt-1 block w-full h-[50px] rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Select Disease */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Disease/Condition
              </label>
              <Controller
                name="disease"
                control={control}
                rules={{ required: "Please select a disease" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={diseaseOptions}
                    placeholder="Choose a disease"
                    className="mt-1 w-[300px]"
                    menuPosition="fixed"
                    styles={{
                      control: (base) => ({
                        ...base,
                        minHeight: "50px",
                        borderRadius: "0.75rem",
                        borderColor: "#d1d5db",
                        boxShadow: "none",
                        "&:hover": { borderColor: "#3b82f6" },
                      }),
                    }}
                  />
                )}
              />
              {errors.disease && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.disease.message}
                </p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Date
              </label>
              <Controller
                name="date"
                control={control}
                rules={{ required: "Please select a date" }}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select a date"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    className="mt-1 w-[330px] block w-full h-[50px] rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4"
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Message (Optional)
              </label>
              <textarea
                {...register("message")}
                rows="3"
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>

        {/* Contact Details + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact */}
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Contact Details
            </h2>
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="p-3 bg-gray-100 rounded-full text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-medium text-gray-800">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.776684028717!2d75.78727077507313!3d26.853677676695736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e0c77b7e23%3A0xaed2c44a93f7ef3a!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1692000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
