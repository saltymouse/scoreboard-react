import React, { Component } from "react";
import "./Avatar.css";

class Avatar extends Component {
  render() {
    return (
      <div
        className="avatar"
        tabIndex={0}
        aria-label="New Round"
        role="button"
        onClick={this.props.onAvatarClick}>
        {this.props.avatar}
      </div>
    );
  }
}

export default Avatar;
