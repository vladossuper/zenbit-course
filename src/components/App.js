import React from 'react';
import { ProductList } from './ProductList';
import { ProductDetails } from './ProductDetails';
import { Basket } from './Basket';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component = { ProductList } />
          <Route path='/details' component = { ProductDetails } />
          <Route path='/basket' component = { Basket } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
