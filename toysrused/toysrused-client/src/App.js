import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

import Home from './components/Main/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AllCategories from './components/Main/AllCategories';

import UserState from './context/user/userState';

import tokenAuth from './config/token';

const token = localStorage.getItem('token');
if(token) {
    tokenAuth(token);  
}

function App() {
  return (
    <BrowserRouter>
      <UserState>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <Route exact pat="/allcategories" component={AllCategories} />
        </Switch>
      </UserState>
    </BrowserRouter>
  );
}

export default App;
