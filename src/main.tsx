import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
const queryClient = new QueryClient();
ReactDOM.render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </ChakraProvider>,
  document.getElementById('root')
)
