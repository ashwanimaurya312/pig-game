
// selecting element
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentscore0=document.querySelector('#current--0');
const currentscore1=document.querySelector('#current--1');
// starting conditions
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
score0.textContent=0;
score1.textContent=0;
diceEl.classList.add('hidden');
let cscore=0;
let activeplayer=0;
let scores=[0,0];
// rolling dice functions
btnRoll.addEventListener('click',function(){
  // initialising a random vlaue of a dice
  const dice=Math.trunc(Math.random()*6)+1;
  console.log(dice);
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src='dice-'+dice+'.png';
// current score
  if(dice!=1){
    cscore+=dice;
    document.getElementById(`current--${activeplayer}`).textContent=cscore;
  }
  else{
     cscore=0;
    
     document.getElementById(`current--${activeplayer}`).textContent=0;
     activeplayer=activeplayer===0?1:0;
     player0.classList.toggle('player--active');
     player1.classList.toggle('player--active');
  }
});
btnHold.addEventListener('click',function(){
  // adding current score to global score
  scores[activeplayer]+=cscore;
  document.getElementById(`score--${activeplayer}`).textContent= scores[activeplayer];
  
  // checking wherether score is 100 or not
  if(scores[activeplayer]>=100){
  document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");
  activeplayer=activeplayer===0?1:0;
  cscore=0;
  }
  else{
    cscore=0;
     document.getElementById(`current--${activeplayer}`).textContent=0;
     activeplayer=activeplayer===0?1:0;
     player0.classList.toggle('player--active');
     player1.classList.toggle('player--active');
  }
});
btnNew.addEventListener('click',function(){
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  score0.textContent=0;
  score1.textContent=0;
  currentscore1.textContent=0;
  currentscore0.textContent=0;
   cscore=0;
   activeplayer=0;
   scores=[0,0];

});