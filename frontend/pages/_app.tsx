import type { AppProps } from 'next/app'

function Cosmac({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Cosmac
