let choice = document.querySelectorAll(".content");
let resultText = document.querySelector(".result");
let playerScore = 0;
let computerScore = 0;

choice.forEach(element => {
  element.addEventListener("click", () => {
    const playerChoice = element.getAttribute("id");
    console.log(playerChoice);
    const computerChoice = computerGenerateChoice();
    console.log(computerChoice);

    win = getWinner(playerChoice, computerChoice);
  });
});

function computerGenerateChoice() {
  const array = ['rock', 'paper', 'scissors'];
  const i = Math.floor(Math.random() * 3);

  return array[i];
}

function getWinner(playerChoice, computerChoice) {
  if(playerChoice === computerChoice) {
    updateScores(3);
    resultText.textContent = "THIS ROUND ENDED WITH A DRAW.";
  }
  if(playerChoice === "rock" && computerChoice === "paper") {
    updateScores(2);
    resultText.textContent = "THE COMPUTER WON THIS ROUND.";
  }
  if(playerChoice === "scissors" && computerChoice === "paper") {
    updateScores(1);
    resultText.textContent = "THE PLAYER WON THIS ROUND.";
  }
  if(playerChoice === "paper" && computerChoice === "rock") {
    updateScores(1);
    resultText.textContent = "THE PLAYER WON THIS ROUND.";
  }
  if(playerChoice === "scissors" && computerChoice === "rock") {
    updateScores(2);
    resultText.textContent = "THE COMPUTER WON THIS ROUND.";
  }
  if(playerChoice === "rock" && computerChoice === "scissors") {
    updateScores(1);
    resultText.textContent = "THE PLAYER WON THIS ROUND.";
  }
  if(playerChoice === "paper" && computerChoice === "scissors") {
    updateScores(2);
    resultText.textContent = "THE COMPUTER WON THIS ROUND.";
  }
}

function updateScores(a) {
  if( a === 1) {
    playerScore += 1;
  } else if ( a== 2) {
    computerScore += 1;
  } else {
    playerScore += 1;
    computerScore += 1;
  }
  document.getElementById("player-score").textContent = "Player: " + playerScore;
  document.getElementById("computer-score").textContent = "Computer: " + computerScore;
}
