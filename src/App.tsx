import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/varta/400.css";
import Routes from './routes';
import theme from './theme';

interface AppProps {
  idToken: String
}

const App: React.FC<AppProps> = ({ idToken }) => {

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
