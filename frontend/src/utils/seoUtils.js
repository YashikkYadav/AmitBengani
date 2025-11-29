import { metaData } from "@/data/metaTitle";

/**
 * Get SEO metadata for a given URL path
 * @param {string} pathname - The URL path (e.g., "/treatments/piles")
 * @returns {object|null} - The metadata object or null if not found
 */
export function getSEOMetadata(pathname) {
  // Normalize the pathname by removing trailing slashes
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  
  // Handle homepage case
  if (normalizedPath === "/") {
    return metaData.find(item => item.url === "https://dramitbenganijain.com/") || null;
  }
  
  // Look for exact match
  const exactMatch = metaData.find(item => {
    // Extract path from URL
    try {
      const urlObj = new URL(item.url);
      const itemPath = urlObj.pathname.replace(/\/$/, "") || "/";
      return itemPath === normalizedPath;
    } catch (e) {
      // If URL parsing fails, try direct comparison
      const itemPath = item.url.replace("https://dramitbenganijain.com", "").replace(/\/$/, "") || "/";
      return itemPath === normalizedPath;
    }
  });
  
  if (exactMatch) {
    return exactMatch;
  }
  
  // For dynamic routes, try to find a pattern match
  // This is for cases like /treatments/[slug] or /surgery/[slug]/[subslug]
  const pathSegments = normalizedPath.split("/").filter(Boolean);
  
  if (pathSegments.length > 0) {
    // Try to match by category
    const categoryMatch = metaData.find(item => {
      try {
        const urlObj = new URL(item.url);
        const itemPathSegments = urlObj.pathname.split("/").filter(Boolean);
        
        // Check if the first segments match (e.g., both start with "treatments")
        if (pathSegments[0] === itemPathSegments[0]) {
          // For two-segment paths like /treatments/piles
          if (pathSegments.length === 2 && itemPathSegments.length === 2) {
            return true;
          }
          // For three-segment paths like /surgery/category/slug
          if (pathSegments.length === 3 && itemPathSegments.length === 3) {
            return pathSegments[0] === itemPathSegments[0] && pathSegments[1] === itemPathSegments[1];
          }
        }
      } catch (e) {
        // Fallback to string matching
        const itemPath = item.url.replace("https://dramitbenganijain.com", "");
        const itemPathSegments = itemPath.split("/").filter(Boolean);
        
        if (pathSegments[0] === itemPathSegments[0]) {
          if (pathSegments.length === 2 && itemPathSegments.length === 2) {
            return true;
          }
          if (pathSegments.length === 3 && itemPathSegments.length === 3) {
            return pathSegments[0] === itemPathSegments[0] && pathSegments[1] === itemPathSegments[1];
          }
        }
      }
      return false;
    });
    
    return categoryMatch || null;
  }
  
  return null;
}

/**
 * Get fallback SEO metadata for dynamic pages
 * @param {string} basePath - The base path (e.g., "/treatments", "/surgeries")
 * @returns {object|null} - The metadata object or null if not found
 */
export function getFallbackSEOMetadata(basePath) {
  const fallbackUrls = {
    "/treatments": "https://dramitbenganijain.com/treatments/gallstones",
    "/surgeries": "https://dramitbenganijain.com/surgeries/gallbladder-surgeries",
    "/surgery": "https://dramitbenganijain.com/surgeries/gallbladder-surgeries",
    "/about": "https://dramitbenganijain.com/about"
  };
  
  const fallbackUrl = fallbackUrls[basePath];
  if (fallbackUrl) {
    return metaData.find(item => item.url === fallbackUrl) || null;
  }
  
  return null;
}