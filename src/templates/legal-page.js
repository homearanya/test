import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../Layout";
import Legal from "../epics/Legal";

const LegalPage = ({ data }) => {
  return (
    <Layout>
      <Legal data={data} />
    </Layout>
  );
};

LegalPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default LegalPage;

export const legalPageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      fields {
        dateModified
      }
      frontmatter {
        title
        description
      }
    }
  }
`;
