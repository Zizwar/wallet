import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>

      <title>Sloughi - Waallet</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel='stylesheet' href='https://pro.fontawesome.com/releases/v5.7.0/css/all.css' />

    </Head>

    <Component {...pageProps} />
  </>
}

export default MyApp
