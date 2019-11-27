import React from "react";
import EmojiJson from "gemoji/db/emoji.json";

const randomEmoji = () => {
  // Emoji characters are contrained to version 8 and below to ensure maximum compatibility
  // (We don't want the dreaded 'not currently available' horizontal bars on older devices...)
  // (...this is also why we use the 'gemoji' package to utilize this version info in the JSON)
  const animalEmojis = EmojiJson.filter(emoji => {
    return emoji.category.startsWith("Animals") && emoji.unicode_version <= 8;
  });

  const randomEmojiIndex = Math.floor(Math.random() * animalEmojis.length);
  const randomEmojiItem = animalEmojis[randomEmojiIndex];

  return (
    <span role="img" aria-label={randomEmojiItem.description}>
      {randomEmojiItem.emoji}
    </span>
  );
};

export default randomEmoji;
