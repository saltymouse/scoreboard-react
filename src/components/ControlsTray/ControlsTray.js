import React from "react";
import { Trans } from "react-i18next";
import "./ControlsTray.css";
import { ReactComponent as PlayerAddIcon } from "feather-icons/dist/icons/user-plus.svg";
import { ReactComponent as PlayerRemoveIcon } from "feather-icons/dist/icons/user-minus.svg";
import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

class ControlsTray extends React.Component {
  playerInputComplete = () =>
    this.props.players.every(
      player => player.newScore.hasOwnProperty("valid") && player.newScore.valid
    );

  scoreEditActive = () =>
    this.props.players.every(({ scores }) =>
      scores.some(({ active }) => active)
    );

  render() {
    return (
      <div className="controls-tray">
        <button
          aria-label="Remove Player"
          title="Remove Player"
          className="controls-tray__button"
          onClick={this.props.onRemovePlayerClick}
          disabled={this.props.players.length <= 1}
        >
          <PlayerRemoveIcon />
          <span className="controls-tray__label"><Trans>remove-player</Trans></span>
        </button>

        <button
          aria-label="Remove Scores"
          title="Remove Scores"
          className="controls-tray__button"
          onClick={this.props.onRemoveScoresClick}
          disabled={!this.scoreEditActive()}
        >
          <MinusIcon />
          <span className="controls-tray__label"><Trans>remove-scores</Trans></span>
        </button>

        <button
          aria-label="Current Round"
          title={`Current Round: ${this.props.round}`}
          className="controls-tray__button controls-tray__button--display"
          disabled={true}
        >
          <div className="controls-tray__round-icon">{this.props.round}</div>
          <span className="controls-tray__label"><Trans>current-round</Trans></span>
        </button>

        <button
          aria-label="Add Scores"
          title="Add Scores"
          className="controls-tray__button"
          onClick={this.props.onAddScoresClick}
          disabled={!this.playerInputComplete()}
        >
          {this.playerInputComplete() ? <CheckIcon /> : <PlusIcon />}
          <span className="controls-tray__label">
            <Trans>add-scores</Trans>
          </span>
        </button>

        <button
          aria-label="Add Player"
          title="Add Player"
          className="controls-tray__button"
          onClick={this.props.onAddPlayerClick}
          disabled={this.props.players.length >= this.props.maxPlayers}
        >
          <PlayerAddIcon />
          <span className="controls-tray__label"><Trans>add-player</Trans></span>
        </button>
      </div>
    );
  }
}

export default ControlsTray;
