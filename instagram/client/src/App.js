import React, { useState } from 'react';
import Auth from '../src/pages/Auth/Auth';

// Apollo
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client' ;

function App() {

  const [ auth, setAuth ] = useState(undefined);

  return (
    <ApolloProvider client={client} >
        {!auth ? <Auth /> : <h1>Estas logado</h1>}
    </ApolloProvider>
  );
}

export default App;
