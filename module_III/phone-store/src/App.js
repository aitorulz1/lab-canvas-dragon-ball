import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Where from './components/Where';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import {Switch, Route} from 'react-router-dom';
import PhoneDetail from './components/PhoneDetail';




function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/where" component={Where}></Route>
        <Route exact path="/catalog" component={Catalog}></Route>
        <Route exact path="/catalog/:id" component = {PhoneDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
