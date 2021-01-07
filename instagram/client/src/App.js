import React, { useState } from 'react';
import Auth from '../src/pages/Auth/Auth';
import { ToastContainer } from 'react-toastify';
// Apollo
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';

function App() {

  const [ auth, setAuth ] = useState(undefined);

  return (
    <ApolloProvider client={client} >
        {!auth ? <Auth /> : <h1>Estas logado</h1>}
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </ApolloProvider>
  );
}

export default App;
