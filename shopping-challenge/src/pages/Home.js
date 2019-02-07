import React, { Component } from 'react';
import '../App.css';


class Home extends Component {
  render() {
    return (
      <div className="bike-list">
        <h2>Bike Catalogue</h2>
        {this.props.bikesInCatalogue.map(bike => {
          return (
            <div className="bike-card" key={bike.id} onClick={()=>this.props.addBikeToCard(bike.id)}>
                <div>ID: {bike.id}</div>
                <div>Name: {bike.name}</div>
                <button>Add to Cart</button>
            </div>
        )
    }
}

export default Home