import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import dateformat from "dateformat";

import Head from "../../components/Head";
import Content from "../../components/Content";
import IO from "../../components/pose/IO";
import { UpPose } from "../../components/pose/Poses";
import MEDIA from "../../common/styles/media";
import color from "../../common/styles/color";

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler;

const Legal = ({
  data: {
    markdownRemark: { frontmatter, htmlAst, fields }
  }
}) => {
  return (
    <>
      <Head
        pageTitle={frontmatter.title}
        pageDescription={frontmatter.description}
      />
      <IO>
        {({ isVisible, hasBeenVisible }) => (
          <UpPose pose={isVisible || hasBeenVisible ? "visible" : "hidden"}>
            <Wrapper>
              <Document>
                <Title>{frontmatter.title}</Title>
                <Links>
                  See also&nbsp;&nbsp;
                  <Link to="/terms" activeClassName="active">
                    Terms & Conditions
                  </Link>
                  <Link to="/privacy-policy" activeClassName="active">
                    Privacy Policy
                  </Link>
                  <Link to="/gdpr" activeClassName="active">
                    GDPR
                  </Link>
                  <Link to="/cookies-policy" activeClassName="active">
                    Cookies Policy
                  </Link>
                </Links>

                <Content>{renderAst(htmlAst)}</Content>

                <hr id="contact" />
                <Date>
                  Last updated:{" "}
                  {dateformat(fields.dataModified, "ddd mmmmm yyyy")}{" "}
                </Date>
                <Text>
                  <p>
                    Have any questions? Send us an email at{" "}
                    <a href="mailto:studeostem@gmail.com">
                      studeostem@gmail.com
                    </a>{" "}
                    or write us at:
                  </p>
                  <p>
                    Compass Ltd
                    <br />
                    Compass
                    <br />
                    London
                    <br />
                    United Kingdom
                  </p>
                </Text>
              </Document>
            </Wrapper>
          </UpPose>
        )}
      </IO>
    </>
  );
};

Legal.propTypes = {
  data: PropTypes.object.isRequired
};

export default Legal;

const Wrapper = styled.div`
  margin: 8vw 14px 10vw 14px;
  display: flex;
  justify-content: center;
`;

const Document = styled.div`
  text-align: left;
  max-width: 763px;
  hr {
    border: 1px solid ${color.greyLight};
    margin: 40px 0;
  }
`;

const Title = styled.h1`
  margin: 14px 14px 4px 11px;
  text-align: left;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1.6px;
  ${MEDIA.DESKTOP`
    font-size: 42px;
    letter-spacing: -1.1px;
  `};
  ${MEDIA.MOBILE`
    font-size: 38px;
    letter-spacing: -1px;
  `};
`;

const Links = styled.h3`
  color: ${color.grey};
  font-size: 14px;
  line-height: 1.8;
  margin: 0px 14px 18px 14px;
  a {
    padding-right: 8px;
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }
  a.active {
    display: none;
  }
  ${MEDIA.MOBILE`
    font-size: 12px;
    a {
      display:;
    }
  `};
`;

const Date = styled.h3`
  color: ${color.grey};
  margin: 0px 14px 18px 14px;
  font-size: 14px;
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 1.6;
  ${MEDIA.MOBILE`
    font-size: 14px;
  `};
  h2 {
    margin: 40px 14px 0px 14px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    ${MEDIA.MOBILE`
      font-size: 12px;
    `};
  }
  p,
  ul,
  ol {
    margin: 14px 14px 18px 14px;
    letter-spacing: -0.2px;
  }
  li {
    margin-left: 20px;
  }
  a {
    text-decoration: underline;
  }
  quote {
    background: ${color.greyLight};
    margin: 30px 0px;
    border-radius: 4px;
    padding: 14px 0vw 14px 0vw;
    h2 {
      margin-top: 0px;
      color: ${color.grey};
    }
    p {
      margin-top: 6px;
      margin-bottom: 0px;
    }
  }
`;
