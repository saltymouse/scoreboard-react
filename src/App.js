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

    this.handleAvatarClick = this.handleAvatarClick.bind(this);
    this.handleSubmitScoresClick = this.handleSubmitScoresClick.bind(this);
    this.handlePlayerNewScoreInput = this.handlePlayerNewScoreInput.bind(this);
    this.playerAddHandler = this.playerAddHandler.bind(this);
    this.playerRemoveHandler = this.playerRemoveHandler.bind(this);
  }
  /**
   * Set input values from input field to respective player's newScore state object
   * @param {String} id - unique identifying string for player
   * @param {String} score - number or empty string (to blank input field)
   */
  handlePlayerNewScoreInput(id, score) {
    const players = this.state.players.map(player => {
      if (player.id === id) {
        if (score === "") {
          player.newScore = score;
        } else if (typeof Number(score) === "number") {
          player.newScore = Number(score);
        }
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

  /**
   * Sets specified player's avatar to a new random & unique emoji
   * @param {String} id - unique identifying string for player
   * @param {Boolean} stateful=true - if handler should set state or output emoji object directly
   */
  handleAvatarClick(id, stateful = true) {
    let newRandomEmoji = randomEmoji();

    const emojisCurrentlyInUse = this.state.players.map(
      player => player.avatar.emoji
    );

    const notUnique = () =>
      emojisCurrentlyInUse.some(
        usedEmoji => usedEmoji === newRandomEmoji.emoji
      );

    while (notUnique()) {
      newRandomEmoji = randomEmoji();
    }

    if (stateful) {
      const players = this.state.players.map(player => {
        if (player.id === id) {
          player.avatar = newRandomEmoji;
        }

        return player;
      });

      this.setState({ players });
    } else {
      return newRandomEmoji;
    }
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

  createNewPlayerObject() {
    const id = Number(String(Math.random()).split(".")[1]).toString(16);
    this.handleAvatarClick(id);
    return {
      id,
      scores: randomScores(10, 15),
      newScore: "",
      avatar: this.handleAvatarClick(id, false)
    };
  }

  UNSAFE_componentWillMount() {
    const playersArray = [{}, {}, {}, {}].map(player =>
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
                onNewScoreInput={this.handlePlayerNewScoreInput}
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
