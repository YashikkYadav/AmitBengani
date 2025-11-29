import { useRouter } from "next/router";
import Link from "next/link";
import diseasesData from "@/data/diseasesData";
import { motion } from "framer-motion";
import Head from "next/head";
import { getSEOMetadata } from '@/utils/seoUtils';

export default function DiseaseDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const disease = diseasesData[slug];
  
  // Get SEO metadata for this treatment page
  const seoData = getSEOMetadata(`/treatments/${slug}`);

  if (!disease) {
    return <h1 className="text-center py-20 text-xl">Condition not found</h1>;
  }

  // Support multiple paragraphs: if description is an array → render each separately
  const descriptionParagraphs = Array.isArray(disease.description)
    ? disease.description
    : [disease.description];

  return (
    <>
      <Head>
        <title>{seoData?.title || `${disease.title} | Dr Amit Bengani`}</title>
        <meta name="description" content={seoData?.description || `Learn about ${disease.title.toLowerCase()} treatment options by Dr. Amit Bengani, a leading general and laparoscopic surgeon in Jaipur.`} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={`https://dramitbenganijain.com/treatments/${slug}`} />
      </Head>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 overflow-x-hidden">
        {/* Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {disease.title}
        </motion.h1>

      {/* Description + Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
        {/* Description */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {descriptionParagraphs.map((para, i) => (
            <p
              key={i}
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
            >
              {para}
            </p>
          ))}
        </motion.div>
        {/* Image */}
        <motion.img
          src="/dummyblog.jpg"
          alt={disease.title}
          className="w-full md:w-[400px] h-auto rounded-lg shadow"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>

      {/* Symptoms */}
      <motion.h2
        className="text-xl sm:text-2xl font-semibold mb-4"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Symptoms
      </motion.h2>
      <motion.ul
        className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-2 sm:pl-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        {disease.symptoms.map((symptom, i) => (
          <motion.li
            key={i}
            className="text-sm sm:text-base"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {symptom}
          </motion.li>
        ))}
      </motion.ul>

      {/* Treatments */}
      <motion.h2
        className="text-xl sm:text-2xl font-semibold mb-4"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Treatments Available
      </motion.h2>
      <motion.ul
        className="list-disc list-inside space-y-2 text-gray-700 mb-10 pl-2 sm:pl-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        {disease.treatments.map((treat, i) => (
          <motion.li
            key={i}
            className="text-sm sm:text-base"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {treat}
          </motion.li>
        ))}
      </motion.ul>

      {/* Call to Action Section */}
      <motion.div
        className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
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
          Book Apointment
        </Link>
      </motion.div>
    </div>
    </>
  );
}
