let humanScore = 0, computerScore = 0;

function getComputerChoice() {
      // Get random number (separate function?)
    const randNum = Math.floor(Math.random() * 3) + 1

    if (randNum === 1) {
      return "rock";
    } else if (randNum === 2) { 
      return "paper";
    } else {
      return "scissors";
    }
}

function getHumanChoice() {
  // Prompt user for choice and store choice
  let humanChoice = prompt("Please enter your choice");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  // Convert humanChoice to all lowercase
  console.log(humanChoice.toLowerCase());

  // Determine the winner!
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper.");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors.");
    computerScore++;
  } else if (humanChoice === computerChoice) {
    console.log("You tie!");
  } else {
    console.log("You win!");
    humanScore++;
  }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
console.log(computerChoice);
  
playRound(humanChoice, computerChoice);
console.log(`Human Score: ${humanScore}`)
console.log(`Computer Score: ${computerScore}`)

// End getComputerChoice function