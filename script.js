const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "Scissors";

const playerSelection = prompt("Make your choice: ROCK, PAPER or SCISSORS? ");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


function computerPlay() {
    let random = Math.random();

    if (random <= 0.33) {
        return ROCK;
    }
    else if (random <= 0.66) {
        return PAPER;
    }

    return SCISSORS;

}



function playRound(playerSelection, computerSelection) {

   
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return `${playerSelection} and ${computerSelection} are evenly matched. It's a draw`;

    } else if (playerSelection === ROCK) {
        switch (computerSelection) {
            case PAPER: return `${computerSelection} covers ${playerSelection}. You LOSE!!!`;
            case SCISSORS: return `${playerSelection} crushes ${computerSelection}. You WIN!!!`;
         


        }

    }else if (playerSelection === PAPER) {
        switch (computerSelection) {
            case ROCK: return `${playerSelection} covers ${computerSelection}. You WIN!!!`;
            case SCISSORS: return `${computerSelection} cuts ${playerSelection}. You LOSE!!!`;


        }

    }else if (playerSelection === SCISSORS) {
        switch (computerSelection) {
            case ROCK: return `${computerSelection} crushes ${playerSelection}. You LOSE!!!`;
            case PAPER: return `${playerSelection} cuts ${computerSelection}. You WIN!!!`;


        }

    }




}


    


