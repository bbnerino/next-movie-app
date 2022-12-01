import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "../styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Header from "../components/nav/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>next-javascript</title>
        <meta name="description" content="next movie-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
