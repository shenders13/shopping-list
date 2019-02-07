import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Cart from "./pages/Cart.js";
import Home from "./pages/Home.js";

import {
  fetchBikesInCatalogue,
  fetchDiscounts,
  fetchInventory
} from "./api/requests.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikesInCatalogue: [],
      bikesInCart: []
    };
  }

  componentDidMount() {
    fetchBikesInCatalogue().then(response => {
      const bikesInCatalogue = response.bikes;
      fetchDiscounts().then(response => {
        const discounts = response["bike discounts"];
        const bikesWithUpdatedPrice = computeBikesWithDiscountedPrice(
          bikesInCatalogue,
          discounts
        );
        fetchInventory().then(response => {
          const inventory = response["bikes"];
          const bikesWithInventory = computeBikesWithInventory(
            bikesWithUpdatedPrice,
            inventory
          );
          this.setState({ bikesInCatalogue: bikesWithInventory });
        });
      });
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
          <Route path="/cart" component={() => (
              <Cart
                  bikesInCart={this.state.bikesInCart}
              />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;

const computeBikesWithDiscountedPrice = (bikesInCatalogue, discounts) => {
  return bikesInCatalogue.map(originalPricedBike => {
    return {
      ...originalPricedBike,
      price:
        (1 -
          discounts.find(bike => bike["bike id"] === originalPricedBike.id)
            .discount) *
        originalPricedBike.price
    };
  });
};

const computeBikesWithInventory = (bikesWithUpdatedPrice, inventory) => {
  return bikesWithUpdatedPrice.map(bike => {
    return {
      ...bike,
      isOutOfStock:
        inventory.find(inventoryBike => inventoryBike["bike id"] === bike.id)
          .inventory === 0
    };
  });
};
