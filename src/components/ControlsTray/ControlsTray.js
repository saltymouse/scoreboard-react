import React from "react";
import "./ControlsTray.css";
import { ReactComponent as PlayerAddIcon } from "feather-icons/dist/icons/user-plus.svg";
import { ReactComponent as PlayerRemoveIcon } from "feather-icons/dist/icons/user-minus.svg";
import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";

class ControlsTray extends React.Component {
  playerInputNotComplete() {
    return this.props.players.some(player => player.newScore === "");
  }

  render() {
    return (
      <div className="controls-tray">
        <button
          aria-label="Remove Player"
          title="Remove Player"
          className="controls-tray__button"
          onClick={this.props.onRemovePlayer}
          disabled={this.props.players.length <= 1}
        >
          <PlayerRemoveIcon />
          <span className="controls-tray__label">Remove Player</span>
        </button>

        <button
          aria-label="Round Number"
          title={`Round Number: ${this.props.round}`}
          className="controls-tray__button"
        >
          <div className="controls-tray__round-icon">{this.props.round}</div>
          <span className="controls-tray__label">Round Number</span>
        </button>

        <button
          aria-label="Submit Scores"
          title="Submit Scores"
          className="controls-tray__button"
          onClick={this.props.onSubmitScoresClick}
          disabled={this.playerInputNotComplete()}
        >
          {this.playerInputNotComplete() ? <PlusIcon /> : <CheckIcon />}
          <span className="controls-tray__label">Submit Scores</span>
        </button>

        <button
          aria-label="Add Player"
          title="Add Player"
          className="controls-tray__button"
          onClick={this.props.onAddPlayer}
          disabled={this.props.players.length >= 4}
        >
          <PlayerAddIcon />
          <span className="controls-tray__label">Add Player</span>
        </button>
      </div>
    );
  }
}

export default ControlsTray;
