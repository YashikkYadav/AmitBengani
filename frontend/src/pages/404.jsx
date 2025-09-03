// pages/404.jsx
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      {/* Big 404 Text */}
      <h1 className="text-[120px] font-extrabold text-[#0089FF] mb-2">404</h1>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.  
        Let’s get you back on track!
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 px-6 py-2 bg-[#0089FF] hover:bg-[#0072d1] text-white rounded-lg shadow-md transition"
      >
        <FaArrowLeft /> Go Back
      </button>
    </div>
  );
}
