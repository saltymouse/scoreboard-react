import EmojiJson from "gemoji/db/emoji.json";

const randomEmoji = () => {
  const animalEmojis = EmojiJson.filter(emoji => {
    return emoji.category.startsWith("Animals") && emoji.unicode_version <= 8;
  });

  const randomEmojiIndex = Math.floor(Math.random() * animalEmojis.length);

  return animalEmojis[randomEmojiIndex].emoji;
};

export default randomEmoji;
