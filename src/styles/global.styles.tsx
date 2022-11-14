import { createGlobalStyle } from "styled-components";
import KarlaFontMedium from "../assets/fonts/Karla/static/Karla-Medium.ttf";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    src: url(${KarlaFontMedium});
  }

body {
        padding:  0;
        margin: 0;
    }
    
* {
    font-family: 'Karla', sans-serif;
  }
`;
