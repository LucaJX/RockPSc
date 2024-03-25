const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result =  "IT'S A TIE!🪢😒";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "CONGRATULATIONS YOU WIN!🥳😱" : "AWHH YOU LOSE!😭";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "CONGRATULATIONS YOU WIN!🥳😱" : "AWHH YOU LOSE!😭";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "CONGRATULATIONS YOU WIN!🥳😱" : "AWHH YOU LOSE!😭";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case  "CONGRATULATIONS YOU WIN!🥳😱":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "AWHH YOU LOSE!😭":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}