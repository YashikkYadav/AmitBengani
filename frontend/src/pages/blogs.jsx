import Link from "next/link";
import { blogsData } from "@/data/blogsData";
import { FaArrowRight } from "react-icons/fa";

export default function Blogs() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <div className="mb-12">
          <p className="text-[#0089FF] font-semibold uppercase tracking-wide">
            News & Stories
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            News for you, stuff that matters
          </h1>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, idx) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className={`group bg-white rounded-xl shadow-md overflow-hidden transition-all border border-transparent block transform hover:-translate-y-2 hover:shadow-2xl duration-300 animate-fadeInUp`}
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#0089FF] text-white text-center px-3 py-1 rounded-md shadow-lg animate-fadeIn">
                  <p className="text-sm font-semibold">{blog.date}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#0089FF] transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 animate-fadeIn delay-200">
                  {blog.description}
                </p>
                <div className="text-[#0089FF] flex items-center text-sm font-medium transition-colors duration-300 group-hover:text-[#005FCC]">
                  Read more <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Add keyframes for fadeInUp animation */
<style jsx global>{`
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp {
  animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 1s ease;
}
`}</style>
