import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcomeAndGetName = () => {
  console.log("Welcome!");
  const name = prompt("What is your name: ").trim();
  console.log(`Hello ${name}, nice to meet you!`);
  return name;
};

const showOptions = () => {
  console.log("Here are your options:");
  console.log("1 - play a guessing game");
  console.log("2 - words of wisdom");
  console.log("3 - cheer you on!");
  console.log("Any other key - exit");
};

const sayGoodbye = (name) => {
  console.log(`Goodbye, ${name}!`);
};

const getUserNumber = () => {
  const number = Number(prompt().trim());
  return number;
};

const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error("min must be less than max");
  return Math.floor(Math.random() * (max - min)) + min;
};

const checkAnswer = (guess, correct) => {
  if (guess === correct) {
    console.log("Congratulations, you win!");
  } else {
    console.log("Better luck next time.");
  }
};

export {
  welcomeAndGetName,
  showOptions,
  sayGoodbye,
  getUserNumber,
  getRandomIntInRange,
  checkAnswer,
};
