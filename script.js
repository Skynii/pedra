let playerScore= 0;
let pcScore = 0;

const playerScoreId= document.getElementById('player-score');
const pcScoreId = document.getElementById('pc-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result>p');
const rock = document.getElementById('pedra');
const paper = document.getElementById('papel');
const scissors = document.getElementById('tesoura');
const playerName = document.getElementById('player');

//*computador escolhe aletoriamente
function jogadaComputador(){
   const choices = ['pedra', 'papel', 'tesoura'];
   const randomNumber= Math.floor(Math.random() * 3); //* Pega o Elemento

   return choices[randomNumber]; 
}

//?aumentar a pontuação
function ganha(playerChoice, pcChoice){
   playerScore++;
   playerScoreId.innerHTML =playerScore;
   pcScoreId.innerHTML = pcScore;
   result.innerHTML = `${converterPalavra(playerChoice)}  derrota  ${converterPalavra(pcChoice)}! Você ganhou `;  

}

function perde(playerChoice, pcChoice){
   pcScore++;
   pcScoreId.innerHTML =pcScore;
   playerScoreId.innerHTML = playerScore;
   result.innerHTML = `${converterPalavra(playerChoice)} é derrotado por  ${converterPalavra(pcChoice)}! Você perdeu! `;
}
   

function empate(playerChoice, pcChoice){
   playerScoreId.innerHTML = playerScore;
   playerScoreId.innerHTML =playerScore;
   result.innerHTML = `${converterPalavra(playerChoice)} é igual a ${converterPalavra(pcChoice)}! Você empatou! `
  
}


//?Funçã para mostrar a escolha do player;

function game(playerChoice){
   const pcChoice = jogadaComputador();
   console.log("a jogada do pc é" + pcChoice);

   switch(playerChoice + pcChoice) {
      case "pedratesoura" :
      case "papelpedra" :
      case "tesourapapel" :
         ganha(playerChoice, pcChoice);
         break;
      case "pedrapapel":
      case "papeltesoura":
      case "tesourapedra":
         perde(playerChoice, pcChoice);
         break;
      case "pedrapedra":
      case "papelpapel":
      case "tesouratesoura":
         empate(playerChoice, pcChoice);
         break;
   }
}

//? Converter as palavras
function converterPalavra(word){
   if(word === "pedra") return "Pedra";
   if(word === "papel") return "Papel";
   return "Tesoura";
}


function main(){
   let name = prompt("Digite nome do jogador: ")

   playerName.innerHTML = name;
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
