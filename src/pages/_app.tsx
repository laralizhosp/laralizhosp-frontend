import { AppProps } from "next/app";
import Head from "next/head";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../contexts/AuthContext";
function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Laraliz | pesquisa de satisfação</title>
      </Head>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ChakraProvider>
                <Component {...pageProps} />
                <GlobalStyle />
          </ChakraProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
