import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import IO from "../../../components/pose/IO";
import { UpPose } from "../../../components/pose/Poses";
import color from "../../../common/styles/color";
import MEDIA from "../../../common/styles/media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StartButton from "../../../components/StartButton";

const Research = ({ data }) => (
  <IO>
    {({ isVisible, hasBeenVisible }) => (
      <Container>
        <UpPose pose={isVisible || hasBeenVisible ? "visible" : "hidden"}>
          <Grid>
            <Column>
              <Subtitle>
                <FontAwesomeIcon
                  icon={data.research.icon}
                  color={color.green}
                />{" "}
                {data.research.subtitle}
              </Subtitle>
              <Title>{data.research.title}</Title>
              <Description>{data.research.description}</Description>
              <ButtonContainer>
                <StartButton>Start learning!</StartButton>
              </ButtonContainer>
            </Column>
          </Grid>
        </UpPose>
      </Container>
    )}
  </IO>
);

Research.propTypes = {
  data: PropTypes.object.isRequired
};

const ResearchWithQuery = props => (
  <StaticQuery
    query={graphql`
      query ResearchQuery {
        homeYaml {
          research {
            icon
            subtitle
            title
            description
          }
        }
      }
    `}
    render={({ homeYaml }) => <Research data={homeYaml} {...props} />}
  />
);

export default ResearchWithQuery;

/* STYLES 
Container | Grid | Column | ButtonContainer
*/

const Container = styled.div`
  background: ${color.greyBackground};
  justify-content: center;
  display: flex;
  padding: 20px 0 80px 0;
  overflow: hidden;
  z-index: 1000;
  ${MEDIA.TABLET`
    padding: 50px 0 80px 0;
  `};
`;

const Grid = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  width: 100%;
  max-width: 1200px;
`;

const Column = styled.div`
  text-align: center;
  align-items: center;
  margin-left: 10vw;
  margin-right: 10vw;
  display: flex;
  flex-flow: column;
  h2 {
    margin-bottom: 25px;
  }
  a {
    margin-top: 40px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
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
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1.2px;
  ${MEDIA.DESKTOP`
    font-size: 26px;
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
