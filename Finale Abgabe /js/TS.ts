//Ich erstelle ein Interface um ein ungefähres Haupt-Objekt ( in diesem Fall die Karten) zu erstellen

interface Karte {

    KarteBlau: number; 
    KarteRot: number;
    KarteGrün: number;
    KarteGelb: number;
  
}


// ------- Variablen -------- //
//Spiel - Variable: Grundliegende Eigenschaften

var saveImageSrc;
let Bildpfad: string; 
let CardHolder = "Kartenstapel"; //ID für Kartenstapel
let playerName : string = "Spieler1";
let playerObjects: string = "Karten";
let winGame: boolean = false; 







// Arrays 

let allCards: string[] = ["b1.JPG", "b2.JPG", "b3.JPG", "b4.JPG", "b5.JPG", "b6.JPG", "b7.JPG", "b8.JPG", "b9.JPG", "ge1.JPG", "ge2.JPG", "ge3.JPG", "ge4.JPG", "ge5.JPG", "ge6.JPG", "ge7.JPG", "ge8.JPG", "ge9.JPG", "gr1.JPG", "gr2.JPG", "gr3.JPG", "gr4.JPG", "gr5.JPG", "gr6.JPG", "gr7.JPG", "gr8.JPG", "gr9.JPG", "R1.JPG", "R2.JPG", "R3.JPG", "R4.JPG", "R5.JPG", "R6.JPG", "R7.JPG", "R8.JPG", "R9.JPG"]
let PushArray: number[] = [];
let CardArray = Card[] = [];

let 





// ----------- Funktionen ----------- //
window.onload = function () {
    document.getElementById("Kartelegen").addEventListener("click", generateCard, false);
    document.getElementById("Karteziehen").addEventListener("click", getnewcard);
    document.getElementById("Kartenausteilen").addEventListener("click", newgame);
    document.getElementById("Stapelneumischen").addEventListener("click", mixnew);

};


//fügt demn Spieler neue Items hinzu
function updatecard(neuesItem: string) {
    playerItems += ", " + neuesItem;
}

//Funktion: Neue Karte generieren//

function generateCard () {
    let tempRandom = getRNGNumber (0) + 1; //Eine Karte wird ausgeteilt, wenn man auf den Stapel klickt
    if (tempRandom == 1) {
        console.log("");
        console.log("Eine neue Karte");   
}
