import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';
import Nav from "./components/Nav";

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
