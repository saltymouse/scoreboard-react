import React, { Component } from "react";
import "./ScoreList.css";

class ScoreList extends Component {
  render() {
    return (
      <ul className="score-list">
        {this.props.scores.map(round => (
          <li
            key={round.id}
            className={
              round.active
                ? "score-list__score score-list__score--active"
                : "score-list__score"
            }
            onClick={() => {
              return this.props.onScoreEdit(this.props.playerId, round.id);
            }}
          >
            {round.score === "" ? (
              // needs text to maintain element height (space char collapses)
              <span style={{ color: "transparent" }}>Empty</span>
            ) : (
              round.score
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default ScoreList;
