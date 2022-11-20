import { createGlobalStyle } from "styled-components";
import KarlaFontMedium from "../assets/fonts/Karla/static/Karla-Medium.ttf";
import Staatliches from '../assets/fonts/Staatliches/Staatliches-Regular.ttf';

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    src: url(${KarlaFontMedium});
  }

@font-face {
    font-family: 'Staatliches';
    font-style: normal;
    font-weight: 400;
    src: url(${Staatliches});
  }

body {
        padding:  0;
        margin: 0;
    }
    
* {
    font-family: 'Karla', sans-serif;
  }
`;
