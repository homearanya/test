import { css } from 'styled-components';

export const BREAKPOINTS = {
  LARGE: 1200,
  DESKTOP: 992,
  TABLET: 768,
  MOBILE: 500,
};
  

const MEDIA = Object.keys(BREAKPOINTS).reduce((accumulator, key) => {
  accumulator[key] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[key] / 16}em) {
      ${css(...args)};
    }
  `;

  accumulator[`MIN_${key}`] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[key] / 16}em) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});

export default MEDIA;


// ${MEDIA.TABLET`
//   display: flex;
// `};
