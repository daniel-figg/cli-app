import {
  handleGuessingGame,
  handleWordsOfWisdom,
  handleCheer,
} from "./handlers.js";
import {
  welcomeAndGetName,
  showOptions,
  sayGoodbye,
  getUserNumber,
} from "./utils.js";

// Primary runner function
const main = () => {
  const name = welcomeAndGetName();
  showOptions();
  const option = getUserNumber();
  if (option === 1) {
    handleGuessingGame();
  } else if (option === 2) {
    console.log(handleWordsOfWisdom());
  } else if (option === 3) {
    console.log(handleCheer());
  }
  sayGoodbye(name);
};

main();
