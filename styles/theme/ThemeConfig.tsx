import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.global.bgColor};
    color: ${({ theme }) => theme.global.color};
    font-family: ${({ theme }) => theme.global.fontFamily};
    font-size: ${({ theme }) => theme.global.fontSize};
  }
`;

export default GlobalStyles;
