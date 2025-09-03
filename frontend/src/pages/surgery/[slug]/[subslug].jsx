import { useRouter } from "next/router";
import { servicesData } from "@/data/servicesData";
import { FaQuestionCircle, FaClipboardList, FaHeartbeat } from "react-icons/fa";

export default function SubSurgeryDetail() {
  const router = useRouter();
  const { slug, subslug } = router.query;

  if (!slug || !subslug) {
    return <p className="text-center py-20">Loading...</p>;
  }

  const categoryData = servicesData.find((c) => c.category === slug);
  if (!categoryData) return <h1 className="text-center py-20 text-xl">Surgery not found</h1>;

  const subSurgery = categoryData.subSurgeries.find((s) => s.slug === subslug);
  if (!subSurgery) return <h1 className="text-center py-20 text-xl">Sub-surgery not found</h1>;

  const cards = [
    {
      title: "When is it needed?",
      content: subSurgery.details.whenNeeded,
      icon: <FaQuestionCircle className="text-blue-600 text-3xl" />,
    },
    {
      title: "Preparation",
      content: subSurgery.details.preparation,
      icon: <FaClipboardList className="text-blue-600 text-3xl" />,
    },
    {
      title: "Quick Rehabilitation",
      content: subSurgery.details.rehabilitation,
      icon: <FaHeartbeat className="text-blue-600 text-3xl" />,
    },
  ];

  // Helper function to render list sections
  const renderSection = (title, items, color) => (
    <section className="my-12">
      <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 pl-4 ${color}`}>
        {title}
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg md:text-xl">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Heading & Description */}
      <div className="mb-12">
        <h1 className="text-4xl text-center md:text-4xl font-extrabold text-gray-900">
          {subSurgery.name}
        </h1>
        <div className="mt-3 w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        <p className="mt-6 text-center text-lg md:text-xl text-gray-600 leading-relaxed">
          {subSurgery.description}
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200
                       hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100
                       transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {card.icon}
              <h2 className="text-xl font-semibold">{card.title}</h2>
            </div>
            <p className="text-gray-600">{card.content}</p>
          </div>
        ))}
      </div>

      {/* Optional Sections */}
      {subSurgery.isItCorrectForYou &&
        renderSection("Is It Correct For You?", subSurgery.isItCorrectForYou, "border-green-500")}
      {subSurgery.benefits &&
        renderSection("Benefits", subSurgery.benefits, "border-blue-500")}
      {subSurgery.challenges &&
        renderSection("Challenges", subSurgery.challenges, "border-red-500")}

         <div className="mt-16 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Contact Details
        </h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Phone:</span> +91 96440 32229
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Address:</span> VS MediHUB, 1st Floor,
          28 Shiv Shakti Nagar, near Indo Bharat School, Nirman Nagar, Jaipur,
          Rajasthan 302019
        </p>
        <p className="text-gray-600 mt-4">
          For appointments and inquiries, contact us at the above number or
          visit our clinic. Our experienced team is committed to providing
          expert surgical care with personalized attention.
        </p>
      </div>
    </section>
  );
}
