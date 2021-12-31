import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.global.bgColor};
    color: ${({ theme }) => theme.global.color};
    font-family: ${({ theme }) => theme.global.fontFamily};
    font-size: ${({ theme }) => theme.global.fontSize};
    margin: 0;
    height: "100vh";
    width: "100vw";
    position: "relative";
  }
`;

export default GlobalStyles;
