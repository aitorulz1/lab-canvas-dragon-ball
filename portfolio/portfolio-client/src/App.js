import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Main/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AllCategories from './components/Main/AllCategories';

import AuthState from './context/auth/authState';

import tokenAuth from './config/token';

const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}
console.log(token)


function App() {
  return (

      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>

  );
}

export default App;
