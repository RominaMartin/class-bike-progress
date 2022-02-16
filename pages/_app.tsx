import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/theme/ThemeConfig';
import { DefaultTheme } from 'styles/theme/DefaultTheme';
import { getMessages } from 'translations';
import { defaultLocale } from 'contants';
import { LayoutContainer } from 'styles/Home.styled';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale={defaultLocale} key={defaultLocale} messages={getMessages(defaultLocale)}>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
