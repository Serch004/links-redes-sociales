import '@components/styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/globals.css";
import "../styles/button.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
