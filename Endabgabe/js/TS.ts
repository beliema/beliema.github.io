 
 // Ich erstelle ein Karteninterface 
 
<<<<<<< HEAD
 interface card {
    colorC: string;
    valueC: number;
=======
 interface Karte {
    KartenFarbe: string;
    KartenWert: number;
>>>>>>> parent of c0c8c78...  ,
}

//Festlegung meiner 4 Hauptarrays:

let Kartenstapel: card[] = [];
let Ablagestapel: card[] = [];
let Gegnerdeck: card [] = [];
let Spielerdeck: card [] = [];

//Funktionen

window.onload = function (){
    document.getElementById("Kartenstapel").addEventListener("click",KarteNehmen,false);
     GamePlay();   
}

// Funktion Gameplay um Spiel zu starten
function GamePlay (){
<<<<<<< HEAD
    generateCards(); 
    Kartenstapel = shuffle(Kartenstapel); 
    //Funktion Shuffle (siehe etwas weiter unten) um Karten durchzumischen bevor das Spiel beginnt
=======
    KartenGenerierung();
    Kartenstapel = shuffle(Kartenstapel); 
    //Funktion Shuffle (siehe unten) um Karten durchzumischen
>>>>>>> parent of c0c8c78...  ,

    //Spielerkarten werden verteilt:
    for (let i = 0; i < 4; i++){
        Spielerdeck.push(Kartenstapel[i]);
        Gegnerdeck.push(Kartenstapel[i+4]);
    }

    Ablagestapel.push(Kartenstapel[10]);
    Kartenstapel.splice(0,11);

    console.log(Spielerdeck);
    console.log (Gegnerdeck);
    console.log (Kartenstapel);  
    
    for(let i = 0; i < Spielerdeck.length; i++) {
        CardHTML(Spielerdeck[i],"Spielerdeck",i);
    }

    for(let i = 0; i < Gegnerdeck.length; i++){
        KarteBack(Gegnerdeck [i], "Gegnerdeck",i);
    }

    CardHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
    KarteBack(Kartenstapel[Kartenstapel.length -1], "Kartenstapel",Kartenstapel.length-1);
}

<<<<<<< HEAD
//Funktion um meine Karten zufällig durchzumischen

function shuffle(array : card[]){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;

        temporaryValue = array [currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function KarteBack(karte: card, Zielort: string, index: number) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Back");
    document.getElementById(Zielort).appendChild(holdingDiv);
}

function CardHTML (karte:card, Zielort: string, index : number){
=======
function KarteHTML (karte:Karte, Zielort: string, index : number){
>>>>>>> parent of c0c8c78...  ,
     let holdingDiv: HTMLElement = document.createElement ("div");
     holdingDiv.setAttribute("class", "Karte"  + " " + karte.KartenFarbe);
     document.getElementById(Zielort).appendChild(holdingDiv);

     let Zahl: HTMLElement = document.createElement ("p");
     Zahl.setAttribute ("class", "Kartenzahl");
     Zahl.innerHTML = "" + karte.KartenWert;
     holdingDiv.appendChild(Zahl);

     if (Zielort == "Spielerdeck"){
         holdingDiv.addEventListener("click", function() {layCard(karte, index)}, false);
     }
}

<<<<<<< HEAD

function takeCard(){
    if(checkCards(Spielerdeck)==false){
=======
function KarteVerdeckt(karte: Karte, Zielort: string, index: number) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Verdeckt");
    document.getElementById(Zielort).appendChild(holdingDiv);
}

function KarteLegen(karte :Karte, index: number){
    if(karte.KartenFarbe == Ablagestapel[Ablagestapel.length-1].KartenFarbe || karte.KartenWert ==Ablagestapel[Ablagestapel.length-1].KartenWert){
        Ablagestapel.push(karte);
        Spielerdeck.splice(index, 1);
        updateHTML("Spielerdeck");
        updateHTML("Ablagestapel");
        Gegnerzug();
    }
}

function KarteNehmen(){
    if(checkKarten(Spielerdeck)==false){
>>>>>>> parent of c0c8c78...  ,
        Spielerdeck.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length -1, 1);
        updateHTML("Spielerdeck");
        updateHTML("Kartenstapel");
    }
    if(checkCards(Spielerdeck)==false){
        Gegnerzug();
    }
}

function Gegnerzug(){
    //Wenn Gegner nicht legen kann, nimmt er Karte vom Kartenstapel
        let i = 0;
        for (i; i<Gegnerdeck.length;i++){
            if(Gegnerdeck[i].KartenFarbe == Ablagestapel[Ablagestapel.length-1].KartenFarbe || Gegnerdeck[i].KartenWert == Ablagestapel[Ablagestapel.length-1].KartenWert){
                Ablagestapel.push(Gegnerdeck[i]);
                Gegnerdeck.splice(i, 1);
                updateHTML("Ablagestapel");
                updateHTML("Gegnerdeck"); //Gegnerdeck und Ablagestapel werden nach Zug des Gegners geupdatet 
                break; // break zum Beenden der for-Schleife
            }
        }
        if (i >= Gegnerdeck.length){

            Gegnerdeck.push(Kartenstapel[Kartenstapel.length-1]);
            Kartenstapel.splice(Kartenstapel.length-1,1);
            updateHTML("Gegnerdeck");
            updateHTML("Kartenstapel");
            if (Gegnerdeck[Gegnerdeck.length-1].KartenFarbe==Ablagestapel[Ablagestapel.length-1].KartenFarbe || Gegnerdeck[Gegnerdeck.length-1].KartenWert == Ablagestapel[Ablagestapel.length-1].KartenWert){
                Ablagestapel.push(Gegnerdeck[Gegnerdeck.length-1]);
                Gegnerdeck.splice(Gegnerdeck.length-1, 1);
                updateHTML("Ablagestapel");
                updateHTML("Gegnerdeck"); 
            }
        }
    

}

function layCard(karte :card, index: number){
    if(karte.colorC == Ablagestapel[Ablagestapel.length-1].colorC || karte.valueC ==Ablagestapel[Ablagestapel.length-1].valueC){
        Ablagestapel.push(karte);
        Spielerdeck.splice(index, 1);
        updateHTML("Spielerdeck");
        updateHTML("Ablagestapel");
        Gegnerzug();
    }
}

function checkCards(array :card[]) :boolean {
    let passendeKarte : boolean = false;
    for (let i=0; i<array.length;i++){
        if(array[i].KartenFarbe == Ablagestapel[Ablagestapel.length-1].KartenFarbe || array[i].KartenWert == Ablagestapel[Ablagestapel.length-1].KartenWert){
            passendeKarte = true;
            break;
        }
    }
    return passendeKarte;
}

function updateHTML(Zielort :string){
    ClearHTML(Zielort);
    if (Zielort == "Gegnerdeck"){
        for(let i = 0; i < Gegnerdeck.length; i++){
            KarteBack(Gegnerdeck [i], "Gegnerdeck",i);
        }
    }
    if (Zielort =="Spielerdeck"){
        for(let i = 0; i < Spielerdeck.length; i++) {
            CardHTML(Spielerdeck[i],"Spielerdeck",i);
        }
    }
    
    if (Zielort == "Ablagestapel"){
        CardHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
    }
    if (Zielort == "Kartenstapel"){
        KarteBack(Kartenstapel[Kartenstapel.length-1], "Kartenstapel",Kartenstapel.length-1);
    }
}

function ClearHTML(Zielort: string){
    let Element: HTMLElement = document.getElementById(Zielort);
    while (Element.firstChild){
        Element.removeChild(Element.firstChild);
    }
}

//Funktion um neue Karten zu generieren. Dabei weise ich meiner Variable J Farben von 1-4 zu, else if Schleife
function KartenGenerierung (){
    let Farbe: string;
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 4; j++){
          
           if (j == 1){
               Farbe = "Blau"  
           }

           else if (j == 2){
               Farbe = "Rot"
           }

           else if (j == 3){
               Farbe = "Gelb"
           }

           else if ( j == 4){
               Farbe = "Grün"
           }
                
<<<<<<< HEAD
            let NewCard: card = {
                colorC: Farbe,
                valueC: i //i als variable für den Wert einer Karte
            }
            Kartenstapel.push(NewCard); //Push-Befehl, um neue Karte vom Stapel zu bekommen
=======
            let NewKarte: Karte = {
                KartenFarbe: Farbe,
                KartenWert: i
            }
            Kartenstapel.push(NewKarte);
>>>>>>> parent of c0c8c78...  ,
        }
    }
    console.log(Kartenstapel);

}

//Funktion um meine Karten zufällig durchzumischen

function shuffle(array : Karte[]){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;

        temporaryValue = array [currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

