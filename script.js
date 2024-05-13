let humanScore = 0;
let computerScore = 0;
const choices = 3;

const humanPoints = document.createElement("p");
humanPoints.classList.add("human-points");

const computerPoints = document.createElement("p");
computerPoints.classList.add("computer-points");


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

  const score = document.getElementById(scoreBoardContainer);
  humanPoints.textContent = "YOUR SCORE: " + humanScore;
  computerPoints.textContent = "CPU SCORE: " + computerScore;
  scoreBoardContainer.appendChild(humanPoints);
  scoreBoardContainer.appendChild(computerPoints);
 
  document.body.appendChild(resultDiv);

  setTimeout(() => {
    resultDiv.classList.remove("result-message"); 
    resultDiv.classList.add("fade-out");
    setTimeout(() => {
      resultDiv.remove(); 
    },1000);
  }, 2000); 
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
getHumanChoice();