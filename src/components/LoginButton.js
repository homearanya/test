import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import color from "../common/styles/color";
import MEDIA from "../common/styles/media";

const LoginButton = ({ children }) => (
  <PurpleOutlineButton href="www.google.com" title="login">
    {children}
  </PurpleOutlineButton>
);

LoginButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoginButton;

const PurpleOutlineButton = styled.a`
  background: transparent;
  color: ${color.purple};
  font-size: 18px;
  transition: all 0.3s ease;
  border-radius: 5px;
  border: ${color.purple} 2px;
  box-shadow: none;
  font-family: inherit;
  font-weight: 700;
  padding: 12px;
  display: inline-block;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${color.purple};
    color: ${color.white};
  }
  ${MEDIA.MOBILE`
    font-size: 18px;
    padding: 0.625rem;
  `};
`;
