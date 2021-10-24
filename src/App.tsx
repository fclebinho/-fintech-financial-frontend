import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';

interface AppProps {
  idToken: String
}

const App: React.FC<AppProps> = ({ idToken }) => {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
