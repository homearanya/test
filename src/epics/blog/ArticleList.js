import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { UpPose } from "../../components/pose/Poses";
import Head from "../../components/Head";
import ShareActions from "./ShareActions";
import color from "../../common/styles/color";
import MEDIA from "../../common/styles/media";
import IO from "../../components/pose/IO";

const Blog = ({ blogDetails }) => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___datePublished] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                category
                description
                datePublished(formatString: "MMMM Do, YYYY")
                image {
                  childImageSharp {
                    fluid(maxHeight: 400, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              fields {
                slug
                readingTime {
                  minutes
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Head
          title={blogDetails.title}
          pageDescription={blogDetails.description}
        />
        <IO>
          {({ isVisible, hasBeenVisible }) => (
            <UpPose pose={isVisible || hasBeenVisible ? "visible" : "hidden"}>
              <Wrapper>
                <Title>
                  <strong>Studeo Blog</strong>
                </Title>
                <Subtitle>{blogDetails.title}</Subtitle>

                <CardGrid>
                  {data.allMarkdownRemark.edges.map(
                    ({ node: { id, frontmatter, fields } }, i) => (
                      <FlexBox key={id} className={"key" + i}>
                        {/* <Card className={styles.Card} to={fields.slug}> */}
                        <Card to={fields.slug}>
                          <Img
                            fluid={
                              frontmatter.image
                                ? frontmatter.image.childImageSharp.fluid
                                : {}
                            }
                            alt={frontmatter.title}
                          />
                          <h4>{frontmatter.category}</h4>
                          <h3>{frontmatter.title} </h3>
                          <p>{frontmatter.description}</p>
                          <span>
                            <h5>{frontmatter.datePublished}</h5>
                            {/* <h5 className={styles.Time}> */}
                            <h5>
                              <FontAwesomeIcon icon="book-open" />
                              {Math.round(fields.readingTime.minutes)} min
                            </h5>
                          </span>
                        </Card>
                      </FlexBox>
                    )
                  )}
                </CardGrid>
                <SocialWrapper>
                  <SocialText>Don&#8217;t miss a post</SocialText>
                  <ShareActions>color={color.blackLight}</ShareActions>
                </SocialWrapper>
              </Wrapper>
            </UpPose>
          )}
        </IO>
      </>
    )}
  />
);

Blog.propTypes = {
  blogDetails: PropTypes.object.isRequired
};

export default Blog;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
`;
const Title = styled.h1`
  letter-spacing: -1.4px;
  text-align: center;
  font-size: 50px;
  color: ${color.blackLight};
  margin: 60px 40px 0px 40px;
`;
const Subtitle = styled.h2`
  color: ${color.blackLight};
  margin: 10px 8px 60px 8px;
  font-size: 18px;
  letter-spacing: 6px;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  ${MEDIA.TABLET`
    margin: 10px 8px 10px 8px;
  `};
`;
const Card = styled(Link)`
  border: 1px solid ${color.greyLight};
  box-shadow: 0px 15px 92px 0px rgba(0, 37, 67, 0.06);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  flex-grow: 1;
  h3 {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -1px;
    padding: 0px 22px;
    line-height: 1.2;
  }
  h4 {
    display: relative;
    font-size: 14px;
    margin-bottom: 6px;
    margin: 22px 0px 8px 0px;
    font-weight: 700;
    color: ${color.black};
    letter-spacing: -0.3px;
    padding: 0px 23px;
  }
  p {
    flex-grow: 1;
    font-size: 15px;
    line-height: 1.4;
    padding: 0px 22px;
    margin-top: 6px;
    color: ${color.grey};
    letter-spacing: -0.2px;
  }
  span {
    display: flex;
    justify-content: space-between;
    padding: 14px 22px 22px 22px;
  }
  h5 {
    font-size: 13px;
    color: ${color.blackLight};
    letter-spacing: -0.2px;
    transition: 0.5s;
    svg {
      font-size: 12px;
      display: absolute;
      margin: 1px 4px;
    }
  }
  &:hover {
    transform: translate3D(0, -1px, 0) scale(1.02);
    box-shadow: 0px 15px 114px 0px rgba(0, 37, 67, 0.14);
    z-index: 1000;
    border: 1px solid #fff;
    .pink {
      color: ${color.grey};
    }
  }
`;
const CardGrid = styled.div`
  margin: 60px 0px 80px 0px;
  width: 100%;
  display: grid;
  max-width: 1100px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(260px, 420px));
  .key0 {
    grid-column-end: span 2;
    p {
      display: none;
    }
    ${MEDIA.TABLET`
    p {
      display: inline;
    }
    `};
  }
  grid-gap: 2em;
  ${MEDIA.LARGE`
    max-width: 700px;
  `};
  ${MEDIA.TABLET`
    max-width: 350px;
    width: 90%;
    grid-gap: 1.5em;
    .key0 {
      grid-column-end: auto;
    }
  `};
`;
const FlexBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const SocialText = styled.h5`
  font-weight: 700;
  letter-spacing: -0.2px;
  color: ${color.blackLight};
`;
const SocialWrapper = styled.div`
  margin-bottom: 80px;
  text-align: center;
`;
