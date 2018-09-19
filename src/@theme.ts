import { injectGlobal } from 'styled-components';

const theme = {
  colors: {
    primary: '#008cdd',
    gray: '#ededed',
    lightGray: '#f8f8f8',
    darkGray: '#919496',
    neutral: '#2d2d2d',
    red: '#d93737',
    white: '#ffffff',
  },
  weights: [400, 500, 600, 700],
  _htmlFontSize: 10,
  baseFontSize: 1.4, // in rem
};

export type IThemeInterface = typeof theme;

export default theme;

export const globalCSS = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
  html {
    font-size: 14px;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", "Source Sans Pro", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
  * {
    box-sizing: border-box;
  }
`;
