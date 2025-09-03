import { FaUserMd, FaStar, FaMicroscope } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const WhyChoose = () => {
  const factors = [
    {
      icon: <FaUserMd className="text-[#0089FF] text-4xl" />,
      title: "Years of Expertise",
      desc: "Dr. Amit brings over 15+ years of surgical experience with a proven track record of successful treatments.",
    },
    {
      icon: <FaStar className="text-yellow-500 text-4xl" />,
      title: "Trusted by Patients",
      desc: "Hundreds of positive reviews and testimonials reflect the compassionate and personalized care patients receive.",
    },
    {
      icon: <FaMicroscope className="text-[#0089FF] text-4xl" />,
      title: "Advanced Technology",
      desc: "Equipped with state-of-the-art laparoscopic & minimally invasive surgical technologies for faster recovery.",
    },
    {
      icon: <MdGroups className="text-purple-600 text-4xl" />,
      title: "Patient-Centric Approach",
      desc: "Every treatment plan is tailored to the unique needs of patients, ensuring safety and comfort.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-[#0089FF]">Dr. Amit</span>?
        </h2>
        <div className="w-20 h-1 bg-[#0089FF] mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-[#0089FF] hover:shadow-[#0089FF]/30"
            >
              {factor.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {factor.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{factor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
