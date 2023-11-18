let listOptions = ["👊", "✋", "✌️"]

computerScore = 0;
playerScore = 0;
roundMessage = '';
winnerMessage = ''

function getChoices(playerSelection) {
    computerSelection = listOptions[(Math.floor(Math.random() * listOptions.length))];
    playRound(computerSelection, playerSelection);
}

function playRound(computerSelection,playerSelection) {
    if(computerScore + playerScore == 5) {
        return;
    }
    if(computerSelection == playerSelection) {
        roundMessage = "It's a tie";
    }
    else if( (computerSelection == "👊" && playerSelection == "✌️") || (computerSelection == "✋" && playerSelection == "👊") || (computerSelection == "✌️" && playerSelection == "✋")) {
        computerScore++;
        roundMessage='You lost this round! ';
    }
    else {
        playerScore++;
        roundMessage='You won this round! ';
    }
    document.getElementById("playerChoice").innerHTML = playerSelection;
    document.getElementById("computerChoice").innerHTML = computerSelection;
    document.getElementById("playerScore").innerHTML = "Player:"+ playerScore;
    document.getElementById("computerScore").innerHTML = "Computer:"+ computerScore;
    document.getElementById("winner").innerHTML = roundMessage;
    game(computerScore, playerScore);
}

function game(computerScore, playerScore) {
    if(computerScore + playerScore == 5) {
        if(computerScore > playerScore) {
            winnerMessage = 'Computer won the 5-round game';
        }
        else {
            winnerMessage = 'You won the 5-round game';
        }
        document.getElementById("winner").innerHTML = winnerMessage;
        customizeButton();
    }
}
function customizeButton() {
    button = document.getElementById("buttonPlayAgain");
    document.getElementById("buttonPlayAgain").innerHTML = "Play Again";
    button.style.backgroundColor = "red";
}
function playAgain() {
    location.reload();
}