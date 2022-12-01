import { createGlobalStyle } from "styled-components";
import KarlaFontMedium from "../assets/fonts/Karla/static/Karla-Medium.ttf";
import Staatliches from "../assets/fonts/Staatliches/Staatliches-Regular.ttf";
import KarlaFontBold from "../assets/fonts/Karla/static/Karla-Bold.ttf";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Karla';
    font-style: normal;
    src: url(${KarlaFontMedium});
  }

@font-face {
    font-family: 'Staatliches';
    font-style: normal;
    font-weight: 400;
    src: url(${Staatliches});
  }

@font-face {
  font-family: 'KarlaBold', sans-serif;
  font-style: normal;
  font-weight: 600;
  src: url(${KarlaFontBold});
}

body {
  background-color: ${(props) => props.theme.color.secondary};
  height: 100vh;
    background-image: linear-gradient(
      13deg,
      ${(props) => props.theme.color.background_color.body.bottom} 50%,
      ${(props) => props.theme.color.background_color.body.top} 50.15%
    );
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${(props) => props.theme.color.secondary};
    padding:  0;
    margin: 0;
    }
    
* {
    font-family: 'Karla', sans-serif;
  }
`;

export default GlobalStyles;
