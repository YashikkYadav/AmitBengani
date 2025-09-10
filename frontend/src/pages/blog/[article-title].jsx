import { useRouter } from "next/router";
import { blogsData } from "@/data/blogsData";

export default function BlogDetails() {
  const router = useRouter();
  const { "article-title": slug } = router.query;

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return <p className="text-center mt-20 text-gray-600">Blog not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeInUp opacity-0">{blog.title}</h1>
      <p className="text-gray-500 mb-6 animate-fadeInUp opacity-0 [animation-delay:0.1s]">{blog.date}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-lg mb-6 animate-fadeInScale opacity-0 [animation-delay:0.2s]"
      />
      <p className="text-gray-700 leading-relaxed animate-fadeInUp opacity-0 [animation-delay:0.3s]">{blog.description}</p>
     
    </div>
  );
}
