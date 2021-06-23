const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";


computerPlay();


function computerPlay() {
    let choice = getComputerChoice();
console.log(choice);

}


function getComputerChoice() {
    let random = Math.random();

    if (random <= 0.33) {
        return ROCK;
    }
    else if (random <= 0.66) {
        return PAPER;
    }
    
        return SCISSORS;
    

}