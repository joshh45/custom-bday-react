import React, { Component } from 'react';



class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick() {
      this.setState({ toggle: true});
      console.log("working");
    }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
        {"hey"}
        </button>
        <h1> your b-day </h1>
        <h2> pic </h2>
      </div>
    );
  }
}


export default Layout;
