import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Location } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import Head from "../../components/Head";
import IO from "../../components/pose/IO";
import { UpPose } from "../../components/pose/Poses";
import Content from "../../components/Content";
import ShareActions from "./ShareActions";
import color from "../../common/styles/color";
import MEDIA from "../../common/styles/media";

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler;

const Article = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <Head
        pageTitle={post.frontmatter.title}
        datePublished={post.frontmatter.datePublished}
        dateModified={post.fields.dateModified}
        author={post.frontmatter.author[0].name}
        pageDescription={post.frontmatter.description}
        pageImage={
          post.frontmatter.image ? post.frontmatter.image.publicURL : null
        }
      />
      <IO>
        {({ isVisible, hasBeenVisible }) => (
          <UpPose pose={isVisible || hasBeenVisible ? "visible" : "hidden"}>
            <Container>
              <Title>
                <h2>{post.frontmatter.category}</h2>
                <h1>{post.frontmatter.title}</h1>
                <h3>{post.frontmatter.datePublished}</h3>
              </Title>
              <CoverImage
                fluid={
                  post.frontmatter.image
                    ? post.frontmatter.image.childImageSharp.fluid
                    : {}
                }
                alt={post.frontmatter.title}
              />
              <Content>{renderAst(post.htmlAst)}</Content>
              <FooterWrapper>
                <FooterContainer>
                  {post.frontmatter.author.map(({ name, position, image }) => (
                    <Author key={name}>
                      <Avatar
                        fluid={image ? image.childImageSharp.fluid : {}}
                        alt={name}
                      />
                      <div className="text">
                        {name}
                        <span>{position}</span>
                      </div>
                    </Author>
                  ))}
                </FooterContainer>
                <Actions>
                  <div>
                    <span className="disappear">
                      Share this article:&nbsp;&nbsp;
                    </span>
                    <Location>
                      {({ location }) => (
                        <ShareActions
                          url={location.href}
                          title={post.frontmatter.title}
                          description={post.frontmatter.description}
                          category={post.frontmatter.category}
                          excerpt={post.frontmatter.description}
                        />
                      )}
                    </Location>
                  </div>
                  <div>
                    <Link to="/blog" className="link">
                      Read more <span className="disappear">articles</span>{" "}
                      <FontAwesomeIcon icon="arrow-right" />
                    </Link>
                  </div>
                </Actions>
              </FooterWrapper>
            </Container>
          </UpPose>
        )}
      </IO>
    </>
  );
};

Article.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object
};

export default Article;

const Container = styled.div`
  margin: 5vw 0px 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  hr {
    border: 1px solid ${color.greyLight};
    width: 100%;
    max-width: 300px;
    margin-top: 30px;
    padding: 0;
  }
  ${MEDIA.TABLET`
    margin: 8vw 0px 40px 0px;
  `};
`;

const CoverImage = styled(Img)`
  width: 100%;
  max-width: 1000px;
  margin: 25px 0px;
  ${MEDIA.TABLET`
    margin: 20px 0px 16px 0px;
  `};
`;

const Title = styled.div`
  width: 90%;
  max-width: 600px;
  text-align: center;
  h1 {
    font-size: 52px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin: 14px 14px 14px 14px;
    line-height: 1.2;
    ${MEDIA.DESKTOP`
      font-size: 42px;
      letter-spacing: -1.1px;
    `};
    ${MEDIA.MOBILE`
      font-size: 38px;
      letter-spacing: -1px;
    `};
  }
  h2 {
    font-size: 19px;
    font-weight: 700;
    margin: 6px 0;
    letter-spacing: -0.3px;
    ${MEDIA.MOBILE`
      font-size: 18px;
      letter-spacing: -0.3px;
    `};
  }
  h3 {
    font-size: 16px;
    margin: 16px 0 10px 0;
    letter-spacing: -0.4px;
    color: ${color.blackLight};
    ${MEDIA.MOBILE`
      font-size: 14.5px;
      letter-spacing: -0.3px;
    `};
  }
`;

const FooterWrapper = styled.div`
  max-width: 660px;
  width: 100%;
  ${MEDIA.TABLET`
     max-width: calc(100% - 48px);
  `};
`;

const FooterContainer = styled.div`
  border-bottom: 2px solid ${color.greyLight};
  padding: 60px 0px 50px 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;
const Author = styled.div`
  margin: 0px 20px 0px 0px;
  width: 200px;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.4px;
  .text {
    padding-top: 4px;
    padding-left: 16px;
    span {
      padding-top: 4px;
      display: block;
      font-weight: 400;
      font-size: 75%;
    }
  }
`;

const Avatar = styled(Img)`
  width: 100%;
  border-radius: 100%;
  max-width: 44px;
  margin: 0px 0px;
`;

const Actions = styled.div`
  margin: 36px 0px 16px 0px;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  letter-spacing: -0.3px;
  .link {
    padding: 30px 0px 30px 30px;
    height: 27px;
    transition: 0.1s;
    svg {
      font-size: 12px;
      padding-left: 3px;
    }
    &:hover {
      color: ${color.grey};
    }
  }
  .disappear {
    ${MEDIA.MOBILE`
      display: none;
    `};
  }
`;
