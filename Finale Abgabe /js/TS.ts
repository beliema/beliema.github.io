//Ich erstelle ein Interface um ein ungefähres Haupt-Objekt ( in diesem Fall die Karten) zu erstellen

interface card {
id: string;
color: number;
value: number;
}

let stack: Card[] = [];
let player: Card[] = [];
let computer: Card[] = [];
let game: Card[] = [];

var work = false;
var played = false;
var ingame = false;

let isVisible = false;

//Funtion um Karten zu generieren

function generateCard() {
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <=13; j++) {
            var id = i + "-" + j 
            stack.push({id: id, color: i, value: j})
        }
    }
    stack = shuffle(stack);
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var r = Math.random() * (i + 1);
        var ri = Math.floor(r);
        var tmp = array[i];
        array[i] = array[ri]
        array[ri] = tmp;
    }
    return array;
}

function isEmpty(array) {
    if (array.lenght == 0) {
        return true;
    } else {
        return false
    }
}

function cardToPlayer() {
    if (!isEmpty(stack)) {
        player.push(stack[0]);
        stack.splice(0,1);
    } else {
        console.log ("Leerer Stapel")
}

function cardToField() {
    if (!isEmpty(stack)) {
        game.push(stack[0]);
        stack.splice(0, 1);
    } else {
        console.log("Leerer Stapel")
    }
}

function cardToComputer() {
    if (!isEmpty(stack)) {
        computer.push(stack[0]);
        stack.splice(0,1);
    } else {
        console.log ("Leerer Stapel")
    }
}

function dealCards() {
    cardToPlayer();
    cardToComputer();
    cardToPlayer();
    cardToComputer();
    cardToPlayer();
    cardToComputer();
    cardToPlayer();
    cardToComputer();
    cardToPlayer();
    cardToComputer();
    cardToField();
}

function start() {
    stack = [];
    player = [];
    computer = [];
    game = [];
    ingame = true;
    work = false;
    played = false;
    generateCards();
    dealCards();
    loadField();
}

function getTopCard() {
    if (!isEmpty(game)) {
        return game [game.length -1];
    }
}

function loadField () {
    var playercards = "";
    if (player.length != 0) {
        player.forEach(function (card) { 
            playercards = playercards + createCard(false, card, true);
        })
    }
    
    var computercards = "";
    if (computer.length != 0) {
        computer.forEach(function (card) { 
            computercards = computercards + createCard(false, card, true);
        })
    }

    var stackcard = "";
    if (stack.length != 0)  {
        stackcard = createCard( true, {  id: "nc", color: 0, value: 0 }, false);
    }

    var gamecard = "";
    if (game.length != 0) {
        gamecard = createCard(false, getTopCard(), false);
    }
    
    document.getElementById("gameCards").innerHTML = gamecard;
    document.getElementById("stackCards").innerHTML = stackcard;
    document.getElementById("playerCards").innerHTML = playercards;
    document.getElementById("computerCards").innerHTML = computercards;

    function createCard(back: boolean, card: Card, createItemDiv: boolean) {
        var colorn = "none";
        var valuen = "X";
        switch (card.color) {
            case 1: 
                colorn = "spades";
                break;
            case 2: 
                colorn = "heart";
                break;
            case 3:
                colorn = "diams";
                break;
            case 4:
                colorn = "clubs";
                break;  
   }              
   if (card.value < 11) {
       valuen = card.value.toString();
    } else {
        switch (card.value) {
            case 11:
                valuen ="J";
                break;
            case 12:
                valuen ="Q";
                break;
            case 13: 
                valuen ="K";
                break;
        }
    }   

   var carddiv = "";
   if (back) {
       if(createItemDiv) {
           carddiv = carddiv + `<div class="item">`
        }
        carddiv = carddiv +
        `
        <div onclick=clickCard("${card.id}") id="${card.id}" class="stackcard card back"></div>
        <div onclick=clickCard("${card.id}") id="${card.id}" class="stackcard card back cardRot"></div>
        `;
    if(createItemDiv) {
        carddiv = carddiv + `</div>`
    }
   }else {
       if(createItemDiv) {
           carddiv = carddiv + `<div class="item">`
        }
    carddiv = carddiv + 
    `
        <div onclick=clickCard("${card.id}") id="${card.id}" class="stackcard card">
            <div class="value">${valuen}</div>
            <div class="${colorn}"></div>
        </div>
        <div onclick=clickCard("${card.id}") id="${card.id}" class="stackcard card cardRot">
        <div class="value">${valuen}</div>
        <div class="${colorn}"></div>
    </div>
    `;
    if(createItemDiv) {
        carddiv = carddiv + `</div>`
    }
    }
    return carddiv;
}

