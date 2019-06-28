import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../Layout";
import Article from "../epics/blog/ArticlePage";

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Article data={data} />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const blogPostQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      fields {
        dateModified
      }
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
          publicURL
        }
        title
        category
        description
        datePublished(formatString: "dddd, Do MMMM YYYY")
        author {
          name
          position
          image {
            childImageSharp {
              fluid(maxWidth: 200, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
