import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Cart from "./pages/Cart.js";
import Home from "./pages/Home.js";
import { fetchBikesInCatalogue } from "./api/requests.js";

const bikesInCatalogue = [
  { id: 1, name: "City Rider" },
  { id: 2, name: "France" },
  { id: 3, name: "Fixie" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikesInCatalogue: bikesInCatalogue,
      bikesInCart: []
    };
  }

  componentDidMount() {
    fetchBikesInCatalogue().then(response => {
      this.setState({ bikesInCatalogue: response.bikes });
    });
  }

  addBikeToCard = bikeId => {
    let bikeToAdd = this.state.bikesInCatalogue.find(
      bike => bike.id === bikeId
    );
    bikeToAdd = JSON.parse(JSON.stringify(bikeToAdd)); // not sure if bike returns a fresh copy. Don't want to mutate state directly
    this.setState({ bikesInCart: [...this.state.bikesInCart, bikeToAdd] });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Route
            exact
            path="/"
            component={() => (
              <Home
                bikesInCatalogue={this.state.bikesInCatalogue}
                addBikeToCard={this.addBikeToCard}
              />
            )}
          />
          <Route
            path="/cart"
            component={() => <Cart bikesInCart={this.state.bikesInCart} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
