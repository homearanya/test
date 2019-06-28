import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import color from "../common/styles/color";
import MEDIA from "../common/styles/media";

const PurpleButton = styled.a`
  background: ${color.purple};
  color: ${color.white};
  font-size: 18px;
  transition: all 0.3s ease;
  border-radius: 5px;
  border: none;
  box-shadow: 0 4px 20px 2px rgba(187, 187, 187, 0.5);
  font-family: inherit;
  font-weight: 700;
  padding: 12px;
  display: inline-block;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: darken(${color.purple}, 25%);
    box-shadow: 0 2px 6px 1px rgba(187, 187, 187, 0.5);
  }
  svg {
    font-size: 85%;
    margin: 0px 2px 0px 4px;
    transition: all 0.3s ease;
  }
  ${MEDIA.MOBILE`
    font-size: 18px;
    padding: 10px;
  `};
`;

const StartButton = ({ children }) => (
  <PurpleButton href="www.google.com" title="start">
    {children}
  </PurpleButton>
);

StartButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default StartButton;
