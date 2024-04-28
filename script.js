// Function to generate a random choice for the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner based on the choices
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Function to handle the game when the user clicks the submit button
function playGame() {
  const userChoice = document.getElementById("userChoice").value.toLowerCase();
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  document.getElementById("computerChoice").innerHTML = "The computer's choice: " + computerChoice;

  setTimeout(() => {
    document.getElementById("result").innerHTML = "Result: " + result;
  }, 5000); 
}

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", playGame);