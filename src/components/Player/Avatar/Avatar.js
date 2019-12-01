import React, { Component } from "react";
import "./Avatar.css";

class Avatar extends Component {
  render() {
    return (
      <div
        className="avatar"
        tabIndex={0}
        aria-label="Pick New Avatar"
        role="button"
        onClick={this.props.onAvatarClick}
      >
        <span role="img" aria-label={this.props.avatar.description}>
          {this.props.avatar.emoji}
        </span>
      </div>
    );
  }
}

export default Avatar;
