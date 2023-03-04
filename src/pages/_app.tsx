import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Header from '@/components/header';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Hello Next</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
