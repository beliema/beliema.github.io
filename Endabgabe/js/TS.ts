 
 // Ich erstelle ein Karteninterface 
 
 interface card {
    colorC: string;
    valueC: number;
}

//Festlegung meiner 4 Hauptarrays:

let Kartenstapel: card[] = [];
let Ablagestapel: card[] = [];
let Gegnerdeck: card [] = [];
let Spielerdeck: card [] = [];

//Funktionen

window.onload = function (){
    document.getElementById("Kartenstapel").addEventListener("click",takeCard,false);
     GamePlay();   
}

// Funktion Gameplay um Spiel zu starten
function GamePlay (){
    generateCards();
    Kartenstapel = shuffle(Kartenstapel); 
    //Funktion Shuffle (siehe etwas weiter unten) um Karten durchzumischen

    //Spielerkarten werden verteilt:
    for (let i = 0; i < 4; i++){
        Spielerdeck.push(Kartenstapel[i]);
        Gegnerdeck.push(Kartenstapel[i+4]); // i<4, da ich jeweils 4 Karten an Gegner und Spieler verteile
    }

    Ablagestapel.push(Kartenstapel[10]);
    Kartenstapel.splice(0,11);

//Konsolenangaben
    console.log(Spielerdeck);
    console.log (Kartenstapel); 
    console.log (Gegnerdeck);
 
    
    for(let i = 0; i < Spielerdeck.length; i++) {
        CardHTML(Spielerdeck[i],"Spielerdeck",i);
    }

    for(let i = 0; i < Gegnerdeck.length; i++){
        KarteVerdeckt(Gegnerdeck [i], "Gegnerdeck",i);
    }

    CardHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
    KarteVerdeckt(Kartenstapel[Kartenstapel.length -1], "Kartenstapel",Kartenstapel.length-1);
}

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
function CardHTML (karte:card, Zielort: string, index : number){
     let holdingDiv: HTMLElement = document.createElement ("div");
     holdingDiv.setAttribute("class", "Karte"  + " " + karte.colorC);
     document.getElementById(Zielort).appendChild(holdingDiv);

     let Zahl: HTMLElement = document.createElement ("p");
     Zahl.setAttribute ("class", "Kartenzahl");
     Zahl.innerHTML = "" + karte.valueC;
     holdingDiv.appendChild(Zahl);

     if (Zielort == "Spielerdeck"){
         holdingDiv.addEventListener("click", function() {layCard(karte, index)}, false);
     }
}

function KarteVerdeckt(karte: card, Zielort: string, index: number) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Verdeckt");
    document.getElementById(Zielort).appendChild(holdingDiv);
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

function takeCard(){
    if(checkCards(Spielerdeck)==false){
        Spielerdeck.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length -1, 1);
        updateHTML("Spielerdeck");
        updateHTML("Kartenstapel");
    }
    if(checkCards(Spielerdeck)==false){
        Gegnerzug();
    }
}


function checkCards(array :card[]) :boolean {
    let passendeKarte : boolean = false;
    for (let i=0; i<array.length;i++){
        if(array[i].colorC == Ablagestapel[Ablagestapel.length-1].colorC || array[i].valueC == Ablagestapel[Ablagestapel.length-1].valueC){
            passendeKarte = true;
            break;
        }
    }
    return passendeKarte;
}

function Gegnerzug(){
    //Wenn Gegner nicht legen kann, nimmt er Karte vom Kartenstapel
        let i = 0;
        for (i; i<Gegnerdeck.length;i++){ //i muss größer als die Länge des Gegnerdecks sein 
            if(Gegnerdeck[i].colorC == Ablagestapel[Ablagestapel.length-1].colorC || Gegnerdeck[i].valueC == Ablagestapel[Ablagestapel.length-1].valueC){
                Ablagestapel.push(Gegnerdeck[i]);
                Gegnerdeck.splice(i, 1);
                updateHTML("Ablagestapel");
                updateHTML("Gegnerdeck"); //Gegnerdeck und Ablagestapel werden nach Zug des Gegners geupdatet 
                break;
            }
        }
        if (i >= Gegnerdeck.length){

            Gegnerdeck.push(Kartenstapel[Kartenstapel.length-1]);
            Kartenstapel.splice(Kartenstapel.length-1,1);
            updateHTML("Gegnerdeck");
            updateHTML("Kartenstapel");
            if (Gegnerdeck[Gegnerdeck.length-1].colorC==Ablagestapel[Ablagestapel.length-1].colorC || Gegnerdeck[Gegnerdeck.length-1].valueC == Ablagestapel[Ablagestapel.length-1].valueC){
                Ablagestapel.push(Gegnerdeck[Gegnerdeck.length-1]);
                Gegnerdeck.splice(Gegnerdeck.length-1, 1);
                updateHTML("Ablagestapel");
                updateHTML("Gegnerdeck"); 
            }
        }
    

}

function updateHTML(Zielort :string){
    ClearHTML(Zielort);
    if (Zielort == "Gegnerdeck"){
        for(let i = 0; i < Gegnerdeck.length; i++){
            KarteVerdeckt(Gegnerdeck [i], "Gegnerdeck",i);
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
        KarteVerdeckt(Kartenstapel[Kartenstapel.length-1], "Kartenstapel",Kartenstapel.length-1);
    }
}

function ClearHTML(Zielort: string){
    let Element: HTMLElement = document.getElementById(Zielort);
    while (Element.firstChild){
        Element.removeChild(Element.firstChild);
    }
}

//Funktion um neue Karten zu generieren. Dabei weise ich meiner Variable j Farben von 1-4 zu, else if Schleife
function generateCards (){
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
                
            let NewCard: card = {
                colorC: Farbe,
                valueC: i //i als variable für den Wert einer Karte
            }
            Kartenstapel.push(NewCard); //Push-Befehl, um neue Karte vom Stapel zu bekommen
        }
    }
    console.log(Kartenstapel);

}



