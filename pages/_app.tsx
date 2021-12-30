import type { AppProps } from "next/app";
import GlobalStyles from "styles/theme/ThemeConfig";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styles/theme/DefaultTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
