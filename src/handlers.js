import { getRandomIntInRange, checkAnswer } from "./utils.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const handleGuessingGame = () => {
  const min = Number(prompt("Choose a lower bound: ").trim());
  const max = Number(prompt("Choose a upper bound: ").trim());
  const guess = Number(
    prompt(`Pick a number between ${min} and ${max}: `).trim()
  );
  const random = getRandomIntInRange(min, max);
  return checkAnswer(guess, random);
};

const handleWordsOfWisdom = () => {
  const wordsOfWisdom = [
    "You should go to bed by 12:30",
    "It's better to mostly understand a little more every day, than to never move forward until you understand everything",
    "Eating breakfast has statistical benefits to brain power",
    "The best laid plans often fail, but plans that don't exist can never succeed",
    "Time management and communication are the two most important skills in the workplace",
    "Try to listen more than you speak",
  ];
  return wordsOfWisdom[getRandomIntInRange(0, wordsOfWisdom.length)];
};

const handleCheer = () => {
  const cheers = [
    "You can do it!",
    "You are the best!",
    "You are a coding machine!",
    "YOU ARE UNREALLLLLLLLL!",
    "LITERALLY UNSTOPPABLE!",
    "Can't even handle your greatness right now!",
  ];
  return cheers[getRandomIntInRange(0, cheers.length)];
};

export { handleGuessingGame, handleWordsOfWisdom, handleCheer };
