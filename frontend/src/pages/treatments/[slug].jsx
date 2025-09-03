import { useRouter } from "next/router";
import Link from "next/link";
import diseasesData from "@/data/diseasesData";

export default function DiseaseDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const disease = diseasesData[slug];

  if (!disease) {
    return <h1 className="text-center py-20 text-xl">Condition not found</h1>;
  }

  // Support multiple paragraphs: if description is an array → render each separately
  const descriptionParagraphs = Array.isArray(disease.description)
    ? disease.description
    : [disease.description];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
        {disease.title}
      </h1>

      {/* Description + Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
        {/* Description */}
        <div className="flex-1 space-y-4">
          {descriptionParagraphs.map((para, i) => (
            <p
              key={i}
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Image */}
        <img
          src="/dummyblog.jpg"
          alt={disease.title}
          className="w-full md:w-[400px] h-auto rounded-lg shadow"
        />
      </div>

      {/* Symptoms */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Symptoms</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-2 sm:pl-4">
        {disease.symptoms.map((symptom, i) => (
          <li key={i} className="text-sm sm:text-base">
            {symptom}
          </li>
        ))}
      </ul>

      {/* Treatments */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Treatments Available
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-10 pl-2 sm:pl-4">
        {disease.treatments.map((treat, i) => (
          <li key={i} className="text-sm sm:text-base">
            {treat}
          </li>
        ))}
      </ul>

      {/* Call to Action Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
          Need Expert Consultation?
        </h3>
        <p className="text-gray-600 mb-5">
          Talk to our experienced doctors in Jaipur for the best and most
          advanced treatment options tailored to your needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
