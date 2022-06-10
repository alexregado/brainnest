/* Main Assignment */
function rpc(playerSelection, computerSelection) {
    //get elements from html
    let resultHolder = document.querySelector(".resultWrapper");
    let paper = document.querySelector(".paper");
    let scissors = document.querySelector(".scissors");
    let rock = document.querySelector(".rock");
    let playerOptions = [paper, rock, scissors];
    let playerScoreHolder = document.querySelector(".playerScore");
    let computerScoreHolder = document.querySelector(".computerScore");
    let computerChoice = document.querySelector(".computerChoice");

    let playerScore = 0;
    let computerScore = 0;
    playerOptions.forEach(option => {
        option.addEventListener('click', function () {

            /* PLAYER */
            playerSelection = option.classList.value;
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);


            /* COMPUTER */
            const options = ["rock", "paper", "scissors"];
            play = Math.floor(Math.random() * options.length);
            computerSelection = options[play];
            computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            switch(computerSelection){
                case("Rock"):
                    computerChoice.innerHTML = `<div class='paper'>🪨</div>`;
                    break;

                case("Paper"):
                    computerChoice.innerHTML =  `<div class='paper'>🗞</div>`;
                    break;  

                case("Scissors"):
                    computerChoice.innerHTML = `<div class='scissors'>✂️</div>`;
                    break;
            }

            /* GAME OUTCOMES */
            if (playerSelection == computerSelection) {
                resultHolder.innerHTML = "<div class='result2'>Tie</div>";
            }

            else if (playerSelection == "Rock") {
                if (computerSelection == "Paper") {
                    resultHolder.innerHTML = `<div class="result computer">Computer Won! <br> ${computerSelection} beats ${playerSelection}</div>`;
                    computerScore++;
                    computerScoreHolder.textContent = computerScore;
                } else {
                    resultHolder.innerHTML = `<div class="result player">Player Won! <br> ${playerSelection} beats ${computerSelection}</div>`;
                    playerScore++;
                    playerScoreHolder.textContent = playerScore;
                }
            }

            else if (playerSelection == "Paper") {
                if (computerSelection == "Scissors") {
                    resultHolder.innerHTML = `<div class="result computer">Computer Won! <br> ${computerSelection} beats ${playerSelection}</div>`;
                    computerScore++;
                    computerScoreHolder.textContent = computerScore;
                } else {
                    resultHolder.innerHTML = `<div class="result player">Player Won! <br> ${playerSelection} beats ${computerSelection}</div>`;
                    playerScore++;
                    playerScoreHolder.textContent = playerScore;
                }
            }

            else if (playerSelection == "Scissors") {
                if (computerSelection == "Rock") {
                    resultHolder.innerHTML = `<div class="result computer">Computer Won! <br> ${computerSelection} beats ${playerSelection}</div>`;
                    computerScore++;
                    computerScoreHolder.textContent = computerScore;
                } else {
                    resultHolder.innerHTML = `<div class="result player">Player Won! <br> ${playerSelection} beats ${computerSelection}</div>`;
                    playerScore++;
                    playerScoreHolder.textContent = playerScore;
                }
            }

            if(playerScore >= 5){
                alert("The winner is the Player!")
                playerScore = 0;
                computerScore = 0;
                computerScoreHolder.textContent = 0; 
                playerScoreHolder.textContent = 0;
            } else if(computerScore >= 5){
                alert("The winner is the Computer!")
                playerScore = 0;
                computerScore = 0;
                computerScoreHolder.textContent = 0; 
                playerScoreHolder.textContent = 0;
            }
        })
    })
}


rpc();
