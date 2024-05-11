humanScore = 0;
computerScore = 0;

function getComputerChoice(max) {
  let result = Math.floor(Math.random() * max);
  if (result === 0) {
    return "rock";
  } else if (result === 1) {
      return "paper";
  } else if (result === 2) {
      return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Please choose between rock, paper, or scissors.");
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return console.log("That's a tie.");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock breaks scissors.")
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper wraps around rock.")
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors cuts paper.")
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! Paper wraps around rock.")
  }

      if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You win! Rock breaks scissors.")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("You lose! Paper wraps around rock.")

        if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Rock breaks scissors.")
      } else if (humanChoice === "" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper wraps around rock.")

  }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);