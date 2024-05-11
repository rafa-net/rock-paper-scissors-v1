choiceConstant = 3;

function getComputerChoice(max) {
  let result = Math.floor(Math.random() * max);
  if (result === 0) {
    return "rock";
  } else if (result === 1) {
    return "paper;"
  } else if (result === 2) { 
    return "scissors"
  }
}

function getHumanChoice() {
  return prompt("Please choose between rock, paper, or scissors.");
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();


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
    
    /* COMPUTER PICKS ROCK */
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock breaks scissors.");
    computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("You win! Paper wraps around rock.");
    humanScore++;

    /* COMPUTER PICKS PAPER */
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("You win! Scissors cuts paper.");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper wraps around rock.");
    computerScore++;
    
    /* COMPUTER PICKS SCISSORS */
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      console.log("You win! Rock breaks scissors.");
      humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors cuts paper.")
    computerScore++;
    }
  }
  humanScore = 0;
  computerScore = 0;
  for (let i = 0; i < 4; i++) {
    const computerSelection = getComputerChoice(choiceConstant);
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();