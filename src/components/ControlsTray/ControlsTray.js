import React from 'react';
import "./ControlsTray.css";
import { ReactComponent as PlayerAddIcon } from "../../icons/user-plus.svg"
import { ReactComponent as PlayerRemoveIcon } from "../../icons/user-minus.svg"

class ControlsTray extends React.Component {
  render() {
    return (
      <div className="controls-tray">
        <button aria-label="Remove Player" title="Remove Player" className="controls-tray__button">
          <PlayerRemoveIcon onClick={this.props.onRemovePlayer} />
        </button>
        <button aria-label="Add Player" title="Remove Player" className="controls-tray__button">
          <PlayerAddIcon onClick={this.props.onAddPlayer} />
        </button>
      </div>
    );
  }
}

export default ControlsTray;