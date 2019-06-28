import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import MEDIA from "../common/styles/media";
import color from "../common/styles/color";
import StartButton from "../components/StartButton";
import LoginButton from "../components/LoginButton";
import logo from "../assets/betalogo.svg";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

/*
NEED TO ADD SIDE DRAWER FOR MOBILE MENU (see Zeplin):

Desktop/Tablet
STUDEO STEM       Blog | Students | Teachers | [Login] | [Sign up]

Mobile 
STUDEO       [Login] | [Sign up] | ** HAMBURGER ICON **

Mobile Drawer:
Blog
Students
Teachers
Login
Sign up

*/

const Menu = ({ data, toggleSideDrawer, visible, topPage }) => {
  let headerClassName = "";
  if (!visible) {
    headerClassName = "hide";
  } else if (!topPage) {
    headerClassName = "styledMenu";
  }
  return (
    <Header className={headerClassName}>
      <Navbar>
        <Logo>
          <Link to="/" title="Home">
            <img src={logo} alt="logo" />
          </Link>
        </Logo>

        <Spacer />

        <MenuItems>
          <li>
            <MenuItem to="/blog" activeClassName="active" title="Blog">
              Blog
            </MenuItem>
          </li>
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
            <LogIn
              href={data.routes.login}
              rel="noopener noreferrer"
              title="Log in"
            >
              <LoginButton>Login</LoginButton>
            </LogIn>
          </li>
          <li>
            <SignUp
              href={data.routes.signup}
              rel="noopener noreferrer"
              title="Sign up"
            >
              <StartButton>Sign up</StartButton>
            </SignUp>
          </li>
        </MenuItems>
        <HamburgerMenu>
          <DrawerToggleButton toggleSideDrawer={toggleSideDrawer} />
        </HamburgerMenu>
      </Navbar>
    </Header>
  );
};

Menu.propTypes = {
  data: PropTypes.object.isRequired
};

const MenuQuery = props => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        menuYaml {
          routes {
            home
            login
            signup
          }
          menu {
            name
            to
            desktop
          }
        }
      }
    `}
    render={({ menuYaml }) => <Menu data={menuYaml} {...props} />}
  />
);

export default MenuQuery;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 70px;

  font-size: 17px;
  letter-spacing: -0.5px;
  color: ${color.linkColor};

  &.hide {
    top: -70px;
  }

  &.styledMenu {
    background-color: #ffffff;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  }
  ${MEDIA.TABLET`
    height: 60px;
    &.hide {
      top: -60px;
    }
  `}
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1600px;
  height: 100%;
  padding: 0 1rem;
`;

const Logo = styled.div`
  a {
    padding-left: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease;
    color: ${color.linkHover};
    font-size: 20px;
    svg {
      align-self: flex-start;
      width: 19px;
      padding-top: 2px;
      margin-right: 18px;
      transition: 0.4s ease;
      fill: ${color.brandColor};
      ${MEDIA.TABLET`
     width: 17px;
   `};
    }
    div {
      padding-bottom: 2px;
    }
    &:hover {
      svg {
        fill: ${color.purple};
      }
    }
  }
  ${MEDIA.TABLET`
    margin-right: auto;
  `}
  ${MEDIA.MOBILE`
    width: 110px;
  `}
`;

const Spacer = styled.div`
  flex: 1;
`;

const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled(Link)`
  padding: 0 15px;
  transition: 0.2s ease;
  text-transform: lowercase;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &:hover,
  &.active {
    color: ${color.linkHover};
  }
  ${MEDIA.TABLET`
      display: none;
  `}
`;

const LogIn = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  a {
    font-size: 16px;
    padding: 0.625rem 0.625rem;
    border-radius: 12px;
  }
  ${MEDIA.MOBILE`
      a {
      font-size:15px;
    }
  `}
`;

const SignUp = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  a {
    font-size: 16px;
    padding: 0.625rem 0.625rem;
    border-radius: 12px;
  }
  ${MEDIA.MOBILE`
    padding-left: 0;
    padding-right: 13px; 
    a {
      font-size:15px;
    }
  `}
`;

const HamburgerMenu = styled.div`
  margin-left: 20px;
  ${MEDIA.MIN_TABLET`
    display: none;
  `}
  ${MEDIA.MOBILE`
    margin-left: 0px;
  `}
`;
