import React, { Component } from "react";
import "./App.css";

import randomEmoji from "./helpers/randomEmoji";
import Player from "./components/Player/Player";
import ControlsTray from "./components/ControlsTray/ControlsTray";

// For testing / filling dummy data
import randomScores from "./helpers/randomScores";

class App extends Component {
  constructor() {
    super();

    this.state = {
      maxPlayers: 4,
      players: []
    };

    this.getRandomUniqueAvatar = this.getRandomUniqueAvatar.bind(this);
    this.handleAvatarClick = this.handleAvatarClick.bind(this);
    this.handleSubmitScoresClick = this.handleSubmitScoresClick.bind(this);
    this.handlePlayerNewScore = this.handlePlayerNewScore.bind(this);
    this.playerAddHandler = this.playerAddHandler.bind(this);
    this.playerRemoveHandler = this.playerRemoveHandler.bind(this);
  }

  getRandomUniqueAvatar() {
    let newRandomEmoji = randomEmoji();

    const emojiIsUsed = this.state.players.some(
      ({ avatar }) => avatar === newRandomEmoji
    );

    if (!emojiIsUsed) {
      return newRandomEmoji;
    }

    this.getRandomUniqueAvatar();
  }

  handlePlayerNewScore(id, score) {
    const players = this.state.players.map(player => {
      if (player.id === id) {
        player.newScore = score;
      }

      return player;
    });

    this.setState({
      players
    });
  }

  handleSubmitScoresClick() {
    if (!this.state.players.some(player => player.newScore === "")) {
      const playersWithNewScores = this.state.players.map(player => {
        player.scores.push(player.newScore);
        player.newScore = "";

        return player;
      });

      this.setState({ players: [...playersWithNewScores] });
    }
  }

  handleAvatarClick(id) {
    const players = this.state.players.map(player => {
      if (player.id === id) {
        player.avatar = this.getRandomUniqueAvatar();
      }

      return player;
    });

    this.setState({ players });
  }

  addPlayer = () =>
    this.setState({
      players: [...this.state.players, this.createNewPlayerObject()]
    });

  removePlayer = () => {
    const playersSansOne = this.state.players.splice(
      0,
      this.state.players.length - 1
    );

    this.setState({
      players: [...playersSansOne]
    });
  };

  createNewPlayerObject = () => ({
    id: Number(String(Math.random()).split(".")[1]).toString(16),
    scores: randomScores(10, 15),
    avatar: this.getRandomUniqueAvatar(),
    newScore: ""
  });

  UNSAFE_componentWillMount() {
    const playersArray = [{}, {}, {}].map(player =>
      this.createNewPlayerObject()
    );

    this.setState({ players: playersArray });
  }

  playerAddHandler() {
    const currentNumberOfPlayers = this.state.players.length;
    const maxReached = currentNumberOfPlayers >= this.state.maxPlayers;

    if (!maxReached) {
      this.addPlayer();
    }
  }

  playerRemoveHandler() {
    const currentNumberOfPlayers = this.state.players.length;
    const minReached = currentNumberOfPlayers <= 1;

    if (!minReached) {
      this.removePlayer();
    }
  }

  render() {
    return (
      <div className="app" data-active-players={this.state.players.length}>
        <div className="players">
          {this.state.players.map(player => {
            return (
              <Player
                key={player.id}
                {...player}
                onAvatarClick={this.handleAvatarClick}
                onNewScoreInput={this.handlePlayerNewScore}
                total={player.scores.reduce((total, score) => total + score, 0)}
              />
            );
          })}
        </div>
        <ControlsTray
          onAddPlayer={this.playerAddHandler}
          onRemovePlayer={this.playerRemoveHandler}
          players={this.state.players}
          round={this.state.players[0].scores.length + 1}
          onSubmitScoresClick={this.handleSubmitScoresClick}
          newRoundActive={this.state.newRoundActive}
        />
      </div>
    );
  }
}

export default App;
