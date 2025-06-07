
function getComputerChoice() {
      // Get random number (separate function?)
    const randNum = Math.floor(Math.random() * 3) + 1

    if (randNum === 1) {
      return "Rock";
    } else if (randNum === 2) { 
      return "Paper";
    } else {
      return "Scissors";
    }
}

function getHumanChoice() {
  // Prompt user for choice and store choice
  let humanChoice = prompt("Please enter your choice");
  return humanChoice;
}
  
console.log(getComputerChoice());
console.log(getHumanChoice());

// End getComputerChoice function



console.log("Hello, World!");