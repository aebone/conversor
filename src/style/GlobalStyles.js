import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Noto Sans', sans-serif;
    transition: all 0.50s linear;
    margin: 0;
  }
  
  header {
    background: ${({ theme }) => theme.headerBody};
    color: ${({ theme }) => theme.headerText};
  }

  h1 {
    font-size: 1.4rem;
  }
  `;
