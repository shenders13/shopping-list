import React, { Component } from "react";
import "../App.css";

class Cart extends Component {
  render() {
    return (
      <div className="bike-list">
        <h2>Your Cart</h2>
        {this.props.bikesInCart.map(bike => {
          return (
            <div className="bike-card" key={bike.id}>
              <div>ID: {bike.id}</div>
              <div>Price: ${bike.price}</div>
              <div>Name: {bike.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cart;
