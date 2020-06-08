import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,400;1,500;1,800&display=swap');

  body {
    font-family: 'Bebas Neue', cursive;
    font-family: 'Montserrat', sans-serif;
    overflow-x:hidden;
  } 
  p {
    font-family: 'Montserrat', sans-serif;

  }
  h1,h2,h3,h4,h5{
    font-family: 'Montserrat', sans-serif;

    /* font-family: 'Bebas Neue', cursive; */

  }
  `;

// eslint-disable-next-line prettier/prettier
export default GlobalStyle;
