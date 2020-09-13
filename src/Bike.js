import React from "react";
import "./App.css";

class Model extends React.Component {
  render() {
    return <h2>I am a {this.props.type}!</h2>;
  }
}

export default Model;
