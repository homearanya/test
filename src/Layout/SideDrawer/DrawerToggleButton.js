import React from "react";
import styled from "styled-components";
const DrawerToggleButton = ({ toggleSideDrawer }) => (
  <Button onClick={toggleSideDrawer}>
    <Line />
    <Line />
    <Line />
  </Button>
);

const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: none;
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  :focus {
    outline: none;
  }
`;
const Line = styled.div`
  height: 3px;
  width: 30px;
  background-color: #9ca6ba;
`;

export default DrawerToggleButton;
