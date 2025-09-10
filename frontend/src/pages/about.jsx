
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import DoctorProfile from "@/components/DoctorProfile";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const increment = Math.ceil(target / (duration / 50)); 
          const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
              clearInterval(interval);
              setCount(target);
            } else {
              setCount(start);
            }
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, duration, started]);

  return <span ref={ref}>{count}</span>;
};

export default function About() {
  return (
  <section className="py-20 bg-gray-50 relative overflow-x-clip">
  <div className="max-w-7xl mx-auto mb-3 px-6 space-y-16">
        {/* Heading */}
        <div className="flex flex-col md:flex-col justify-between items-start md:items-start gap-6 mb-10">
          <div>
            <h4 className="uppercase tracking-widest text-[#0089FF] font-semibold text-sm animate-fadeInUp opacity-0">
              About Us
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 animate-fadeInUp opacity-0 [animation-delay:0.1s]">
              Dr Amit Bengani Jain is Best General & Laparoscopic <br/>Surgeon in Jaipur
            </h2>
          </div>
          <p className="text-gray-600 max-w-full animate-fadeInUp opacity-0 [animation-delay:0.2s]">
            With over 20+ years of experience and 35,000+ successful surgeries, Dr. Amit Bengani Jain is recognized as the trusted expert in General and Laparoscopic Surgery in Jaipur. He provides advanced, minimally invasive treatments for conditions like hernia, piles, and gallbladder stones with utmost care and precision.

            Dr. Amit Bengani Jain and his dedicated medical team are committed to providing compassionate, patient-centered care, ensuring every patient and their loved ones feel protected and informed throughout their surgical journey.
          </p>
        </div>

        {/* Images with hover aura effect */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {["about1.jpg", "about2.jpg", "about3.jpg"].map((img, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_#0089FF] animate-fadeInScale opacity-0 [animation-delay:${0.2 + i * 0.1}s]`}
            >
              <Image
                src={`/${img}`}
                alt={`About Image ${i + 1}`}
                width={400}
                height={250}
                className="w-full h-60 object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* Stats with blue theme */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { target: 35000, label: "Successfull Surgeries", suffix: "+" },
            { target: 22, label: "Surgical Experience", suffix: "+" },
            { target: 1000, label: "Patients Treated", suffix: "+" },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 bg-white rounded-2xl shadow-md border-l-4 border-r-4 border-gray-200 hover:scale-103 hover:border-[#0089FF] transition duration-300 w-64 animate-fadeInUp opacity-0 [animation-delay:${0.3 + i * 0.1}s]`}
            >
              <h3 className="text-4xl font-bold text-gray-800">
                <Counter target={item.target} duration={2000} />
                {item.suffix || ""}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>


      </div>

      {/* Doctor Profile Section */}
      <DoctorProfile />

     
    </section>
  );
}
