import './app.css';
import Head from 'next/head';

import CrewContextProvider from '../providers/crew';
import { Header } from '../components/Header';

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Head>
        <title>A Queda</title>
      </Head>
      <Header>A QUEDA</Header>
      <CrewContextProvider>
        <Component {...pageProps} />
      </CrewContextProvider>
    </SafeHydrate>
  );
}

export default MyApp;
