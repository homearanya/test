import { createGlobalStyle } from "styled-components";
import color from "./color";

import AvertaRegularEOT from "./fonts/Averta-Regular.eot";
import AvertaRegularTTF from "./fonts/Averta-Regular.ttf";
import AvertaRegularWOFF from "./fonts/Averta-Regular.woff";
import AvertaRegularWOFF2 from "./fonts/Averta-Regular.woff2";

import AvertaBoldEOT from "./fonts/Averta-Bold.eot";
import AvertaBoldTTF from "./fonts/Averta-Bold.ttf";
import AvertaBoldWOFF from "./fonts/Averta-Bold.woff";
import AvertaBoldWOFF2 from "./fonts/Averta-Bold.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Averta', sans-serif;
  	src: url(${AvertaRegularEOT}),
  	     url(${AvertaRegularWOFF}) format('woff'),
         url(${AvertaRegularWOFF2}) format('woff2'),
  	     url(${AvertaRegularTTF}) format('truetype');
  	font-weight: 400;
  	font-style: normal;
    // font-display: auto;
  }

  @font-face {
    font-family: 'Averta', sans-serif;
  	src: url(${AvertaBoldEOT}),
  	     url(${AvertaBoldWOFF}) format('woff'),
         url(${AvertaBoldWOFF2}) format('woff2'),
  	     url(${AvertaBoldTTF}) format('truetype');
  	font-weight: 700;
  	font-style: normal;
    // font-display: auto;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    font-family: 'Averta', BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background-color: #fff;
    color: ${color.black};
    display: flex;
    flex-direction: column;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum" 1, "kern" 1;
    font-feature-settings: "pnum" 1, "kern" 1;
    font-variant-numeric: proportional-nums;
    font-kerning: normal;
  }

  strong {
     font-weight: 700;
     font-style: normal;
  }

  ::selection {
    background: ${color.purple}; /* WebKit/Blink Browsers */
    color: #fff;
  }
  ::-moz-selection {
    background: ${color.purple}; /* Gecko Browsers */
    color: #fff;
  }

  ul {
      margin: 0;
      padding: 0;
      text-decoration: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
