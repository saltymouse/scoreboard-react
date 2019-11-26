import EmojiJson from "emoji.json";

const randomAnimalEmoji = () => {
  const animalEmojis = EmojiJson.filter(emoji =>
    emoji.category.startsWith("Animals")
  );

  const randomEmojiIndex = Math.floor(Math.random() * animalEmojis.length);

  return animalEmojis[randomEmojiIndex].char;
};

export default randomAnimalEmoji;
