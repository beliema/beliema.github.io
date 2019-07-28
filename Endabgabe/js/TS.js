// Ich erstelle ein Karteninterface 
//Festlegung meiner 4 Hauptarrays:
let Kartenstapel = [];
let Ablagestapel = [];
let Gegnerdeck = [];
let Spielerdeck = [];
//Funktionen
window.onload = function () {
    document.getElementById("Kartenstapel").addEventListener("click", KarteNehmen, false);
    GamePlay();
};
// Funktion Gameplay um Spiel zu starten
function GamePlay() {
    generateCards();
    Kartenstapel = shuffle(Kartenstapel);
    //Funktion Shuffle (siehe etwas weiter unten) um Karten durchzumischen bevor das Spiel beginnt
    for (let i = 0; i < 4; i++) {
        Spielerdeck.push(Kartenstapel[i]);
        Gegnerdeck.push(Kartenstapel[i + 4]);
    }
    Ablagestapel.push(Kartenstapel[10]);
    Kartenstapel.splice(0, 11);
    console.log(Spielerdeck);
    console.log(Gegnerdeck);
    console.log(Kartenstapel);
    for (let i = 0; i < Spielerdeck.length; i++) {
        CardHTML(Spielerdeck[i], "Spielerdeck", i);
    }
    for (let i = 0; i < Gegnerdeck.length; i++) {
        KarteBack(Gegnerdeck[i], "Gegnerdeck", i);
    }
    CardHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel", Ablagestapel.length - 1);
    KarteBack(Kartenstapel[Kartenstapel.length - 1], "Kartenstapel", Kartenstapel.length - 1);
}
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function KarteBack(karte, Zielort, index) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Back");
    document.getElementById(Zielort).appendChild(holdingDiv);
}
function CardHTML(karte, Zielort, index) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + karte.KartenFarbe);
    document.getElementById(Zielort).appendChild(holdingDiv);
    let Zahl = document.createElement("p");
    Zahl.setAttribute("class", "Kartenzahl");
    Zahl.innerHTML = "" + karte.KartenWert;
    holdingDiv.appendChild(Zahl);
    if (Zielort == "Spielerdeck") {
        holdingDiv.addEventListener("click", function () { layCard(karte, index); }, false);
    }
}
function takeCard() {
    if (checkCards(Spielerdeck) == false) {
        Spielerdeck.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length - 1, 1);
        updateHTML("Spielerdeck");
        updateHTML("Kartenstapel");
    }
    if (checkCards(Spielerdeck) == false) {
        Gegnerzug();
    }
}
function Gegnerzug() {
    //Wenn Gegner nicht legen kann, nimmt er Karte vom Kartenstapel
    let i = 0;
    for (i; i < Gegnerdeck.length; i++) {
        if (Gegnerdeck[i].KartenFarbe == Ablagestapel[Ablagestapel.length - 1].KartenFarbe || Gegnerdeck[i].KartenWert == Ablagestapel[Ablagestapel.length - 1].KartenWert) {
            Ablagestapel.push(Gegnerdeck[i]);
            Gegnerdeck.splice(i, 1);
            updateHTML("Ablagestapel");
            updateHTML("Gegnerdeck"); //Gegnerdeck und Ablagestapel werden nach Zug des Gegners geupdatet 
            break; // break zum Beenden der for-Schleife
        }
    }
    if (i >= Gegnerdeck.length) {
        Gegnerdeck.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length - 1, 1);
        updateHTML("Gegnerdeck");
        updateHTML("Kartenstapel");
        if (Gegnerdeck[Gegnerdeck.length - 1].KartenFarbe == Ablagestapel[Ablagestapel.length - 1].KartenFarbe || Gegnerdeck[Gegnerdeck.length - 1].KartenWert == Ablagestapel[Ablagestapel.length - 1].KartenWert) {
            Ablagestapel.push(Gegnerdeck[Gegnerdeck.length - 1]);
            Gegnerdeck.splice(Gegnerdeck.length - 1, 1);
            updateHTML("Ablagestapel");
            updateHTML("Gegnerdeck");
        }
    }
}
function layCard(karte, index) {
    if (karte.colorC == Ablagestapel[Ablagestapel.length - 1].colorC || karte.valueC == Ablagestapel[Ablagestapel.length - 1].valueC) {
        Ablagestapel.push(karte);
        Spielerdeck.splice(index, 1);
        updateHTML("Spielerdeck");
        updateHTML("Ablagestapel");
        Gegnerzug();
    }
}
function checkCards(array) {
    let passendeKarte = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].KartenFarbe == Ablagestapel[Ablagestapel.length - 1].KartenFarbe || array[i].KartenWert == Ablagestapel[Ablagestapel.length - 1].KartenWert) {
            passendeKarte = true;
            break;
        }
    }
    return passendeKarte;
}
function updateHTML(Zielort) {
    ClearHTML(Zielort);
    if (Zielort == "Gegnerdeck") {
        for (let i = 0; i < Gegnerdeck.length; i++) {
            KarteBack(Gegnerdeck[i], "Gegnerdeck", i);
        }
    }
    if (Zielort == "Spielerdeck") {
        for (let i = 0; i < Spielerdeck.length; i++) {
            CardHTML(Spielerdeck[i], "Spielerdeck", i);
        }
    }
    if (Zielort == "Ablagestapel") {
        CardHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel", Ablagestapel.length - 1);
    }
    if (Zielort == "Kartenstapel") {
        KarteBack(Kartenstapel[Kartenstapel.length - 1], "Kartenstapel", Kartenstapel.length - 1);
    }
}
function ClearHTML(Zielort) {
    let Element = document.getElementById(Zielort);
    while (Element.firstChild) {
        Element.removeChild(Element.firstChild);
    }
}
//Funktion um neue Karten zu generieren. Dabei weise ich meiner Variable J Farben von 1-4 zu, else if Schleife
function KartenGenerierung() {
    let Farbe;
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 4; j++) {
            if (j == 1) {
                Farbe = "Blau";
            }
            else if (j == 2) {
                Farbe = "Rot";
            }
            else if (j == 3) {
                Farbe = "Gelb";
            }
            else if (j == 4) {
                Farbe = "Grün";
            }
            let NewCard = {
                colorC: Farbe,
                valueC: i //i als variable für den Wert einer Karte
            };
            Kartenstapel.push(NewCard); //Push-Befehl, um neue Karte vom Stapel zu bekommen
        }
    }
    console.log(Kartenstapel);
}
//Funktion um meine Karten zufällig durchzumischen
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
//# sourceMappingURL=TS.js.map