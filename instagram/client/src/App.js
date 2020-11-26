import React from 'react';
import { Button } from 'semantic-ui-react';

// Apollo
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client' ;

function App() {
  return (
    <ApolloProvider client={client} >
    <div className="App">
      <h1>Hola</h1>
      <Button content='Primary' primary />
      <Button content='Secondary' secondary />
    </div>
    </ApolloProvider>
  );
}

export default App;
