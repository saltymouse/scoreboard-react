import React, { Component } from "react";
import "./ScoreInput.css";

import { ReactComponent as CheckIcon } from "../../../icons/check.svg";

class ScoreInput extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    this.setState({ inputValue: Number(event.target.value) });
    this.handleScoreChange(this.props.id, Number(event.target.value));
  }

  handleScoreChange(id, score) {
    this.props.onNewScoreInput(id, score);
  }

  render() {
    console.log(this.state.inputValue && <CheckIcon />);
    return (
      <div className={
        this.state.inputValue !== ""
          ? "score-input score-input--completed"
          : "score-input"
      }>
        <input
          className="score-input__field"
          type="number"
          pattern="\d*"
          placeholder="Score?"
          value={this.state.inputValue}
          onChange={this.handleValueChange}
        />
        <div
          className="score-input__indicator"
        >
          {this.state.inputValue !== "" && <CheckIcon />}
        </div>
      </div>
    );
  }
}

export default ScoreInput;
