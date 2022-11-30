import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "../styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MOVIE APP</title>
        <meta name="description" content="next와 함께하는 movie-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
