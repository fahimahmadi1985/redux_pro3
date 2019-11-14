import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Number of Cake: {this.props.numberOfCake}</h1>
        <button onClick={this.props.dispBuyCake}>Buy Cake</button>
      </div>
    );
  }
}

export default App;
