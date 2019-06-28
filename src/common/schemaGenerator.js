export default ({
  location,
  canonical,
  siteUrl,
  logoUrl,
  imageLink,
  pageTitle,
  title,
  pageTitleFull,
  pageDescription,
  description,
  datePublished,
  dateModified,
  author
}) => {
  const isSubPage = pageTitle && location.pathname !== "/";
  const isBlogArticle =
    pageTitle &&
    location.pathname.startsWith("/blog/") &&
    location.pathname.length > 6;
  const isScienceArticle =
    pageTitle &&
    location.pathname.startsWith("/science/") &&
    location.pathname.length > 6;

  let schema = [
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      url: canonical,
      description: description,
      logo: logoUrl,
      name: pageTitle || title,
      alternateName: pageTitleFull,
      sameAs: [
        "http://www.facebook.com",
        "http://instagram.com",
        "https://www.linkedin.com",
        "http://www.twitter.com"
      ]
    }
  ];

  if (isSubPage) {
    schema.push({
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": siteUrl,
            name: title
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": canonical,
            name: pageTitle
          }
        }
      ]
    });
  }

  if (isBlogArticle) {
    schema.push({
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "@id": canonical,
      headline: pageTitle,
      image: imageLink,
      datePublished: datePublished,
      dateModified: dateModified,
      author: {
        "@type": "Person",
        name: author
      },
      publisher: {
        "@type": "Organization",
        name: "stem",
        logo: {
          "@type": "ImageObject",
          url: logoUrl
        }
      },
      description: pageDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        id: canonical
      }
    });
  }

  if (isScienceArticle) {
    schema.push({
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "@id": canonical,
      headline: pageTitle,
      image: imageLink,
      datePublished: datePublished,
      dateModified: dateModified,
      author: {
        "@type": "Person",
        name: author
      },
      publisher: {
        "@type": "Organization",
        name: "stem",
        logo: {
          "@type": "ImageObject",
          url: logoUrl
        }
      },
      description: pageDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        id: canonical
      }
    });
  }

  return schema;
};
