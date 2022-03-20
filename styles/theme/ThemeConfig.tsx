import { createGlobalStyle } from 'styled-components';

import reset from './reset';
import { IHeadings } from './Style.d';

const GlobalStyles = createGlobalStyle`
${reset}

*::-webkit-scrollbar {
  background-color: #fff;
  width: 16px;
}
*::-webkit-scrollbar-track {
    background-color: #fff;
}
*::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
}
*::-webkit-scrollbar-button {
    display:none;
}

html {
    font-family: ${({ theme }) => theme.global.fontFamily};
    height: -webkit-fill-available;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.global.bgColor};
    color: ${({ theme }) => theme.global.color};
    font-family: ${({ theme }) => theme.global.fontFamily};
    font-size: ${({ theme }) => theme.global.fontSize};
    height: 100vh;
    line-height: 1.5;
    margin: 0 auto;
    min-height: -webkit-fill-available;
    min-height: 100vh;
    position: relative;
    width: 100%;
    max-width: 1200px;
  }

  ${({ theme }) => headingsGenerator(theme.headings)}

  button {
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }

  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const headingsGenerator = (config: IHeadings[]) =>
  config.map(
    ({ size, fontFamily, fontWeight }, i) =>
      `h${i + 1}{font-size: ${size}; font-family: ${fontFamily}; font-weight: ${fontWeight};}`
  );

export default GlobalStyles;
