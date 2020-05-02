//flip cards

let card = document.getElementsByClassName("sequencecard");
let cards = [...card];
// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", displayCard);
};



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







