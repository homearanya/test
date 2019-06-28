import React from "react";
import styled from "styled-components";
import { StaticQuery, Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/betalogo.svg";

import IO from "../components/pose/IO";
import MEDIA from "../common/styles/media";
import color from "../common/styles/color";
import { UpPose } from "../components/pose/Poses";
import StartButton from "../components/StartButton";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        homeYaml {
          socials {
            icon
            name
            link
            color
          }
        }
      }
    `}
    render={({ homeYaml: data }) => {
      return (
        <IO>
          {({ isVisible, hasBeenVisible }) => (
            <UpPose pose={isVisible || hasBeenVisible ? "visible" : "hidden"}>
              <Wrapper>
                <Container>
                  <Box>
                    <Column>
                      <div>
                        <Link to="/" id="Return Home" title="Return Home">
                          <span>
                            <img src={logo} alt="logo" />
                          </span>
                        </Link>
                        <p>
                          <FontAwesomeIcon
                            icon={["far", "copyright"]}
                            fixedWidth
                          />{" "}
                          2019 STUDEO
                        </p>
                        <p>
                          <Link to="/terms" title="Terms">
                            Terms
                          </Link>{" "}
                          &{" "}
                          <Link to="/privacy-policy" title="Privacy Policy">
                            Privacy
                          </Link>
                        </p>
                      </div>
                    </Column>
                    <Column>
                      <h4>Learn more</h4>
                      <ul>
                        <li>
                          <Link to="/blog" title="Blog">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" title="Teachers">
                            Teachers
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" title="Students">
                            Students
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" title="Your school">
                            Your school
                          </Link>
                        </li>
                      </ul>
                    </Column>
                    <Column>
                      <h4>Courses</h4>
                      <ul>
                        <li>
                          <Link to="/blog" title="Biology">
                            Biology
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" title="Chemistry">
                            Chemistry
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" title="Physics">
                            Physics
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" title="Maths">
                            Maths
                          </Link>
                        </li>
                      </ul>
                    </Column>
                    <Column>
                      <h4>Resources</h4>
                      <ul>
                        <li>
                          <Link to="/blog" title="Blog">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" title="Blog">
                            Science articles
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="www.google.com"
                            title="Help" /* this will be an extenal link out to */
                          >
                            Help & FAQs
                          </Link>
                        </li>
                      </ul>
                    </Column>
                    <Column>
                      <h4>Follow us</h4>
                      <ul>
                        <li>
                          {data.socials.map(social => (
                            <SocialButtons
                              target="_blank"
                              rel="noopener noreferrer"
                              href={social.link}
                              title={social.name}
                              key={social.name}
                              color={social.color}
                            >
                              <FontAwesomeIcon
                                icon={["fab", social.icon]}
                                fixedWidth
                              />
                              {social.name}
                            </SocialButtons>
                          ))}
                        </li>
                      </ul>
                    </Column>
                    <Column>
                      <h4>Community</h4>
                      <ul>
                        <li>
                          <Link to="/blog" title="Advisary board">
                            Advisory board
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" title="Research">
                            Research
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" title="Community">
                            Community
                          </Link>
                        </li>
                      </ul>
                    </Column>
                  </Box>
                  <SignUpBox>
                    <div>
                      <h3>STUDEO STEM</h3>
                      <p>The smart way to learn science!</p>
                    </div>
                    <StartButton>Sign up now</StartButton>
                  </SignUpBox>
                </Container>
              </Wrapper>
            </UpPose>
          )}
        </IO>
      );
    }}
  />
);

export default Footer;

export const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  box-shadow: inset 0px 0px 50px 0px rgba(241, 243, 245, 1);
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  ${MEDIA.TABLET`
    max-width: 560px;
  `};
`;

export const Box = styled.div`
  color: ${color.black};
  display: grid;
  grid-template-columns: 105px 105px 105px 105px 105px;
  text-align: left;
  font-size: 14px;
  letter-spacing: -0.3px;
  ${MEDIA.TABLET`
    grid-template-columns: 105px 105px 105px;
    padding: 3.75rem 2.5rem 1.25rem 2.5rem;
  `};
  border-bottom: 2px solid ${color.greyLight};
  padding: 5rem 2.5rem 3.75rem 2.5rem;
  justify-content: space-between;
  h4 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
    padding: 0px 6px 0px 0px;
  }
  ul {
    list-style: none;
    color: ${color.grey};
  }
  ul a {
    text-decoration: none;
    margin: 0;
    transition: 0.15s;
    display: block;
    padding: 0px 6px 0px 0px;
    line-height: 1.6;
    font-weight: 400;
    font-size: 14px;
    svg {
      margin-right: 1px;
      font-size: 94%;
    }
    &:hover {
      color: ${color.black};
    }
  }
`;

export const SignUpBox = styled.div`
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  justify-content: space-between;
  justify-items: flex-start;
  display: grid;
  grid-template-columns: 300px 130px;
  grid-gap: 2.5rem;
  ${MEDIA.TABLET`
    grid-template-columns: 1fr;
    justify-items: center;
  `};
  h3 {
    color: ${color.black};
    margin-bottom: 2px;
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.3px;
  }
  p {
    color: ${color.grey};
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.3px;
  }
  a {
    padding: 0.625rem;
    border-radius: 11px;
    font-size: 15px;
  }
`;

const Column = styled.div`
  text-align: left;
  justify-self: left;
  align-self: center;
  ${MEDIA.TABLET`
    margin-bottom: 40px;
  `};
  span svg {
    padding-bottom: 8px;
  }
  p {
    color: ${color.grey};
    line-height: 1.6;
    font-size: 11px;
    letter-spacing: -0.2px;
    svg {
      font-size: 80%;
    }
    a {
      text-decoration: underline;
      transition: 0.15s;
      &:hover {
        color: ${color.black};
      }
    }
  }
`;
const SocialButtons = styled.a`
  text-transform: lowercase;
  svg {
    vertical-align: -8%;
  }
  &:hover {
    color: ${({ color }) => color || "grey"} !important;
  }
`;
