import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import IO from "../../../components/pose/IO";
import { UpPose } from "../../../components/pose/Poses";
import color from "../../../common/styles/color";
import MEDIA from "../../../common/styles/media";

const Features = ({ data }) => (
  <IO>
    {({ isVisible, hasBeenVisible }) => (
      <Wrapper>
        <UpPose pose={isVisible || hasBeenVisible ? "visible" : "hidden"}>
          <Grid>
            {data.features.map(feature => (
              <TextColumn>
                <Subtitle color={color[feature.color]}>
                  {feature.subtitle}
                </Subtitle>
                <Title>{feature.title}</Title>
                <Description>{feature.description}</Description>
              </TextColumn>
            ))}
          </Grid>
        </UpPose>
      </Wrapper>
    )}
  </IO>
);

Features.propTypes = {
  data: PropTypes.object.isRequired
};

const FeaturesWithQuery = props => (
  <StaticQuery
    query={graphql`
      query FeatureQuery {
        homeYaml {
          features {
            subtitle
            color
            title
            description
          }
        }
      }
    `}
    render={({ homeYaml }) => <Features data={homeYaml} {...props} />}
  />
);

export default FeaturesWithQuery;

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
  grid-template-columns: 1fr 1fr 1fr 1fr;
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

export const Subtitle = styled.h2`
  color: ${props => props.color};
  margin: 10px 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.4px;
  svg {
    margin-right: 3px;
  }
`;

export const Title = styled.h3`
  max-width: 380px;
  margin: 10px 0 18px 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1.2px;
  ${MEDIA.DESKTOP`
    font-size: 20px;
    letter-spacing: -1.1px;
  `};
  ${MEDIA.MOBILE`
    font-size: 28px;
    letter-spacing: -1px;
  `};
`;

export const Description = styled.p`
  max-width: 200px;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: -0.5px;
  ${MEDIA.DESKTOP`
    font-size: 18px;
  `};
  ${MEDIA.MOBILE`
    font-size: 17px;
  `};
`;
