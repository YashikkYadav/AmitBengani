import { useEffect, useState } from "react";
import BlogGrid from "@/components/BlogGrid";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 3;
  const wordpressApiUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
    "https://cms.yourdomain.com/wp-json/wp/v2/posts";

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Fetch posts for current page

        const res = await fetch(
          `${wordpressApiUrl}?page=${currentPage}&per_page=${postsPerPage}&_embed`,
          {
            next: { revalidate: 60 },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }

        // Get total posts from headers
        const totalPostsHeader = res.headers.get("X-WP-Total");
        const totalPagesHeader = res.headers.get("X-WP-TotalPages");

        setTotalPosts(totalPostsHeader ? parseInt(totalPostsHeader, 10) : 0);
        setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1);

        const data = await res.json();
        console.log("Fetched posts:", data);
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage, wordpressApiUrl]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setLoading(true);
      setCurrentPage(newPage);
    }
  };

  if (loading && posts.length === 0) {
    return (
      <div className="bg-gray-50 py-12 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full px-6">
          <div className="flex flex-col items-center justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 py-12 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full px-6">
          <div className="flex flex-col items-center justify-center py-24">
            <div className="text-red-500 text-2xl mb-4">
              Error loading posts
            </div>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full px-6">
        <div className="mb-12 text-center">
          <p className="text-[#0089FF] font-semibold uppercase tracking-wide">
            News & Stories
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            News for you, stuff that matters
          </h1>
        </div>
        <BlogGrid posts={posts} />

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-full ${
                      currentPage === pageNum
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Posts counter */}
        <div className="text-center text-gray-600 mt-8">
          Showing {Math.min((currentPage - 1) * postsPerPage + 1, totalPosts)}-
          {Math.min(currentPage * postsPerPage, totalPosts)} of {totalPosts}{" "}
          posts
        </div>
      </div>
    </div>
  );
}
