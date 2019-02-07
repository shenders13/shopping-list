import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Navbar.js'
import Cart from './pages/Cart.js'
import Home from './pages/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
          </div>
      </Router>
    );
  }
}

export default App;
