import React, { Component } from "react";
import "./ScoreList.css";

class ScoreList extends Component {
  render() {
    return (
      <ul className="score-list">
        {this.props.scores.map((score, index) => (
          <li key={index} className={index === (this.props.scores.length - 1) ? "score-list__score score-list__score--latest" : "score-list__score"}>
            { score }
          </li>
        ))}
      </ul>
    );
  }
}

export default ScoreList;
