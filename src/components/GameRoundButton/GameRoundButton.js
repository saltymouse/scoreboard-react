import React, { Component } from "react";
import "./GameRoundButton.css";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";
import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";

class GameRoundButton extends Component {
  playerInputNotComplete() {
    return this.props.players.some(player => player.newScore === null);
  }

  render() {
    return (
      <button
        aria-label="New Round"
        data-round={this.props.round}
        className={
          this.playerInputNotComplete()
            ? "game-round-button"
            : "game-round-button game-round-button--completed"
        }
        onClick={this.props.onNewRoundClick}
      >
        {!this.props.newRoundActive ? (
          <PlusIcon />
        ) : this.playerInputNotComplete() ? (
          <MinusIcon />
        ) : (
          <CheckIcon />
        )}
      </button>
    );
  }
}

export default GameRoundButton;
