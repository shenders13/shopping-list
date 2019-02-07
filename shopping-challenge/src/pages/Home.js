import React, { Component } from "react";
import "../App.css";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="bike-list">
        {this.props.bikes.map(bike => {
          return (
            <div className="bike-card" key={bike.id}>
                <div>ID: {bike.id}</div>
                <div>Name: {bike.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
