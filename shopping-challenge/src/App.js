import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Navbar.js'
import Cart from './pages/Cart.js'
import Home from './pages/Home.js'

const bikes = [
    {id: 1, name: "City Rider"},
    {id: 2, name: "France"},
    {id: 3, name: "Fixie"},
]


class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
              <Navbar />
              <Route exact path="/" component={()=><Home bikes={bikes}/>} />
              <Route path="/cart" component={Cart} />
          </div>
      </Router>
    );
  }
}

export default App;
