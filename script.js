const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";


//round Info Container
const roundInfoContainer = document.createElement(`div`);
roundInfoContainer.setAttribute("id", "round-info-container");

const roundNumberInfoText = document.createElement(`span`);
roundNumberInfoText.setAttribute("id", "round-number-info");
gameLengthInfoText = document.createElement(`span`);
gameLengthInfoText.setAttribute("id", "game-length-info");

roundInfoContainer.appendChild(roundNumberInfoText);
roundInfoContainer.appendChild(gameLengthInfoText);
//RoundInfoContainer end

//Main Content -- Scores and Game
const mainContent = document.createElement(`div`);
mainContent.setAttribute("id", "main-content");
//Player Name and Scores
const playerNameScoreContainer = document.createElement(`div`);
playerNameScoreContainer.setAttribute("id", "player-name-score-container");

const playerNameInfoText = document.createElement(`span`);
playerNameInfoText.setAttribute("id", "player-name-info-text");
const playerScoreInfoText = document.createElement(`span`);
playerScoreInfoText.setAttribute("id", "player-score-info-text");

playerNameScoreContainer.appendChild(playerNameInfoText);
playerNameScoreContainer.appendChild(playerScoreInfoText);
//Player Name and Scores end

//Game Container
const gameContainer = document.createElement(`div`);
gameContainer.setAttribute("id", "game-container");

const instructionMessageContainer = document.createElement(`div`);
instructionMessageContainer.setAttribute("id", "instruction-message-container");

const instructionMessage = document.createElement(`span`);
instructionMessage.setAttribute("id", "instruction-message");
instructionMessage.textContent = `Make your choice: ROCK, PAPER or SCISSORS?`;

instructionMessageContainer.appendChild(instructionMessage);

const buttonContainer = document.createElement(`div`);
buttonContainer.setAttribute("id", "button-container");

gameContainer.appendChild(instructionMessageContainer);
gameContainer.appendChild(buttonContainer);
//Game Container end

//Computer Name and Score
const computerNameScoreContainer = document.createElement(`div`);
computerNameScoreContainer.setAttribute("id", "computer-name-score-container");

const computerNameInfoText = document.createElement(`span`);
computerNameInfoText.setAttribute("id", "computer-name-info-text");
computerNameInfoText.textContent = `Computer`;
const computerScoreInfoText = document.createElement(`span`);
computerScoreInfoText.setAttribute("id", "computer-score-info-text");

computerNameScoreContainer.appendChild(computerNameInfoText);
computerNameScoreContainer.appendChild(computerScoreInfoText);
//Computer name and Score end
mainContent.appendChild(playerNameScoreContainer);
mainContent.appendChild(gameContainer);
mainContent.appendChild(computerNameScoreContainer);
//Main content end

const roundResultInfoContainer = document.createElement(`div`);
roundResultInfoContainer.setAttribute("id", "round-result-info-container");

const roundResultInfoText = document.createElement(`span`);
roundResultInfoText.setAttribute("id", "round-result-info");


roundResultInfoContainer.appendChild(roundResultInfoText);

//RoundInfoContainer end



const gameSettingsPopUp = document.createElement(`div`);
gameSettingsPopUp.setAttribute("id", "game-settings-popup");


playerNameInputText = document.createElement(`INPUT`);
playerNameInputText.setAttribute("type", "text");
playerNameInputText.setAttribute("placeholder", "Enter your name");
playerNameInputText.setAttribute("maxlength", "12");

const gameLengthSliderLabel = document.createElement(`span`);
gameLengthSliderLabel.setAttribute("id", "game-length-slider-label");
gameLengthSliderLabel.textContent = `Play 5 rounds`;

const gameLengthInputSlider = document.createElement(`INPUT`);
gameLengthInputSlider.setAttribute("id", "game-length-input-slider");
gameLengthInputSlider.setAttribute("type", "range");
gameLengthInputSlider.setAttribute("min", "1");
gameLengthInputSlider.setAttribute("max", "10");
gameLengthInputSlider.setAttribute("value", "5");
gameLengthInputSlider.oninput = () => {
    gameLengthSliderLabel.textContent = `Play ${gameLengthInputSlider.value} round`;
    if (gameLengthInputSlider.value > 1) {
        gameLengthSliderLabel.textContent = gameLengthSliderLabel.textContent + `s`;
    }
};
const confirmSettingsButton = document.createElement(`button`);
confirmSettingsButton.textContent = `Start Game`;
confirmSettingsButton.classList.add("choice-button");

gameSettingsPopUp.appendChild(playerNameInputText);
gameSettingsPopUp.appendChild(gameLengthSliderLabel);
gameSettingsPopUp.appendChild(gameLengthInputSlider);
gameSettingsPopUp.appendChild(confirmSettingsButton);

document.body.appendChild(gameSettingsPopUp);


const rockButton = document.createElement(`button`);
rockButton.classList.add(`choice-button`);
rockButton.textContent = ROCK;
rockButton.addEventListener(`click`, () => {
    playerSelection = ROCK;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

});

const paperButton = document.createElement(`button`);
paperButton.classList.add(`choice-button`);
paperButton.textContent = PAPER;
paperButton.addEventListener(`click`, () => {
    playerSelection = PAPER;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

});

const scissorsButton = document.createElement(`button`);
scissorsButton.classList.add(`choice-button`);
scissorsButton.textContent = SCISSORS;
scissorsButton.addEventListener(`click`, () => {
    playerSelection = SCISSORS;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

});

let playerName = ``;
let playerScore;
let computerScore;
let currentRound;
let gameLength;

confirmSettingsButton.addEventListener(`click`, () => {
    if (playerName == ``) {
        playerName = playerNameInputText.value;
        playerNameInputText.remove();
        if (playerName == ``) {
            playerName = `Player`;
        }
    }
    gameLength = gameLengthInputSlider.value;
    gameSettingsPopUp.remove();
    playGame();
})







function playGame() {
    playerNameInfoText.textContent = playerName;
    playerScoreInfoText.textContent = `${playerScore = 0}`;
    computerScoreInfoText.textContent = `${computerScore = 0}`;
    roundNumberInfoText.textContent = `Round ${currentRound = 1}`;
    gameLengthInfoText.textContent = `First to ${gameLength}`;
    roundResultInfoText.textContent = ``;
    buttonContainer.appendChild(rockButton);
    buttonContainer.appendChild(paperButton);
    buttonContainer.appendChild(scissorsButton);
    document.body.appendChild(roundInfoContainer);
    document.body.appendChild(mainContent);
    document.body.appendChild(roundResultInfoContainer);

}


function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        roundResultInfoText.textContent = `${playerSelection} and ${computerSelection} are evenly matched. It's a DRAW`;

    } else if (playerSelection === ROCK) {
        switch (computerSelection) {
            case PAPER: computerScore++; roundResultInfoText.textContent = `${computerSelection} covers ${playerSelection}. Computer beats ${playerName}`; break;
            case SCISSORS: playerScore++; roundResultInfoText.textContent = `${playerSelection} crushes ${computerSelection}. ${playerName} beats Computer`; break;
        }

    } else if (playerSelection === PAPER) {
        switch (computerSelection) {
            case ROCK: playerScore++; roundResultInfoText.textContent = `${playerSelection} covers ${computerSelection}. ${playerName} beats Computer`; break;
            case SCISSORS: computerScore++; roundResultInfoText.textContent = `${computerSelection} cuts ${playerSelection}. Computer beats ${playerName}`; break;
        }

    } else if (playerSelection === SCISSORS) {
        switch (computerSelection) {
            case ROCK: computerScore++; roundResultInfoText.textContent = `${computerSelection} crushes ${playerSelection}. Computer beats ${playerName}`; break;
            case PAPER: playerScore++; roundResultInfoText.textContent = `${playerSelection} cuts ${computerSelection}. ${playerName} beats Computer`; break;
        }

    }

    displayScore();
    checkForWinner();
    roundNumberInfoText.textContent = `Round ${++currentRound}`;

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

function displayScore() {
    computerScoreInfoText.textContent = computerScore;
    playerScoreInfoText.textContent = playerScore;

}


function checkForWinner() {

    if (playerScore == gameLength) {
        roundResultInfoText.textContent = `${roundResultInfoText.textContent} ${gameLength} points to ${computerScore}`;
        showPlayAgainButton();
        return;
    } else if (computerScore == gameLength) {
        roundResultInfoText.textContent = `${roundResultInfoText.textContent} ${gameLength} points to ${playerScore}`;
        showPlayAgainButton();
        return;
    }
}


function showPlayAgainButton() {
    mainContent.remove();
    document.body.appendChild(gameSettingsPopUp);
}



