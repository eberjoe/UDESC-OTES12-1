import './app.css';
import GlobalStyles from '../style/global';
import Head from 'next/head';

import CrewContextProvider from '../providers/crew';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>A Queda</title>
      </Head>
      <GlobalStyles />
      <Header>A QUEDA</Header>
      <CrewContextProvider>
        <Component {...pageProps} />
      </CrewContextProvider>
    </>
  );
}

export default MyApp;
