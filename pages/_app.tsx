import type { AppProps } from "next/app";
import GlobalStyles from "styles/theme/ThemeConfig";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";
import { DefaultTheme } from "styles/theme/DefaultTheme";
import { getMessages } from "translations";
import { defaultLocale } from "contants";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider
      locale={defaultLocale}
      key={defaultLocale}
      messages={getMessages(defaultLocale)}
    >
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
