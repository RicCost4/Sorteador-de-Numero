import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    background-color: #5c8bd6;
  }
`