// Ich erstelle ein Karteninterface 
//Festlegung meiner 4 Hauptarrays:
let Kartenstapel = [];
let Ablagestapel = [];
let Gegnerdeck = [];
let Spielerdeck = [];
//Funktionen
window.onload = function () {
    document.getElementById("Kartenstapel").addEventListener("click", takeCard, false);
    GamePlay();
};
// Funktion Gameplay um Spiel zu starten
function GamePlay() {
    generateCards();
    Kartenstapel = shuffle(Kartenstapel);
    //Funktion Shuffle (siehe etwas weiter unten) um Karten durchzumischen
    //Spielerkarten werden verteilt:
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
        KarteHTML(Spielerdeck[i], "Spielerdeck", i);
    }
    for (let i = 0; i < Gegnerdeck.length; i++) {
        KarteVerdeckt(Gegnerdeck[i], "Gegnerdeck", i);
    }
    KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel", Ablagestapel.length - 1);
    KarteVerdeckt(Kartenstapel[Kartenstapel.length - 1], "Kartenstapel", Kartenstapel.length - 1);
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
function KarteHTML(karte, Zielort, index) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + karte.colorC);
    document.getElementById(Zielort).appendChild(holdingDiv);
    let Zahl = document.createElement("p");
    Zahl.setAttribute("class", "Kartenzahl");
    Zahl.innerHTML = "" + karte.valueC;
    holdingDiv.appendChild(Zahl);
    if (Zielort == "Spielerdeck") {
        holdingDiv.addEventListener("click", function () { KarteLegen(karte, index); }, false);
    }
}
function KarteVerdeckt(karte, Zielort, index) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Verdeckt");
    document.getElementById(Zielort).appendChild(holdingDiv);
}
function KarteLegen(karte, index) {
    if (karte.colorC == Ablagestapel[Ablagestapel.length - 1].colorC || karte.valueC == Ablagestapel[Ablagestapel.length - 1].valueC) {
        Ablagestapel.push(karte);
        Spielerdeck.splice(index, 1);
        updateHTML("Spielerdeck");
        updateHTML("Ablagestapel");
        Gegnerzug();
    }
}
function takeCard() {
    if (checkKarten(Spielerdeck) == false) {
        Spielerdeck.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length - 1, 1);
        updateHTML("Spielerdeck");
        updateHTML("Kartenstapel");
    }
    if (checkKarten(Spielerdeck) == false) {
        Gegnerzug();
    }
}
function Gegnerzug() {
    //Wenn Gegner nicht legen kann, nimmt er Karte vom Kartenstapel
    let i = 0;
    for (i; i < Gegnerdeck.length; i++) {
        if (Gegnerdeck[i].colorC == Ablagestapel[Ablagestapel.length - 1].colorC || Gegnerdeck[i].valueC == Ablagestapel[Ablagestapel.length - 1].valueC) {
            Ablagestapel.push(Gegnerdeck[i]);
            Gegnerdeck.splice(i, 1);
            updateHTML("Ablagestapel");
            updateHTML("Gegnerdeck"); //Gegnerdeck und Ablagestapel werden nach Zug des Gegners geupdatet 
            break;
        }
    }
    if (i >= Gegnerdeck.length) {
        Gegnerdeck.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length - 1, 1);
        updateHTML("Gegnerdeck");
        updateHTML("Kartenstapel");
        if (Gegnerdeck[Gegnerdeck.length - 1].colorC == Ablagestapel[Ablagestapel.length - 1].colorC || Gegnerdeck[Gegnerdeck.length - 1].valueC == Ablagestapel[Ablagestapel.length - 1].valueC) {
            Ablagestapel.push(Gegnerdeck[Gegnerdeck.length - 1]);
            Gegnerdeck.splice(Gegnerdeck.length - 1, 1);
            updateHTML("Ablagestapel");
            updateHTML("Gegnerdeck");
        }
    }
}
function checkKarten(array) {
    let passendeKarte = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].colorC == Ablagestapel[Ablagestapel.length - 1].colorC || array[i].valueC == Ablagestapel[Ablagestapel.length - 1].valueC) {
            passendeKarte = true;
            break;
        }
    }
    return passendeKarte;
}
function updateHTML(Zielort) {
    ClearHTML(Zielort);
    if (Zielort == "Spielerdeck") {
        for (let i = 0; i < Spielerdeck.length; i++) {
            KarteHTML(Spielerdeck[i], "Spielerdeck", i);
        }
    }
    if (Zielort == "Gegnerdeck") {
        for (let i = 0; i < Gegnerdeck.length; i++) {
            KarteVerdeckt(Gegnerdeck[i], "Gegnerdeck", i);
        }
    }
    if (Zielort == "Ablagestapel") {
        KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel", Ablagestapel.length - 1);
    }
    if (Zielort == "Kartenstapel") {
        KarteVerdeckt(Kartenstapel[Kartenstapel.length - 1], "Kartenstapel", Kartenstapel.length - 1);
    }
}
function ClearHTML(Zielort) {
    let Element = document.getElementById(Zielort);
    while (Element.firstChild) {
        Element.removeChild(Element.firstChild);
    }
}
//Funktion um neue Karten zu generieren. Dabei weise ich meiner Variable j Farben von 1-4 zu, else if Schleife
function generateCards() {
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
            let NewKarte = {
                colorC: Farbe,
                valueC: i //i als variable für den Wert einer Karte
            };
            Kartenstapel.push(NewKarte); //Push-Befehl, um neue Karte vom Stapel zu bekommen
        }
    }
    console.log(Kartenstapel);
}
//# sourceMappingURL=TS.js.map