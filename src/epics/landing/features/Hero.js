import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import IO from "../../../components/pose/IO";
import StartButton from "../../../components/StartButton";
import color from "../../../common/styles/color";
import MEDIA from "../../../common/styles/media";
import { LeftPose, RightPose } from "../../../components/pose/Poses";

const Hero = ({ data }) => {
  return (
    <IO>
      {({ isVisible, hasBeenVisible }) => (
        <Wrapper>
          <Container>
            <LeftPose pose={isVisible || hasBeenVisible ? "visible" : "hidden"}>
              <Text>
                <Title>{data.header.title}</Title>
                <Highlight> {data.header.highlight} </Highlight>
                <Description>{data.header.description}</Description>
                <StartButton>SIGN UP</StartButton>
                <Comment>{data.header.comment}</Comment>
              </Text>
            </LeftPose>
            <RightPose
              pose={isVisible || hasBeenVisible ? "visible" : "hidden"}
            >
              <Figure>
                {!data.header.image.childImageSharp ||
                data.header.image.extension === "svg" ? (
                  <img
                    src={data.header.image.publicURL}
                    alt={data.header.subtitle}
                  />
                ) : (
                  <Img
                    fluid={
                      data.header.image
                        ? data.header.image.childImageSharp.fluid
                        : {}
                    }
                    alt={data.header.subtitle}
                  />
                )}
              </Figure>
            </RightPose>
          </Container>
        </Wrapper>
      )}
    </IO>
  );
};

const HeroWithQuery = props => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        homeYaml {
          header {
            title
            highlight
            description
            action
            comment
            image {
              childImageSharp {
                fluid(maxWidth: 1500, quality: 95) {
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
    render={({ homeYaml }) => <Hero data={homeYaml} {...props} />}
  />
);

export default HeroWithQuery;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  min-height: 600px;
  max-height: 65px;
  height: 80vh;
  justify-content: space-between;
  grid-template-columns: 550px 3fr;
  grid-gap: 4rem;
  overflow: hidden;
  margin-bottom: -100px;
  ${MEDIA.MOBILE`
    grid-template-columns: 100%;
    height: 500px;
    min-height: 500px;
  `};
`;

const Text = styled.div`
  margin: 14% 10% 10% 18%;
  ${MEDIA.TABLET`
    margin: 10vw 10vw 10vw 12vw;
  `};
  ${MEDIA.MOBILE`
    margin: 12vw 10vw 10vw 10vw;
  `};
`;
const Title = styled.h1`
  color: ${color.black};
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 1.1;
  ${MEDIA.MOBILE`
    font-size: 65px;
    letter-spacing: -2.8px;
  `};
`;

const Highlight = styled.h1`
  color: ${color.purple};
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 1.1;
  ${MEDIA.MOBILE`
    font-size: 65px;
    letter-spacing: -2.8px;
  `};
`;

const Description = styled.div`
  margin: 28px 0px;
  line-height: 1.6;
  letter-spacing: -0.7px;
  font-size: 22px;
  ${MEDIA.MOBILE`
    font-size: 18px;
    letter-spacing: -0.6px;
  `};
`;
const Comment = styled.p`
  margin-top: 30px;
  font-size: 15px;
  color: ${color.blackLight};
  letter-spacing: -0.4px;
  ${MEDIA.MOBILE`
    font-size: 13px;
    letter-spacing: -0.3px;
  `};
`;

const Figure = styled.figure`
  width: 130%;
  min-width: 980px;
  margin-top: 20px;
  ${MEDIA.TABLET`
    display: none;
  `};
`;
