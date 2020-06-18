# Scoreboard React

> A simple React-powered scoreboard for score-keeping while playing analog games

## Demo 🃏

[https://saltymouse.github.io/scoreboard-react](https://saltymouse.github.io/scoreboard-react)

![Scoreboard (mobile size, showing dark/light mode)](/public/darkmode-mobile.png?raw=true "Scoreboard with darkmode!")

## How To Use 🀄️

### Adding & Removing Players

- Click/tap the _Remove Player_ (👤➖) or _Add Player_ (👤➕) buttons (bottom of the screen) to match the number of players in your game (1 to 4).

### Change Your Emoji 🦁

- Click/tap the emoji on each player to select a new random emoji.

### Adding Scores ➕

- Click/tap _Add Scores_ (➕) after entering all player's scores.
  - The _Add Scores_ (➕) icon will change to a (✔️) signifying the scores are ready to submit.

### Removing Scores ➖

1. From the score-list, click/tap on the score you wish to remove.
   - _Scores from the same round in other players will be highlighted._
2. Click/tap the _Remove Scores_ (➖) button.

### Editing Scores ✔️

1. From the score-list, click/tap on the score you wish to remove.
2. Adjust the selected scores in the players' input fields.
3. Click/tap _Add Scores_ (✔️) to submit score changes.

## Tech Specs 🪀

- Mobile-first responsive design
- Dark mode (auto-detected from you OS settings)

## Browser Support 🕸

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png) |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                            | Latest ✔                                                                                               | 10+ ✔                                                                                       | Latest ✔                                                                                         | iOS 12+ ✔                                                                                                   |

## Development 💻

- `yarn start` or `npm start` - Runs the app in live-development mode.
- `yarn build` or `npm build` - Builds the optimized production app.

### Branching

## Quick Legend

|Instance|Branch|Description, Instructions, Notes|
|--- |--- |--- |
|Stable|stable|Accepts merges from Working and Hotfixes|
|Working|master|Accepts merges from Features/Issues and Hotfixes|
|Features/Issues|topic-*|Always branch off HEAD of Working|
|Hotfix|hotfix-*|Always branch off Stable|



## Todo 🧩

- [x] Edit/Remove Scores
- [ ] Localization
- [ ] Accessibility
- [ ] Testing
- [ ] Offline
