import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';

import Home from './components/Main/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AllCategories from './components/Main/AllCategories';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/categories" component={AllCategories} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
