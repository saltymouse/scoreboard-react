import React, { Component } from "react";
import "./App.css";

import randomEmoji from "./helpers/randomEmoji";
import Player from "./components/Player/Player";
import ControlsTray from "./components/ControlsTray/ControlsTray";

import uniqueId from "./helpers/uniqueId";
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
    this.handleAddScoresClick = this.handleAddScoresClick.bind(this);
    this.handleRemoveScoresClick = this.handleRemoveScoresClick.bind(this);
    this.handlePlayerNewScoreInput = this.handlePlayerNewScoreInput.bind(this);
    this.handleAddPlayerClick = this.handleAddPlayerClick.bind(this);
    this.handleRemovePlayerClick = this.handleRemovePlayerClick.bind(this);
    this.handleScoreEditClick = this.handleScoreEditClick.bind(this);
  }

  /**
   * Set previous round of score editable in input fields
   * @param {String} playerId - unique identifying string for player
   * @param {String} scoreId - unique identifying string for score item
   */
  handleScoreEditClick(playerId, scoreId) {
    const selectedPlayerIndex = this.state.players.findIndex(
      player => player.id === playerId
    );

    const selectedScoreIndex = this.state.players[
      selectedPlayerIndex
    ].scores.findIndex(score => score.id === scoreId);

    const playersWithEditedScores = this.state.players.map(player => {
      player.newScore = player.scores[selectedScoreIndex];

      player.scores.forEach(
        (score, index) => (score.active = index === selectedScoreIndex)
      );

      return player;
    });

    this.setState({ players: playersWithEditedScores });
  }

  /**
   * Set input values from input field to respective player's newScore state object
   * @param {String} playerId - unique identifying string for player
   * @param {Object} scoreItem - score with unique id
   * @param {String} scoreItem.score - score
   * @param {String} scoreItem.id - unique identifying string for score
   */
  handlePlayerNewScoreInput(playerId, scoreItem) {
    const players = this.state.players.map(player => {
      if (player.id === playerId) {
        player.newScore.score = scoreItem.score;
        player.newScore.id = scoreItem.id;
        player.newScore.valid = scoreItem.valid;
      }

      return player;
    });

    this.setState({
      players
    });
  }

  /**
   * Removes currently activated scores from players' `scores` array
   */
  handleRemoveScoresClick() {
    const playersSansActiveScores = this.state.players.map(player => ({
      ...player,
      scores: player.scores.filter(({ active }) => !active),
      newScore: {}
    }));

    this.setState({ players: playersSansActiveScores });
  }

  /**
   * Adds players' current input to respective player's `scores` array
   */
  handleAddScoresClick() {
    // ensure all players have inputted a score before allowing submit
    if (
      this.state.players.every(
        player =>
          player.newScore.hasOwnProperty("score") &&
          player.newScore.score !== ""
      )
    ) {
      const playersWithNewScores = this.state.players.map(player => {
        if (
          player.scores.some(
            score =>
              score.hasOwnProperty("id") && score.id === player.newScore.id
          )
        ) {
          // blank inputs and de-activate scores
          player.newScore = {};
          player.scores.forEach(score => (score.active = false));
        } else {
          player.newScore.id = uniqueId();
          player.scores.push(player.newScore);
          player.newScore = {};
        }

        return player;
      });

      this.setState({ players: playersWithNewScores });
    }
  }

  /**
   * Sets specified player's avatar to a new random & unique emoji
   * @param {String} id - unique identifying string for player
   * @param {Boolean} stateful=true - if handler should set state or output emoji object directly
   */
  handleAvatarClick(playerId, stateful = true) {
    let newRandomEmoji = randomEmoji();

    const emojisCurrentlyInUse = this.state.players.map(
      player => player.avatar.emoji
    );

    const notUnique = () =>
      emojisCurrentlyInUse.some(
        usedEmoji => usedEmoji === newRandomEmoji.emoji
      );

    // keep generating new values until unique
    while (notUnique()) {
      newRandomEmoji = randomEmoji();
    }

    // TODO: the output of this function shouldn't be "switchable" from stateful to output
    if (stateful) {
      const players = this.state.players.map(player => {
        if (player.id === playerId) {
          player.avatar = newRandomEmoji;
        }

        return player;
      });

      this.setState({ players });
    } else {
      return newRandomEmoji;
    }
  }

  /**
   * Adds a new initialized player to board
   */
  addPlayer = () =>
    this.setState({
      players: [...this.state.players, this.createNewPlayerObject()]
    });

  /**
   * Removes last player on board
   */
  removePlayer = () => {
    const playersSansOne = this.state.players.splice(
      0,
      this.state.players.length - 1
    );

    this.setState({
      players: playersSansOne
    });
  };

  /**
   * Intantiates player object
   */
  createNewPlayerObject() {
    const playerId = uniqueId();
    const scoreQuantity = this.state.players[0]
      ? this.state.players[0].scores.length
      : 5;
    const scoreLimit = this.state.players[0] ? 1 : 10;
    this.handleAvatarClick(playerId);
    return {
      id: playerId,
      scores: randomScores(scoreQuantity, scoreLimit),
      newScore: {},
      avatar: this.handleAvatarClick(playerId, false)
    };
  }

  UNSAFE_componentWillMount() {
    const playersArray = [{}, {}, {}, {}].map(player =>
      this.createNewPlayerObject()
    );

    this.setState({ players: playersArray });
  }

  handleAddPlayerClick() {
    const currentNumberOfPlayers = this.state.players.length;
    const maxReached = currentNumberOfPlayers >= this.state.maxPlayers;

    if (!maxReached) {
      this.addPlayer();
    }
  }

  handleRemovePlayerClick() {
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
                onScoreEdit={this.handleScoreEditClick}
                total={player.scores
                  .filter(({ score }) => Number(score)) // no NaN!
                  .reduce((total, { score }) => total + Number(score), 0)}
                editScores={this.state.editScores}
              />
            );
          })}
        </div>

        <ControlsTray
          onAddPlayerClick={this.handleAddPlayerClick}
          onRemovePlayerClick={this.handleRemovePlayerClick}
          players={this.state.players}
          round={this.state.players[0].scores.length}
          onAddScoresClick={this.handleAddScoresClick}
          onRemoveScoresClick={this.handleRemoveScoresClick}
          newRoundActive={this.state.newRoundActive}
          maxPlayers={this.state.maxPlayers}
        />
      </div>
    );
  }
}

export default App;
