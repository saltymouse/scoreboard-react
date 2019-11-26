import React, { Component } from "react";
import "./ScoreTotal.css";

class ScoreTotal extends Component {
  render() {
    return <div className="score-total">{this.props.total}</div>;
  }
}

export default ScoreTotal;
