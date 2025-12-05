import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }) => {
  // Extract image URL from Yoast data or featured media
  const imageUrl =
    post?.yoast_head_json?.og_image?.[0]?.url ||
    post?.jetpack_featured_media_url ||
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/dummyblog.jpg";

  // Format the date safely
  const formattedDate = post?.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No Date";

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-56 w-full bg-gray-100">
        {imageUrl && imageUrl !== "/dummyblog.jpg" ? (
          <Image
            src={imageUrl}
            alt={post?.title?.rendered || "Blog Image"}
            fill
            className="object-cover"
            unoptimized
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
            onError={(e) => {
              // Fallback to default image on error
              e.target.src = "/dummyblog.jpg";
            }}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <span>No Image Available</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Date */}
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
          {formattedDate}
        </span>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="group">
          <h3
            className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2"
            dangerouslySetInnerHTML={{
              __html: post?.title?.rendered || "Untitled",
            }}
          />
        </Link>

        {/* Excerpt */}
        <div
          className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow"
          dangerouslySetInnerHTML={{
            __html:
              post?.excerpt?.rendered?.replace(/(<([^>]+)>)|(&nbsp;)/gi, "") ||
              "No description available",
          }}
        />

        {/* Read More Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mt-auto"
        >
          Read full article
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default function BlogGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Posts Found
            </h3>
            <p className="text-gray-500">
              Check back later for new blog posts.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
