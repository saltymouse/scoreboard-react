import uniqueId from "./uniqueId";

/**
 * Get an array of random scores (numbers) of your chosen length
 * @param {Number} scoreQuantity - how many scores you want returned
 * @param {Number} limit - (exclusive) what the upper limit of the random number should be
 */
function getRandomScores(scoreQuantity = 5, limit = 100) {
  return Array.from(
    new Array(scoreQuantity) // new array of given length
  ).map(() => ({
    id: uniqueId(),
    score: Math.floor(Math.random() * limit),
    valid: true
  })); // return new array with random numbers
}

export default getRandomScores;
