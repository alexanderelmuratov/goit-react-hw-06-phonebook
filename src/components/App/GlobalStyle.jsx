import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

export const GlobalStyle = createGlobalStyle`
  ${modernNormalize}

  html {
    scroll-behavior: smooth;

  }

  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #98DDDE;
    color: #010101;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
