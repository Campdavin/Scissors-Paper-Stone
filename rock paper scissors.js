
// input and identify the player name 
var gameMode = "waiting for username"
var userName = ""
var playerWinTally = 0;
var computerWinTally = 0;
var totalTally = 0;

var main = function (input) {
    var output = ''; //  show  resultof entering inputs  such as username  and gamemode
    var outcome = ''; //  show the game mode that player is in

    if (gameMode == `waiting for username`) {
        // if the gamemode is waiting for username ...set name as input
        userName = input;
        gameMode = 'choose a gamemode'
        output = `Hello ${userName},choose your game [normal, reverse]`

        return output;

    }
    
    //  now that we have username, proceed to play

    if (gameMode == 'choose a gamemode') {
        gameMode = input.toLowerCase();
        if (gameMode == 'normal' || gameMode == 'reverse') {
            output = `Hello ${userName}, you have selected ${gameMode},start playing by clicking one of the three icons above`;
        } else {
            output = `Hello ${userName}, your selected ${gameMode} is NOT available`;
        }

        return output;
    };

    console.log(`player input: ${playerChoice}`);
    console.log(`computer input:${computerChoice}`);
    totalTally++; // counts the total number of games that has been played

    if (gameMode.toLowerCase() == "normal") {
        outcome = normalGame(playerChoice, computerChoice);
    }

    else if (gameMode.toLowerCase() == "reverse") {
        outcome = reverseGame(playerChoice, computerChoice);
    }

    output = `The computer chose ${computerChoice} <br>
    You chose ${playerChoice} <br>
    ${outcome}! Bummer. <br>
    So far ${userName} you've been winning ${playerWinTally}/${totalTally}`;

};

//  code for game mechanics
var computerChoiceDisplay = document.getElementById(`computer-choice`);
var playerChoiceDisplay = document.getElementById(`player-choice`);
var showResult = document.getElementById('result');
var possibleChoices = document.querySelectorAll('button');

var playerWinTally = 0;
var compWinTally = 0;

let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener(`click`, (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    normalGame(playerChoice,computerChoice);
    reverseGame(playerChoice,computerChoice);
}));


function generateComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    if (randomNumber == 1) {
        computerChoice = 'rock';
    }

    if (randomNumber == 2) {
        computerChoice = 'paper'
    }

    if (randomNumber == 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice;

};

var normalGame = function () {

    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        result = `Congratulations, You have won this round!`
        playerWinTally++;
        
    }
    if (playerChoice == 'paper' && computerChoice == 'rock') {
        result = `Congratulations, You have won this round!`
        playerWinTally++;
        
    }
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        result = `Congratulations, You have won this round!`
        playerWinTally++;
        
    }

    if (playerChoice == computerChoice) {
        result = `It's a draw!`
        
    }

    else if (computerChoice == 'rock' && playerChoice == 'scissors') {
        result = `You've lost this time! Try again & better luck next time`
        compWinTally++;
        
    }
    else if (computerChoice == 'paper' && playerChoice == 'rock') {
        result = `You've lost this time! Try again & better luck next time`
        compWinTally++;
        
    }
    else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        result = `You've lost this time! Try again & better luck next time`
        compWinTally++;
        
    }

    showResult.innerHTML = result;
    main();
};

var reverseGame = function () {

    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        result = `Congratulations, You have won this round!`
        playerWinTally++;
        
    }
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        result = `Congratulations, You have won this round!`
        playerWinTally++;
        
    }
    if (playerChoice == 'paper' && computerChoice == 'scissors') {
        result = `Congratulations, You have won this round!`
        playerWinTally++;
        
    }

    if (playerChoice == computerChoice) {
        result = `It's a draw!`
    
    }

    else if (computerChoice == 'scissors' && playerChoice == 'rock') {
        result = `You've lost this time! Try again & better luck next time`
        compWinTally++;
        
    }

    else if (computerChoice == 'rock' && playerChoice == 'paper') {
        result = `You've lost this time! Try again & better luck next time`
        compWinTally++;
        
    }

    else if (computerChoice == 'paper' && playerChoice == 'scissors') {
        result = `You've lost this time! Try again & better luck next time`
        compWinTally++;
        
    }

    showResult.innerHTML = result;
    main();
};
