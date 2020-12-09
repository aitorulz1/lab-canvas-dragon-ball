import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

import Home from './components/Main/Home';
import Register from './components/Auth/Register';
import AllCategories from './components/Main/AllCategories';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact pat="/allcategories" component={AllCategories} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
