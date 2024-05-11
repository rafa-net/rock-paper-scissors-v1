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
  return prompt("Please choose rock, paper, or scissors.");
}

console.log(getHumanChoice());