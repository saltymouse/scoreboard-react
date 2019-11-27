import React, { Component } from "react";
import "./ScoreInput.css";

import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";

class ScoreInput extends Component {
  constructor() {
    super();
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    const inputValue = event.target.value;
    if (!isNaN(Number(inputValue)) || inputValue === "") {
      this.handleScoreChange(this.props.id, inputValue);
    }
  }

  handleScoreChange(id, score) {
    this.props.onNewScoreInput(id, score);
  }

  render() {
    return (
      <div
        className={
          this.props.newValue !== ""
            ? "score-input score-input--completed"
            : "score-input"
        }
      >
        <input
          className="score-input__field"
          type="number"
          placeholder="Score?"
          value={this.props.newValue}
          onChange={this.handleValueChange}
        />
        <div className="score-input__indicator">
          {this.props.newValue !== "" && <CheckIcon />}
        </div>
      </div>
    );
  }
}

export default ScoreInput;
