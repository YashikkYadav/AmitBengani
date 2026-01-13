import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function BlogDetails() {
  const router = useRouter();
  const { "article-title": slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const wordpressApiUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
    "https://cms.yourdomain.com/wp-json/wp/v2/posts";

  useEffect(() => {
    if (!slug) return;

    async function fetchPost() {
      try {
        // First, we need to get all posts to find the one with the matching slug
        const res = await fetch(`${wordpressApiUrl}?slug=${slug}&_embed`);

        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }

        const data = await res.json();
        console.log("Fetched post data:", data);
        if (data.length > 0) {
          setPost(data[0]);
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug, wordpressApiUrl]);

  if (router.isFallback || loading) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <span className="ml-3">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Error Loading Post
          </h1>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => router.back()}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            Post Not Found
          </h1>
          <button
            onClick={() => router.push("/blogs")}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            View All Blogs
          </button>
        </div>
      </div>
    );
  }

  // Extract image URL from Yoast SEO data if available
  const imageUrl = post._embedded["wp:featuredmedia"][0].source_url;

  // Format date
  const formattedDate = post?.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown date";

  return (
    <>
      <Head>
        <title>
          {post?.yoast_head_json?.title ||
            post?.title?.rendered ||
            seoData?.title ||
            "Blog | Dr Amit Bengani"}
        </title>
        <meta
          name="description"
          content={
            post?.yoast_head_json?.description ||
            post?.excerpt?.rendered?.replace(/(<([^>]+)>)|(&nbsp;)/gi, "") ||
            seoData?.description ||
            "Latest updates and insights from Dr. Amit Bengani, the leading general & laparoscopic surgeon in Jaipur."
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href={`https://dramitbenganijain.com/blog/${slug}`}
        />
        {post?.yoast_head_json?.og_image?.[0]?.url && (
          <>
            <meta
              property="og:image"
              content={post.yoast_head_json.og_image[0].url}
            />
            <meta
              property="og:image:width"
              content={post.yoast_head_json.og_image[0].width || "1200"}
            />
            <meta
              property="og:image:height"
              content={post.yoast_head_json.og_image[0].height || "630"}
            />
          </>
        )}
      </Head>

      <div className="max-w-full mx-auto py-12 px-6">
        <h1
          className="text-4xl font-bold text-gray-800 mb-4 animate-fadeInUp opacity-0"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <p className="text-gray-500 mb-6 animate-fadeInUp opacity-0 [animation-delay:0.1s]">
          {formattedDate}
        </p>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.title.rendered}
            className="w-full h-auto object-cover rounded-lg mb-6 animate-fadeInScale opacity-0 [animation-delay:0.2s]"
          />
        )}

        <div
          className="tailwind-exclude"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </>
  );
}
