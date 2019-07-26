// 1. Interface einer Karte erstellen//
// 2. meine 4 Arrays festlegen
let Kartenstapel = [];
let Ablagestapel = [];
let Gegner = [];
let Spieler = [];
window.onload = function () {
    document.getElementById("Kartenstapel").addEventListener("click", KarteNehmen, false);
    GamePlay();
};
function GamePlay() {
    KartenGenerierung();
    Kartenstapel = shuffle(Kartenstapel); //Karten werden gemischt
    //Spielerkarten werden verteilt:
    for (let i = 0; i < 4; i++) {
        Spieler.push(Kartenstapel[i]);
        Gegner.push(Kartenstapel[i + 4]);
    }
    Ablagestapel.push(Kartenstapel[10]);
    Kartenstapel.splice(0, 11);
    console.log(Spieler);
    console.log(Gegner);
    console.log(Kartenstapel);
    for (let i = 0; i < Spieler.length; i++) {
        KarteHTML(Spieler[i], "Spielerdeck", i);
    }
    for (let i = 0; i < Gegner.length; i++) {
        KarteVerdeckt(Gegner[i], "Gegnerdeck", i);
    }
    KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel", Ablagestapel.length - 1);
    KarteVerdeckt(Kartenstapel[Kartenstapel.length - 1], "Kartenstapel", Kartenstapel.length - 1);
}
function KarteHTML(karte, Zielort, index) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + karte.KartenFarbe);
    document.getElementById(Zielort).appendChild(holdingDiv);
    let Zahl = document.createElement("p");
    Zahl.setAttribute("class", "Kartenzahl");
    Zahl.innerHTML = "" + karte.KartenWert;
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
    if (karte.KartenFarbe == Ablagestapel[Ablagestapel.length - 1].KartenFarbe || karte.KartenWert == Ablagestapel[Ablagestapel.length - 1].KartenWert) {
        Ablagestapel.push(karte);
        Spieler.splice(index, 1);
        updateHTML("Spielerdeck");
        updateHTML("Ablagestapel");
        Gegnerzug();
    }
}
function KarteNehmen() {
    if (checkKarten(Spieler) == false) {
        Spieler.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length - 1, 1);
        updateHTML("Spielerdeck");
        updateHTML("Kartenstapel");
    }
    if (checkKarten(Spieler) == false) {
        Gegnerzug();
    }
}
function Gegnerzug() {
    //Wenn Gegner nicht legen kann, nimmt er Karte vom Kartenstapel
    let i = 0;
    for (i; i < Gegner.length; i++) {
        if (Gegner[i].KartenFarbe == Ablagestapel[Ablagestapel.length - 1].KartenFarbe || Gegnerdeck[i].KartenWert == Ablagestapel[Ablagestapel.length - 1].KartenWert) {
            Ablagestapel.push(Gegner[i]);
            Gegner.splice(i, 1);
            updateHTML("Ablagestapel");
            updateHTML("Gegnerdeck");
            break;
        }
    }
    if (i >= Gegner.length) {
        Gegner.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length - 1, 1);
        updateHTML("Gegnerdeck");
        updateHTML("Kartenstapel");
        if (Gegner[Gegner.length - 1].KartenFarbe == Ablagestapel[Ablagestapel.length - 1].KartenFarbe || Gegnerdeck[Gegnerdeck.length - 1].KartenWert == Ablagestapel[Ablagestapel.length - 1].KartenWert) {
            Ablagestapel.push(Gegner[Gegner.length - 1]);
            Gegner.splice(Gegner.length - 1, 1);
            updateHTML("Ablagestapel");
            updateHTML("Gegnerdeck");
        }
    }
}
function checkKarten(array) {
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
    if (Zielort == "Spielerdeck") {
        for (let i = 0; i < Spieler.length; i++) {
            KarteHTML(Spieler[i], "Spielerdeck", i);
        }
    }
    if (Zielort == "Gegner") {
        for (let i = 0; i < Gegner.length; i++) {
            KarteVerdeckt(Gegner[i], "Gegnerdeck", i);
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
            let NewKarte = {
                KartenFarbe: Farbe,
                KartenWert: i
            };
            Kartenstapel.push(NewKarte);
        }
    }
    console.log(Kartenstapel);
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
//# sourceMappingURL=TS.js.map