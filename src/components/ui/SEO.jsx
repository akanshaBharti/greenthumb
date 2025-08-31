import { useEffect } from "react";

export function SEO({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription, 
  ogImage 
}) {
  useEffect(() => {
    // Set document title
    document.title = `GreenThumb`;
    
    // Set or update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph tags
    updateMetaTag("og:title", ogTitle || title, true);
    updateMetaTag("og:description", ogDescription || description, true);
    updateMetaTag("og:type", "website", true);
    
    if (ogImage) {
      updateMetaTag("og:image", ogImage, true);
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", ogTitle || title);
    updateMetaTag("twitter:description", ogDescription || description);
    
    if (ogImage) {
      updateMetaTag("twitter:image", ogImage);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);

  return null;
}
