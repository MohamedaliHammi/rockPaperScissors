const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const choiceBtns = Array.from (document.querySelectorAll('#choiceBtns'));
const resultText = document.querySelector('#resultText');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

let playerPoints = 0;
let computerPoints = 0;
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
   computerTurn();
 playerText.textContent = `Player: ${player}`
 computerText.textContent  = `Computer: ${computer}`;
 resultText.textContent = checkWinner();

 showScore();
 playerScore.textContent = `Player score : ${playerPoints}`;
 computerScore.textContent = `Computer score : ${computerPoints}`;
 endGame();
 


}))
        




function computerTurn(){
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random){
        case 1:
           computer =  'Rock'
            break;
        case 2:
           computer = 'Paper'
            break;
        case 3:
           computer =  'Scissors'
            break;        
    }
}

function checkWinner(){
    if(computer == player){
        return 'Draw';
    }else if(computer == 'Rock'){
        return (player == 'Paper') ? 'you win' : 'you lose';
    }else if(computer == 'Paper'){
        return(player == 'Scissors') ? 'you win' : 'you lose';
    }else if(computer == 'Scissors'){
        return (player == 'Rock')? 'you win' : 'you lose';
    }
    
};

function showScore (){
  if(resultText.textContent === 'you lose'){
    computerPoints++
  }else if(resultText.textContent === 'you win'){
    playerPoints++
  }
};

function endGame(){
    if(playerPoints == 7 && playerPoints > computerPoints){
        alert('you win')
        alert('Congrats!')
        playerPoints = 0;
        computerPoints = 0;
    }else if(computerPoints == 7 && computerPoints > playerPoints){
        alert('you lose')
        alert('try again!')
        playerPoints = 0;
        computerPoints = 0;
    }
}

