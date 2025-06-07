let humanScore, computerScore = 0;

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

  // if humanChoice === "rock" && computerChoice === "paper"
    // Display you lose

  // else if humanChoice === "paper" && computerChoice === " scissors"
    // Display you lose

  // else if humanChoice === "scissors" && computerChoice === "rock"
   // Display you lose

  // else if humanChoice === computerChoice
    // Display you tie
  
  // else
   // Display you win
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
  
playRound(humanChoice, computerChoice);

// End getComputerChoice function