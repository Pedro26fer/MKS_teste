import type { AppProps } from "next/app";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import  {ThemeProvider} from 'styled-components'
import GlobalStyle from "../styles/GlobalStyle";
import {theme} from '../styles/theme'
import Providers from "../contexts";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}
export default App
