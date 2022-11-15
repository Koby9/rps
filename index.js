//Randomly generates a choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
    case 0:
    compChoice.textContent = 'Rock';
    return 'rock'
    case 1:
    compChoice.textContent = 'Paper';
    return 'paper'
    case 2:
    compChoice.textContent = 'Scissors';
    return 'scissors'
    }
    
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerScore = document.querySelector(".p-score");
const compScore = document.querySelector(".c-score");

const winnerDisplay = document.querySelector("h2");

const compChoice = document.querySelector('#comp-choice');
const playerChoice = document.querySelector('#player-choice');

//Asks a player for their choice
function getPlayerChoice(){
    let player = '';

    rock.addEventListener('click', e => {
        player = 'rock';
        playerChoice.textContent = 'Rock';
        return game(player);
    })

    paper.addEventListener('click', e => {
        player = 'paper';
        playerChoice.textContent = 'Paper';
        return game(player);
    })

    scissors.addEventListener('click', e  => {
        player = 'scissors';
        playerChoice.textContent = 'Scissors';
        return game(player);
    })
}
let pScore = 0;
let cScore = 0;
function keepScore(winner) {
    if (winner === 'player') {
        pScore += 1;
        playerScore.textContent = pScore;
        winnerDisplay.textContent = 'You win this round!'
        determineWinner(cScore, pScore);
    }else if (winner === 'comp')  {
        cScore += 1;
        compScore.textContent = cScore;
        winnerDisplay.textContent = 'Sentient A.I. wins this round!'
        determineWinner(cScore, pScore);
    }else {
        winnerDisplay.textContent = 'You have tied!'
    }
}

function determineWinner(compWin, playerWin){
    if (compWin === 5){
        winnerDisplay.textContent = 'SENTIENT A.I. WINS THE GAME!'
        winnerDisplay.style.color = "red";
        winnerDisplay.style.fontSize = '30px';
    }else if (playerWin === 5){
        winnerDisplay.textContent = 'YOU WIN THE GAME!'
        winnerDisplay.style.color = "green";
        winnerDisplay.style.fontSize = '30px';
    }else{
        return;
    }
}

//Main game loop
function game(playerChoice){
        let playerSelection = playerChoice;
        let computerSelection = getComputerChoice();
        console.log("Computer: " + computerSelection);
        console.log("Player: " + playerSelection);
        if (playerSelection === computerSelection){
            //alert("You tied this round!");
            return keepScore('tie');
        }
        else if (playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "rock" && computerSelection === "scissors") {
            //alert("You win this round!");
            return keepScore('player');
        }
        else if (playerSelection === "paper" && computerSelection === "scissors" || 
        playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "scissors" && computerSelection === "rock") {
            //alert("You lose this round!")
            return keepScore('comp');
        }
    
    
}
getPlayerChoice();