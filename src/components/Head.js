import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Location } from "@reach/router";
import schemaGenerator from "../common/schemaGenerator";

const Head = ({
  siteUrl,
  title,
  titleShort,
  description,
  location,
  canonical = siteUrl + (location.pathname || ""),
  logoUrl,
  pageTitle,
  pageTitleFull = pageTitle ? `${pageTitle} | ${titleShort}` : title,
  pageDescription,
  pageImage,
  imageUrl,
  imageLink = pageImage ? `${siteUrl}${pageImage}` : imageUrl,
  author,
  datePublished,
  dateModified,
  social
}) => (
  <Helmet>
    <html lang="en" />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta
      content="width=device-width,initial-scale=1.0,user-scalable=yes"
      name="viewport"
    />

    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />

    <meta content={title} name="apple-mobile-web-app-title" />
    <meta content={pageTitleFull} property="og:title" />
    <meta content={pageTitleFull} name="twitter:title" />
    <title>{pageTitleFull}</title>

    <meta content={pageDescription || description} name="description" />
    <meta content={pageDescription || description} property="og:description" />
    <meta content={pageDescription || description} name="twitter:description" />

    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta
      content="black-translucent"
      name="apple-mobile-web-app-status-bar-style"
    />
    <meta content={title} name="application-name" />

    <meta content="website" property="og:type" />
    <meta content={title} property="og:site_name" />
    <meta content={social.fbAppId} property="fb:app_id" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content={`@${social.twitter}`} name="twitter:site" />
    <meta content={`@${social.twitter}`} name="twitter:creator" />
    <meta content={pageTitleFull} name="twitter:title" />
    <meta content={canonical} property="og:url" />
    <meta content={canonical} name="twitter:url" />
    <link rel="canonical" href={canonical} />

    <meta
      content={imageLink || `${siteUrl}/coverPhoto.jpg`}
      property="og:image"
    />
    <meta content="1024" property="og:image:width" />
    <meta content="512" property="og:image:height" />
    <meta
      content={imageLink || `${siteUrl}/coverPhoto.jpg`}
      name="twitter:image"
    />
    <meta content="1024" name="twitter:image:width" />
    <meta content="512" name="twitter:image:height" />
    <meta
      content={imageLink || `${siteUrl}/coverPhoto.jpg`}
      property="og:image"
    />
    <meta content="1024" property="og:image:width" />
    <meta content="512" property="og:image:height" />
    <meta property="og:image:alt" content={pageTitleFull} />

    <meta name="msvalidate.01" content="4A750ADAB413BA953FFCB27F090A6661" />
    <meta content="/icons/mstile-70x70.png" name="msapplication-square70x70" />
    <meta
      content="/icons/mstile-144x144.png"
      name="msapplication-square144x144"
    />
    <meta
      content="/icons/mstile-150x150.png"
      name="msapplication-square150x150"
    />
    <meta
      content="/icons/mstile-310x150.png"
      name="msapplication-wide310x150"
    />
    <meta
      content="/icons/mstile-310x310.png"
      name="msapplication-square310x310"
    />

    <link href="/manifest.json" rel="manifest" />

    <link
      href="/icons/favicon-32x32.png"
      rel="icon"
      sizes="32x32"
      type="image/png"
    />
    <link
      href="/icons/favicon-16x16.png"
      rel="icon"
      sizes="16x16"
      type="image/png"
    />

    <script type="application/ld+json">
      {JSON.stringify(
        schemaGenerator({
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
        })
      )}
    </script>
  </Helmet>
);

Head.propTypes = {
  siteUrl: PropTypes.string,
  title: PropTypes.string,
  titleShort: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.object.isRequired,
  canonical: PropTypes.string,
  logoUrl: PropTypes.string,
  pageTitle: PropTypes.string,
  pageTitleFull: PropTypes.string,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
  imageUrl: PropTypes.string,
  imageLink: PropTypes.string,
  author: PropTypes.string,
  datePublised: PropTypes.string,
  dateModified: PropTypes.string,
  social: PropTypes.objectOf(PropTypes.string)
};

const HeadWithQuery = props => (
  <StaticQuery
    query={graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            titleShort
            description
            siteUrl
            imageUrl
            logoUrl
            social {
              twitter
              fbAppId
            }
          }
        }
      }
    `}
    render={data => (
      <Location>
        {({ location }) => (
          <Head {...data.site.siteMetadata} {...props} location={location} />
        )}
      </Location>
    )}
  />
);

export default HeadWithQuery;
