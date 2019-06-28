import React from "react";
import styled from "styled-components";

const Overlay = ({ show, closeSideDrawer }) =>
  show ? <Container onClick={closeSideDrawer} /> : null;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9998;
`;

export default Overlay;
