import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import IO from "../../../components/pose/IO";
import { UpPose } from "../../../components/pose/Poses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import color from "../../../common/styles/color";
import MEDIA from "../../../common/styles/media";

const Quiz = ({ data }) => (
  <IO>
    {({ isVisible, hasBeenVisible }) => (
      <Wrapper>
        <UpPose pose={isVisible || hasBeenVisible ? "visible" : "hidden"}>
          <Grid>
            <ImageColumn>
              <ImageWrapper>
                <ImageContainer>
                  {!data.quiz.image.childImageSharp ||
                  data.quiz.image.extension === "svg" ? (
                    <img
                      src={data.quiz.image.publicURL}
                      alt={data.quiz.title}
                    />
                  ) : (
                    <Img
                      fluid={
                        data.quiz.image
                          ? data.quiz.image.childImageSharp.fluid
                          : {}
                      }
                      alt={data.quiz.title}
                    />
                  )}
                </ImageContainer>
              </ImageWrapper>
            </ImageColumn>
            <TextColumn>
              <Subtitle>
                <FontAwesomeIcon icon={data.quiz.icon} color={color.purple} />{" "}
                {data.quiz.subtitle}
              </Subtitle>
              <Title>{data.quiz.title}</Title>
              <Description>{data.quiz.description}</Description>
              <Action>
                <a
                  href="www.google.com" // For now
                  title={data.action}
                >
                  {data.action}
                  <FontAwesomeIcon icon="arrow-right" />
                </a>
              </Action>
            </TextColumn>
          </Grid>
        </UpPose>
      </Wrapper>
    )}
  </IO>
);

Quiz.propTypes = {
  data: PropTypes.object.isRequired
};

const QuizWithQuery = props => (
  <StaticQuery
    query={graphql`
      query QuizQuery {
        homeYaml {
          quiz {
            icon
            subtitle
            title
            description
            action
            image {
              childImageSharp {
                fluid(maxWidth: 512, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
              publicURL
              extension
            }
          }
        }
      }
    `}
    render={({ homeYaml }) => <Quiz data={homeYaml} {...props} />}
  />
);

export default QuizWithQuery;

/* STYLES 
Wrapper | Grid | TextColumn | ImageColumnn
Subtitle | Title | Description
ImageWrapper | ImageContainer
Action
*/

export const Wrapper = styled.div`
  background: ${color.greyBackground};
  display: flex;
  justify-content: center;
  padding: 80px 0;
  overflow: hidden;
  z-index: 100;
`;

export const Grid = styled.div`
  max-width: 1600px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  ${MEDIA.TABLET`
    grid-template-columns: 1fr;
  `};
  grid-gap: 48px;
  margin-left: 90px;
  margin-right: 90px;
  ${MEDIA.TABLET`
    margin: 0vw 10vw;
  `};
  ${MEDIA.MOBILE`
    margin: 0vw 10vw;
  `};
`;

export const TextColumn = styled.div`
  align-items: left;
  justify-content: top;
  display: flex;
  flex-flow: column;
`;

export const ImageColumn = styled.div`
  align-items: left;
  justify-content: center;
  display: flex;
  flex-flow: column;
`;

export const Subtitle = styled.h2`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.4px;
  svg {
    margin-right: 3px;
  }
`;

export const Title = styled.h3`
  max-width: 380px;
  margin: 10px 0 18px 0;
  font-size: 46px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1.2px;
  ${MEDIA.DESKTOP`
    font-size: 36px;
    letter-spacing: -1.1px;
  `};
  ${MEDIA.MOBILE`
    font-size: 38px;
    letter-spacing: -1px;
  `};
`;

export const Description = styled.p`
  max-width: 500px;
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: -0.5px;
  ${MEDIA.DESKTOP`
    font-size: 18px;
  `};
  ${MEDIA.MOBILE`
    font-size: 17px;
  `};
`;

const ImageWrapper = styled.div`
  width: auto;
  flex-flow: column;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.figure`
  width: 500px;
  ${MEDIA.DESKTOP`
    width: 40vw;
  `};
  ${MEDIA.TABLET`
    width: 400px;
  `};
  ${MEDIA.MOBILE`
    width: 80vw;
  `};
`;

export const Action = styled.div`
  display: inline-;
  margin-top: 20px;
  font-size: 16px;
  ${MEDIA.MOBILE`
    font-size: 14px;
  `};
  i {
    color: ${color.greyLink};
    padding: 10px 10px 10px 0px;
    cursor: pointer;
  }
  a {
    color: ${color.greyLink};
    padding: 10px 10px 10px 0px;
    svg {
      font-size: 80%;
      padding-left: 2px;
      transition: 0.15s;
    }
    &:hover {
      color: ${color.grey};
      svg {
        padding-left: 4px;
      }
    }
  }
`;
