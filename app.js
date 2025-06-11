let humanScore = 0, computerScore = 0;

function getComputerChoice() {

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

// Could be less complex, but this was an attempt to
// solve the problem without using an array
function playRound(humanChoice, computerChoice) {


  // Make sure humanChoice and computerChoice have matching letter casing
  console.log(`You choose: ${humanChoice.toLowerCase()}`);
  console.log(`Computer chose: ${computerChoice}`);

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

function playGame() {
  let i = 1;
  while (i < 6) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
    i++
  }
  
}



playGame();
  



