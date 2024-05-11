let humanScore = 0;
let computerScore = 0;
let choiceConstant = 3;

function getComputerChoice(max) {
  let result = Math.floor(Math.random() * max);
  if (result === 0) {
    return "rock";
  } else if (result === 1) {
    return "paper";
  } else if (result === 2) { 
    return "scissors"
  }
}

function getHumanChoice() {
  return prompt("Please choose between rock, paper, or scissors.");
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    /* TIE */
    if (humanChoice === computerChoice) {
      return console.log("That's a tie.");

      /* HUMAN PICKS ROCK */
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock breaks scissors.");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper wraps around rock.");
      computerScore++;
      
      /* HUMAN PICKS PAPER */
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors cuts paper.");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper wraps around rock.");
      humanScore++;
      
      /* HUMAN PICKS SCISSORS */
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock breaks scissors.");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors cuts paper.")
      humanScore++;
    }
  }

  humanScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice(choiceConstant);
    const humanSelection = getHumanChoice().toLowerCase();
    playRound(humanSelection, computerSelection);
  } if (computerScore > humanScore) {
    console.log(`The Computer wins with a score of ${computerScore} to ${humanScore}!`);
  } else if (humanScore > computerScore) {
    console.log(`The Human wins with a score of ${humanScore} to ${computerScore}!`);
  }
}

playGame();