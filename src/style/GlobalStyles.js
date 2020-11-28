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

  h1 { font-size: 1.4rem; }
  
  h2 { font-size: 1.2rem; border-bottom: 1px solid #c6c6c6; padding-bottom: 5px; }
  
  ul { padding: 0; }
  
  code {
    font-size: 1.2rem;
    background-color: black;
    color: white;
    padding: 4px;
    display: block;
    width: fit-content;
    margin: 1rem auto;
  }
`;
