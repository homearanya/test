import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GlobalStyle from "../common/styles/GlobalStyle";
import Head from "../components/Head";
import Menu from "./Menu";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBookOpen,
  faEnvelope,
  faQuestionCircle,
  faSearch,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import SideDrawer from "./SideDrawer";
import Overlay from "./Overlay";

library.add(
  fab,
  faArrowRight,
  faBookOpen,
  faEnvelope,
  faQuestionCircle,
  faSearch,
  faTimes,
  faCopyright
);

class Layout extends Component {
  state = {
    showSlideDrawer: false,
    prevScrollpos: typeof window !== "undefined" && window.pageYOffset,
    headerVisible: true,
    topPage: true
  };

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos =
      typeof window !== "undefined" && window.pageYOffset;
    const headerVisible = prevScrollpos > currentScrollPos;
    const topPage = currentScrollPos === 0;

    this.setState({
      prevScrollpos: currentScrollPos,
      headerVisible,
      topPage
    });
  };

  toggleSideDrawer = () => {
    this.setState(prevState => {
      return { showSlideDrawer: !prevState.showSlideDrawer };
    });
  };

  closeSideDrawer = () => {
    this.setState({ showSlideDrawer: false });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Head />
        <Menu
          visible={this.state.headerVisible}
          topPage={this.state.topPage}
          toggleSideDrawer={this.toggleSideDrawer}
        />
        <SideDrawer
          show={this.state.showSlideDrawer}
          closeSideDrawer={this.closeSideDrawer}
        />
        <Overlay
          show={this.state.showSlideDrawer}
          closeSideDrawer={this.closeSideDrawer}
        />
        <Main>{this.props.children}</Main>
        <Footer />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object
};

export default Layout;

const Main = styled.main`
  margin-top: 80px;
`;
