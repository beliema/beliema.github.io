const cards = document.querySelectorAll('.sequencecard');

function flipCard() {
    this.classList.toggle('flip');
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







