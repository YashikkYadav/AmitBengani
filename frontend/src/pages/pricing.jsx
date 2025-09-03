import Link from "next/link";
import Testimonials from "@/components/Home/TestimonialCarousel";

const pricingData = [
  {
    id: 1,
    title: "Health Checkup",
    price: "$29",
    image: "/p1.png",
  },
  {
    id: 2,
    title: "Vaccination Shot",
    price: "$47",
    image: "/p2.png",
  },
  {
    id: 3,
    title: "Doctor Consultation",
    price: "$19",
    image: "/p3.png",
  },
  {
    id: 4,
    title: "Laboratory Test",
    price: "$79",
    image: "/p4.png",
  },
];

export default function Pricing() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-[#0089FF] font-semibold uppercase tracking-wide">
              Our Pricing
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Affordable Healthcare Services
            </h2>
            <p className="text-gray-600 mt-4">
              Transparent pricing with no hidden charges. Choose the right
              service for you.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {pricingData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 flex items-center justify-between shadow-md transition-all duration-300 hover:scale-105 hover:border hover:border-[#0089FF] hover:shadow-[0_0_20px_#0089FF50]"
              >
                {/* Left: Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 object-contain"
                />

                {/* Right: Content */}
                <div className="ml-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900 mt-2">
                    {service.price}
                  </p>
                  <Link href="/book-appointment">
                    <button className="mt-4 bg-[#0089FF] text-white px-5 py-2 rounded-lg shadow hover:bg-[#0070cc] transition duration-300">
                      Make Appointment
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
