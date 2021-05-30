import './app.css';
import GlobalStyles from '../style/global';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>A Queda</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
