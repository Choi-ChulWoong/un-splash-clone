import { css } from '@emotion/react';

export const resetStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  input {
    font-family: inherit;
  }

  button {
    position: relative;
    background-color: unset;
    border: unset;
    outline: unset;
    font-family: inherit;
    cursor: pointer;
    font-size: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  button,
  textarea,
  select,
  p,
  a,
  ul,
  ol,
  li,
  span,
  div {
    margin: 0;
    padding: 0;
  }
`;
