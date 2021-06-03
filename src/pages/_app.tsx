import './app.css';
import Head from 'next/head';
import { BrowserRouter as Router } from 'react-router-dom';
import CrewContextProvider from '../providers/crew-context';
import { Header } from '../components/Header';

import { AppProps } from 'next/app';
import TrunkContextProvider from '../providers/trunk-context';

function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : (
        <CrewContextProvider>
          <TrunkContextProvider>
            <Head>
              <title>A Queda</title>
            </Head>
            <Header>A QUEDA</Header>
            <Router>
              <Component {...pageProps} />
            </Router>
          </TrunkContextProvider>
        </CrewContextProvider>
      )}
    </div>
  );
}

export default App;
