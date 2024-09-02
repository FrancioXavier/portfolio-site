import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-style';
import { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
