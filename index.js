const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const choiceBtns = Array.from (document.querySelectorAll('#choiceBtns'));
const resultText = document.querySelector('#resultText');


let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
   randomTurn();
 playerText.textContent = `Player: ${player}`
 computerText.textContent  = `Computer: ${computer}`;
 resultText.textContent = checkWinner();


}))
        




function randomTurn(){
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
}



