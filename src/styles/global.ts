import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Montserrat';
    color: #333;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
`;
