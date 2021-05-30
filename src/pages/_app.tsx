import './app.css';
import GlobalStyles from '../style/global';
import Head from 'next/head';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>A Queda</title>
      </Head>
      <GlobalStyles />
      <Header>A QUEDA</Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
