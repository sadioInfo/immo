import Router from "next/router"
import Head from "next/head"
import NProgress from "nprogress"
import { ChakraProvider } from "@chakra-ui/provider"
import Layout from "../components/Layout"
import { ColorModeProvider, ThemeProvider, CSSReset } from "@chakra-ui/react"
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  NProgress.configure({showSpinner: false})

  Router.events.on('routeChangeStart', ()=>{
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', ()=>{
    NProgress.done()
  })
  return <ThemeProvider theme={theme}>
     <ColorModeProvider options={{
        useSystsemColorMode: true
      }}>
        <Head></Head>
        <ChakraProvider>
          <Layout>
            <CSSReset />
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ColorModeProvider>
  </ThemeProvider>
}

export default MyApp
