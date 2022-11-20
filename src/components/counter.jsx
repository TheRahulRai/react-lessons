import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  formatCount() {
    // without using object destructuring
    // return this.state.count ? "Zero" : this.state.count;

    // using object destructuring
    var { count } = this.state;
    // return count ? count : "Zero"; // my expression

    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}
