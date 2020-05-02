const cards = document.querySelectorAll('.sequencecard');

function flipCard() {
    this.classList.toggle('flip');
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;

this.classList.add('flip');

if (!hasFlippedCard) {
  hasFlippedCard = true;
  firstCard = this;

  return;
}

secondCard = this;
checkForMatch();
}

cards.forEach(card => card.addEventListener('click', flipCard));

//Timer
var timeleft1=30;
var timeleft2=40;
var timeleft3=60;

var i = 30;
function timer(){
    if (--i < 0) return;
    setTimeout(function(){
        document.getElementById('countdown').innerHTML = i + ' secs';
        timer();
    }, 1000);
};







