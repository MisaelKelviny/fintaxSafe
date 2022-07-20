import type { AppProps } from 'next/app'
import '../../styles/globals.css'
import { ScrollProvider } from '../data/context/ScrollContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollProvider>
      <Component {...pageProps} />
    </ScrollProvider>
  )
}

export default MyApp
