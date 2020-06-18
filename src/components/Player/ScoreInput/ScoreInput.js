import React, { Component } from "react";
import { Translation } from "react-i18next";
import uniqueId from "../../../helpers/uniqueId";
import "./ScoreInput.css";

import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";
import { ReactComponent as ErrorIcon } from "feather-icons/dist/icons/x.svg";

class ScoreInput extends Component {
  constructor() {
    super();
    this.state = {
      valid: false,
      value: "",
    };
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    const inputEl = event.target;
    const inputValue = inputEl.value;
    const validValue = inputEl.checkValidity() && inputEl.value !== "";

    // this.handleScoreChange relies on `this.state.valid`
    // so we need to ensure state is set before calling it
    this.setState({ valid: validValue }, () => {
      this.handleScoreChange(this.props.playerId, inputValue);
    });
  }

  handleScoreChange(playerId, rawScoreValue) {
    const newScoreValue = { score: rawScoreValue, valid: this.state.valid };
    if (!this.props.newValue.hasOwnProperty("id")) {
      newScoreValue.id = uniqueId();
    } else {
      newScoreValue.id = this.props.newValue.id;
    }
    this.props.onNewScoreInput(playerId, newScoreValue);
  }

  render() {
    return (
      <div className="score-input">
        <Translation>
          {(t) => (
            <input
              className="score-input__field"
              id={`score-input__field${this.props.playerId}`}
              type="text"
              pattern="^-?\d+"
              placeholder={t("score")}
              value={
                this.props.newValue.hasOwnProperty("score") &&
                this.props.newValue.score !== ""
                  ? this.props.newValue.score
                  : ""
              }
              onChange={this.handleValueChange}
            />
          )}
        </Translation>
        <label
          className="score-input__indicator"
          htmlFor={`score-input__field${this.props.playerId}`}
        >
          {this.props.newValue.hasOwnProperty("valid") &&
            this.props.newValue.valid && (
              <CheckIcon className="score-input__indicator--success" />
            )}

          {this.props.newValue.hasOwnProperty("valid") &&
            !this.props.newValue.valid &&
            this.props.newValue.score !== "" && (
              <ErrorIcon className="score-input__indicator--error" />
            )}
        </label>
      </div>
    );
  }
}

export default ScoreInput;
