import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--white);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);
  }

  ul {
    list-style: none;
  }
  
  :root {
    --primary: #2b7489;
    --white: #fff;
    --black: #1b1f23;
    --border: #e1e4e8;
    --gray: #6a737d;
  }
`;
