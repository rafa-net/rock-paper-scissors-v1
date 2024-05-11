const max = 3;

possibleChoices = ["rock", "paper", "scissors"];
console.log(possibleChoices[0], possibleChoices[1] + " and " + possibleChoices[2]);

function getComputerChoice () {
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
  return prompt("Please choose rock, paper, or scissors.");
}

console.log(getHumanChoice());