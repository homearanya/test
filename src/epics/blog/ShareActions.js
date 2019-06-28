import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookShareButton from "react-share/lib/FacebookShareButton";
import TwitterShareButton from "react-share/lib/TwitterShareButton";
import EmailShareButton from "react-share/lib/EmailShareButton";
import color from "../../common/styles/color";

const shareButtons = {
  facebook: {
    component: FacebookShareButton,
    icon: ["fab", "facebook"],
    color: color.facebook
  },
  twitter: {
    component: TwitterShareButton,
    icon: ["fab", "twitter"],
    color: color.twitter
  },
  email: {
    component: EmailShareButton,
    icon: "envelope",
    color: color.green
  }
};

const ShareActions = ({ url, title, excerpt, description, category }) => {
  const shareProps = {
    facebook: {
      url,
      quote: excerpt,
      hashtag: `#${category}`
    },
    twitter: {
      url,
      title,
      via: "studeostem",
      hashtags: [category]
    },
    email: {
      url,
      subject: title,
      body: `${url} - ${description}`
    }
  };
  return (
    <ShareButtonGrid>
      {Object.keys(shareButtons).map((key, i) => {
        const ShareButton = shareButtons[key].component;
        return (
          <ShareButton style={{ outline: "none" }} key={i} {...shareProps[key]}>
            <ShareButtonHover hoverColor={shareButtons[key].color}>
              <FontAwesomeIcon icon={shareButtons[key].icon} />
            </ShareButtonHover>
          </ShareButton>
        );
      })}
    </ShareButtonGrid>
  );
};

ShareActions.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
};

export default ShareActions;

const ShareButtonGrid = styled.div`
  margin-top: 10px;
  display: inline-flex;
  align-self: center;
`;
const ShareButtonHover = styled.div`
  font-size: 16px;
  cursor: pointer;
  padding: 0px 8px;
  transition: 0.2s;
  /* color: ${({ hoverColor }) => hoverColor || color.black}; */
  &:hover,
  &:active {
    color: ${({ hoverColor }) => hoverColor || color.purple};
  }
`;
