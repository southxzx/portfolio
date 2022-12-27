import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'themes'
import { extendTheme } from '@chakra-ui/react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const extendedTheme = extendTheme(theme);
  return <ChakraProvider theme={extendedTheme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
}

export default MyApp
