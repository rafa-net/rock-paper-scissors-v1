let humanScore = 0;
let computerScore = 0;
let choices = 3;

function getHumanChoice() {
  const ROCK_BUTTON = document.getElementById("rockButton");
  const PAPER_BUTTON = document.getElementById("paperButton");
  const SCISSORS_BUTTON = document.getElementById("scissorsButton");

  ROCK_BUTTON.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
  });
  PAPER_BUTTON.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
  });
  SCISSORS_BUTTON.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
  });
}

function playRound(humanChoice, computerChoice) {
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result-message");

  if (humanChoice === computerChoice) {
    resultDiv.textContent = "That's a tie.";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultDiv.textContent = "You win!";
    humanScore++;
  } else {
    resultDiv.textContent = "You lose!";
    computerScore++;
  }

  document.body.appendChild(resultDiv);
}

function getComputerChoice() {
  let result = Math.floor(Math.random() * choices);
  if (result === 0) {
    return "rock";
  } else if (result === 1) {
    return "paper";
  } else if (result === 2) { 
    return "scissors"
  }
}


/* function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
} */

// Call getHumanChoice to set up event listeners for the buttons
getHumanChoice();