import styled from "styled-components";
import MEDIA from "../common/styles/media";
import color from "../common/styles/color";

const contentWidth = "1000px";
const marginWidth = "24px";
const textWidth = "660px";
const transitionTime = "0.1s";

const Content = styled.div`
  display: inline;
  font-size: 18px;
  line-height: 1.75;
  /* width: 100%; property ignore if display:inline */
  max-width: ${contentWidth};
  ${MEDIA.TABLET`
    font-size: 16px;
  `};
  p,
  ul,
  ol,
  h2,
  h3,
  h4,
  blockquote {
    margin: 14px auto 20px auto;
    max-width: ${textWidth};
    letter-spacing: -0.3px;
    ${MEDIA.TABLET`
       margin: 10px ${marginWidth} 24px ${marginWidth};
       letter-spacing: -0.3px;
    `};
  }
  ul,
  ol {
    line-height: 1.5;
    margin: 0px auto 40px auto;
    ${MEDIA.TABLET`
       margin: 0px ${marginWidth} 40px ${marginWidth};
       letter-spacing: -0.3px;
    `};
  }
  li {
    margin: 0 0 12px 20px;
    ${MEDIA.TABLET`
      margin: 0 0 10px 20px;
    `};
  }
  small {
    font-size: 70%;
    color: ${color.grey};
  }
  em {
    font-style: italic;
  }
  blockquote {
    margin-top: 40px;
    margin-bottom: 40px;
    p,
    ol,
    ul {
      max-width: calc(${textWidth} + 2 * ${marginWidth});
      background-color: ${color.greyLight};
      margin: 0px -${marginWidth} 0px -${marginWidth};
      border-left: 4px solid ${color.greyLight};
      color: ${color.black};
      font-size: 95%;
      padding: 18px 0px 18px calc(${marginWidth} - 2px);
    }
    ul {
      list-style: none;
      padding: 18px 0 16px 0;
    }
    li {
      margin: 4px calc(${marginWidth} - 4px) 6px calc(${marginWidth} - 4px);
      line-height: 1.4;
    }
  }
  pre,
  code {
    background: none;
    letter-spacing: -0.03rem;
  }
  code {
    font-size: 77%;
  }
  code.language-text {
    background-color: ${color.greyLight};
    color: ${color.black};
    padding: 0.35em 0.45em;
    margin: 2px;
    border-radius: 5px;
  }
  pre > code.language-text {
    background: none;
    color: inherit;
    margin: inherit;
    padding: 0;
    border-radius: none;
  }
  .gatsby-highlight {
    margin: 25px auto 25px auto;
    max-width: calc(${textWidth} + 2 * ${marginWidth});
    border-radius: 4px;
    overflow: hidden;
    background-color: ${color.greyLight};
    ${MEDIA.TABLET`
      border-radius: 0px;
      // margin: 20px auto 20px auto;
    `};
  }
  h2,
  h3,
  h4 {
    font-weight: 700;
    line-height: 1.2;
  }
  h2 {
    font-size: 32px;
    letter-spacing: -1.5px;
    margin: 55px auto 25px auto;
    ${MEDIA.TABLET`
      margin: 55px ${marginWidth} 0px ${marginWidth};
      font-size: 26px;
      letter-spacing: -1px;
    `};
  }
  h3 {
    font-size: 24px;
    letter-spacing: -1.2px;
    margin: 45px auto 20px auto;
    ${MEDIA.TABLET`
      margin: 45px ${marginWidth} 0px ${marginWidth};
      font-size: 20px;
      letter-spacing: -0.7px;
    `};
  }
  h4 {
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: -0.6px;
    margin: 35px auto 15px auto;
    ${MEDIA.TABLET`
      margin: 35px ${marginWidth} 0px ${marginWidth};
      font-size: 15px;
      letter-spacing: -0.4px;
    `};
  }
  h5 {
    text-align: center;
    font-size: 78%;
    letter-spacing: -0.3px;
    line-height: 1.4;
    color: ${color.blackLight};
    margin: 0px 24px 50px 24px;
    padding: 0;
  }
  a {
    border-radius: 8px;
    transition: ${transitionTime};
    white-space: nowrap;
    font-weight: inherit;
    color: ${color.pink};
    &:hover {
      text-decoration: underline;
    }
  }
  sup a {
    color: ${color.grey};
    background: ${color.greyLight};
    vertical-align: super;
    font-size: 65%;
    padding: 2px 4px 1px 4px;
    border-radius: 20px;
    &:hover {
      color: ${color.pink};
      text-decoration: none;
      background: ${color.pinkLight};
    }
  }
  hr {
    margin: 50px auto 80px auto;
    ${MEDIA.TABLET`
        margin: 30px auto 60px auto;
    `};
  }
  .footnotes {
    font-size: 13px;
    padding: 18px 0;
    margin: 60px auto 40px auto;
    background: ${color.greyLight};
    border-radius: 4px;
    color: ${color.grey};
    max-width: calc(${textWidth} + 2 * ${marginWidth});
    ${MEDIA.TABLET`
      border-radius: 0px;
      font-size: 12px;
    `};
    &:before {
      content: "references";
      font-weight: 700;
      margin: 0px ${marginWidth} 8px ${marginWidth};
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: -0.4px;
    }
    a {
      text-decoration: underline;
      color: inherit;
      background: none;
      padding: 0;
      margin: 0;
      border-radius: 0px;
      white-space: normal;
      overflow-wrap: break-word;
      border-bottom: none;
      font-weight: 400;
    }
    ol {
      margin: 0 ${marginWidth};
      padding: 0;
      max-width: 100%;
      list-style-position: inside;
    }
    hr {
      padding: 0;
      display: none;
      margin-bottom: 0;
    }
    li {
      margin: 8px 0 2px 0;
      line-height: 1.5;
      overflow-wrap: break-word;
    }
    p {
      display: inline;
      margin-left: 0;
      margin-right: 0;
    }
    .footnote-backref {
      visibility: hidden;
      position: relative;
      &:after {
        visibility: visible;
        position: absolute;
        top: -9px;
        padding: 5px 3px;
        left: 0;
        content: "▲";
      }
      &:hover {
        color: ${color.purple};
      }
    }
  }
`;

export default Content;
