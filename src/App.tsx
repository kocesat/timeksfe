import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ChakraProvider>
      <Dashboard message='Hello Timeks'/>
    </ChakraProvider>
  );
}

export default App;
