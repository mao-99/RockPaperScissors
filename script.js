const buttons = document.querySelectorAll('button');
const resultElement = document.getElementById('result');
const computerScoreElement = document.getElementById('comp-score');
const playerScoreElement = document.getElementById('user-score');
const resetButton = document.getElementById('reset');
let computerScore = 0;
let playerScore = 0;

function updateScore(){
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = playerScore;
}

updateScore();

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        let userChoice = button.id;
        let computerChoice = computerPlay();
        let result = playRound(userChoice, computerChoice);
        console.log('You clicked', button.id);
        console.log(result);
    })
})

resetButton.addEventListener('click', ()=>{
    computerScore = 0;
    playerScore = 0;
    updateScore();
})


function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return resultElement.innerHTML = 'Its A Tie! Choose Again';
    }else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            computerScore++;
            computerScoreElement.innerHTML = computerScore;
            return resultElement.innerHTML = 'You lose! Paper beats rock';
        }else{
            playerScore++;
            playerScoreElement.innerHTML = playerScore;
            return resultElement.innerHTML = 'You win! Rock beats scissors';
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            computerScore++;
            computerScoreElement.innerHTML = computerScore;
            return resultElement.innerHTML = 'You lose! Scissors beats paper';
        }else{
            playerScore++;
            playerScoreElement.innerHTML = playerScore;
            return resultElement.innerHTML = 'You win! Paper beats rock';
        }
    }else{
        if(computerSelection === 'rock'){
            computerScore++;
            computerScoreElement.innerHTML = computerScore;
            return resultElement.innerHTML = 'You lose! Rock beats scissors';
        }else{
            playerScore++;
            playerScoreElement.innerHTML = playerScore;
            return resultElement.innerHTML = 'You win! Scissors beats paper';
        }
    }
}

