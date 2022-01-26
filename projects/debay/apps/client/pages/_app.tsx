import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/theme/ThemeProvider';
import { Web3Provider } from '../contexts/web3/Web3Provider';
import Body from '../layout/body/Body';

function App({ Component, pageProps, }: AppProps) {

  return (
    <Web3Provider>
      <ThemeProvider root>
        <Body>
          <Component {...pageProps} />
        </Body>
      </ThemeProvider>
    </Web3Provider>
  );

}

export default App;
