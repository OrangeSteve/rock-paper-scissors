
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let playerScore;
let computerScore;

//Play the Game
playGame();


//Get a string containing information about whether the player won or lost or whether it was a draw.
//This makes up part of the string displaying the final results of the game
function getGameResult(){
if (playerScore>computerScore){
    return `Player WINS!!!`;
}else if (playerScore<computerScore){
    return `Computer WINS!!!`;
}else{
    return `It's a DRAW!!!`;
}

}


function playGame(){
    //Set Scores to 0 before a new Game
    playerScore=0;
    computerScore=0;
for (let i=0;i<5;i++){
    //show current round and score in console
    console.log(`Round ${i}/5:   Current score is:   Player ${playerScore}    CPU ${computerScore}`);

    //display result of current round
console.log(playRound());


}
//display final results of game
console.log(`Final Results:     Player ${playerScore}      CPU ${computerScore}.   ${getGameResult()} `);

//display confirmation dialog asking if the player would like to play again. If yes run playGame function again.
//If not then display an alert thanking the user for playing
confirm("Would you like to Play Again?")?playGame():alert("Thanks for playing!!!");

}

function playRound() {
    //Ask player to make a choice
    const playerSelection = prompt("Make your choice: ROCK, PAPER or SCISSORS? ").toUpperCase();

    //CPU Makes a choice
    const computerSelection = computerPlay();
    

    //If the choices are equal then it is a draw. 
    //If not then check what the player chose and compare it with what the computer chose and increment the scores accordingly
    //return the round result to be displayed in the console
    if (playerSelection === computerSelection) {
        return `${playerSelection} and ${computerSelection} are evenly matched. It's a DRAW`;

    } else if (playerSelection === ROCK) {
        switch (computerSelection) {
            case PAPER: computerScore++; return `${computerSelection} covers ${playerSelection}. Computer WINS!!!`;
            case SCISSORS: playerScore++; return `${playerSelection} crushes ${computerSelection}. Player WINS!!!`;
         


        }

    }else if (playerSelection === PAPER) {
        switch (computerSelection) {
            case ROCK: playerScore++; return `${playerSelection} covers ${computerSelection}. Player WINS!!!`;
            case SCISSORS: computerScore++; return `${computerSelection} cuts ${playerSelection}. Computer WINS!!!`;


        }

    }else if (playerSelection === SCISSORS) {
        switch (computerSelection) {
            case ROCK:computerScore++;return `${computerSelection} crushes ${playerSelection}. Computer WINS!!!`;
            case PAPER:playerScore++;return `${playerSelection} cuts ${computerSelection}. Player WINS!!!`;


        }

    }




}

function computerPlay() {
    //generate a random number between 0 and 1 
    //if <.33 =ROCK if <.66=PAPER  else=SCISSORS
    let random = Math.random();

    if (random <= 0.33) {
        return ROCK;
    }
    else if (random <= 0.66) {
        return PAPER;
    }

    return SCISSORS;

}

    


