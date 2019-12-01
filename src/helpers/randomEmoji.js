import emojiJson from "gemoji/db/emoji.json";
// Emoji characters are contrained to version 8 and below to ensure maximum compatibility
// (We don't want the dreaded 'not currently available' horizontal bars character on older devices...)
// (...this is also why we use the 'gemoji' package to utilize this version info in the JSON)

/**
 * Outputs a random emoji object of a given category
 * @param {String} category="Animals" - Starting string of category name
 * @returns {
    {
      "emoji": "🦙",
      "description": "llama",
      "category": "Animals & Nature",
      "aliases": [
        "llama"
      ],
      "tags": [],
      "unicode_version": "11.0",
      "ios_version": "12.1"
    }
 * }
 */
const randomEmoji = (category = "Animals") => {
  const animalEmojis = emojiJson.filter(emoji => {
    return emoji.category.startsWith(category) && emoji.unicode_version <= 8;
  });

  const randomEmojiIndex = Math.floor(Math.random() * animalEmojis.length);

  const randomEmojiObject = animalEmojis[randomEmojiIndex];

  return randomEmojiObject;
};

export default randomEmoji;
