import React, { Component } from "react";

import "./Player.css";
import Avatar from "./Avatar/Avatar";
import ScoreTotal from "./ScoreTotal/ScoreTotal";
import ScoreList from "./ScoreList/ScoreList";
import ScoreInput from "./ScoreInput/ScoreInput";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="player__title">
          <Avatar
            avatar={this.props.avatar}
            onAvatarClick={() => this.props.onAvatarClick(this.props.id)}
          />
          <ScoreTotal total={this.props.total} />
        </div>
        <div className="player__body">
          <ScoreInput
            onNewScoreInput={this.props.onNewScoreInput}
            playerId={this.props.id}
            newValue={this.props.newScore}
          />
          <ScoreList
            playerId={this.props.id}
            scores={this.props.scores}
            onScoreEdit={this.props.onScoreEdit}
          />
        </div>
      </div>
    );
  }
}

export default Player;
