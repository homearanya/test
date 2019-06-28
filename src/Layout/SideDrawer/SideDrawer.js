import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideDrawer = ({ show, closeSideDrawer }) => {
  let classSideDrawer = "";
  if (show) {
    classSideDrawer = "open";
  }

  return (
    <Wrapper className={classSideDrawer}>
      <CloseButton onClick={closeSideDrawer}>
        <FontAwesomeIcon icon="times" />
      </CloseButton>
      <Container>
        <ul>
          <li>
            <MenuItem to="/blog" activeClassName="active" title="Students">
              Students
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/blog" activeClassName="active" title="Teachers">
              Teachers
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/blog" activeClassName="active" title="Blog">
              Blog
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/blog" activeClassName="active" title="Teachers">
              Research
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/blog" activeClassName="active" title="Blog">
              Login
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/blog" activeClassName="active" title="Teachers">
              Sign Up
            </MenuItem>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default SideDrawer;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  max-width: 400px;
  z-index: 9999;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  &.open {
    transform: translateX(0);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  box-shadow: -1px 0 7px rgba(0, 0, 0, 0.5);

  ul {
    list-style: none;

    li {
      font-size: 1.7rem;
      font-weight: 500;
      color: #646f79;
      text-align: center;
      padding: 15px 0;
    }
  }
`;
const CloseButton = styled.button`
  top: 20px;
  left: 20px;
  position: absolute;
  background: none;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  color: #646f79;
  font-size: 2rem;

  :focus,
  :active {
    outline: none;
  }
`;

const MenuItem = styled(Link)``;
