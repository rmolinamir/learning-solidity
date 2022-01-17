import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../contexts/theme/ThemeProvider';
import { Web3Provider } from '../contexts/web3/Web3Provider';
import Body from '../layout/body/Body';
import Landing from '../pages/landing/Landing';

function App() {

  return (
    <Web3Provider>
      <ThemeProvider>
        <BrowserRouter>
          <Body>
            <Routes>
              <Route path='/' element={<Landing />} />
            </Routes>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </Web3Provider>
  );
}

export default App;
