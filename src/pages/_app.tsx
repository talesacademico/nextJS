
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider } from 'next-auth/react'
import '../style/global.scss'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
