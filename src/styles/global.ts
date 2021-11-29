import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
  cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  #__next {
    min-height: 100vh;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }

  @media(max-width: 420px) {
    html {
      font-size: 60.50%;
    }
  }

  :root {
    --primary: #ED1C24;
    --dark-down: #333333;
    --dark: #666666;
    --dark-up: #808080;
    --white: #FFF;
    --light-down: #aaaaaa;
    --ligth: #cccccc;
    --light-medium: #E6E6E6;
    --light-up: #f2f2f2;
    --total-contrast: #141414;
    --higth-contrast:#676666;

    --primary-font: "Poppins", sans-serif;
  }



  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: rgba(0,0,0,0.07);
  }
`;
