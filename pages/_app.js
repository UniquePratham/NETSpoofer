// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NETSpoofer - Your Web Network Analyzer</title>
        <meta
          name="description"
          content="Analyze your web network traffic with NETSpoofers"
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
