const playerScore= 0;
const pcScore = 0;

const playerScoreId= document.getElementById('player-score');
const pcScoreId = document.getElementById('pc-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result');
const rock = document.getElementById('pedra');
const paper = document.getElementById('papel');
const scissors = document.getElementById('tesoura');

//*computador escolhe aletoriamente
function jogadaComputador(){
   const choices = ['pedra', 'papel', 'tesoura'];
   const randomNumber= Math.floor(Math.random() * 3); //* Pega o Elemento
   return choices[randomNumber]; 
}



//?Funçã para mostrar a escolha do player

function game(playerChoice){
   const pcChoice = jogadaComputador();
   console.log("a jogada do pc é" + pcChoice);

   switch(playerChoice + pcChoice) {
      case "pedratesoura" :
      case "papelpedra" :
      case "tesourapapel" :
         console.log("UserGanhe");
         break;
      case "pedrapapel":
      case "papeltesoura":
      case "tesourapedra":
         console.log("user perdeu");
         break;
      case "pedrapedra":
      case "papelpapel":
      case "tesouratesoura":
         console.log("User empata");
         break;
   }


}



function main(){

   //?Adicionar evento
   rock.addEventListener('click', function(){
      game("pedra");
   })
   paper.addEventListener('click', function(){
      game("papel");
   })
   scissors.addEventListener('click', function(){
      game("tesoura");
   })
}

main();

