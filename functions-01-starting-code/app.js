const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const SCISSORS = "SCISSORS";
const PAPER = "PAPER";
const RESULT_DRAW = "DRAW";
const RESULT_USER_WIN = "USER WIN";
const RESULT_COMPUTER_WIN = "COMPUTER WIN";
let gameIsRunning = false;

const userSelection = () => {
  let userInput = prompt(`${ROCK}, ${SCISSORS}, ${PAPER}!`, "").toUpperCase();
  if (userInput != ROCK && userInput != SCISSORS && userInput != PAPER) {
    console.log(`you enter invalid value, so i will set you ${ROCK}`);
    userInput = ROCK;
  }
  return userInput;
};

const computerSelection = () => {
  let computetRandom = Math.random();
  if (computetRandom < 0.34) {
    return ROCK;
  } else if (computetRandom < 0.68) {
    return SCISSORS;
  } else {
    return PAPER;
  }
};

const getResult = (showResult, userChoice, computerChoice) => {
  let result;
  if (userChoice === computerChoice) {
    result = RESULT_DRAW;
  } else if (
    (userChoice === ROCK && computerChoice === SCISSORS) ||
    (userChoice === SCISSORS && computerChoice === PAPER) ||
    (userChoice === PAPER && computerChoice === ROCK)
  ) {
    result = RESULT_USER_WIN;
  } else {
    result = RESULT_COMPUTER_WIN;
  }
  showResult(result);
};

const showResult = (result) => {
  console.log(`the reslt is ${result}`);
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const userChoice = userSelection();
  const computerChoice = computerSelection();
  getResult(showResult, userChoice, computerChoice);
  gameIsRunning = false;
});
