import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../Layout";
import Blog from "../epics/blog/ArticleList";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Blog blogDetails={data.markdownRemark.frontmatter} />
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default BlogPage;

export const blogPageQuery = graphql`
  query BlogPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
