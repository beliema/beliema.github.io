//Ich erstelle ein Interface um ein ungefähres Haupt-Objekt ( in diesem Fall die Karten) zu erstellen
// ------- Variablen -------- //
//Spiel - Variable: Grundliegende Eigenschaften
var saveImageSrc;
let Bildpfad;
let cardHolder = "Kartenstapel"; //ID für Kartenstapel
let playerName = "Spieler1";
let playerObjects = "Karten";
let playerGegner = "Spieler2";
let winGame = false;
let MaxSpieler = 2;
let MaxKarten = 36;
const Anfangskarten = 5;
// Arrays 
let prefix = ["Rot-", "Grün-", "Blau-", "Gelb-"]; //4 Prefixe für die vier Farben
let cardNumber = ["Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun"]; //Zahlen von 1-9 
let Bildquellen = ["b1.JPG", "b2.JPG", "b3.JPG", "b4.JPG", "b5.JPG", "b6.JPG", "b7.JPG", "b8.JPG", "b9.JPG", "ge1.JPG", "ge2.JPG", "ge3.JPG", "ge4.JPG", "ge5.JPG", "ge6.JPG", "ge7.JPG", "ge8.JPG", "ge9.JPG", "gr1.JPG", "gr2.JPG", "gr3.JPG", "gr4.JPG", "gr5.JPG", "gr6.JPG", "gr7.JPG", "gr8.JPG", "gr9.JPG", "R1.JPG", "R2.JPG", "R3.JPG", "R4.JPG", "R5.JPG", "R6.JPG", "R7.JPG", "R8.JPG", "R9.JPG"];
let AllCards = ["1Blau", "2Blau", "3Blau", "4Blau", "5Blau", "6Blau", "7Blau", "8Blau", "9Blau", "1Gelb", "2Gelb", "3Gelb", "4Gelb", "5Gelb", "6Gelb", "7Gelb", "8Gelb", "9Gelb", "1Grün", "2Grün", "3Grün", "4Grün", "5Grün", "6Grün", "7Grün", "8Grün", "9Grün", "1Rot", "2Rot", "3Rot", "4Rot", "5Rot", "6Rot", "7Rot", "8Rot", "9Rot"];
let PushArray = [];
let cardArray = card[] = [];
// Arrays für vier Bereiche 
let SpielerHand = ["Eins", "Zwei", "Drei", "Vier", "Fünf"];
let KartenZiehstapel = [];
let KartenGegner = ["Eins", "Zwei", "Drei", "Vier", "Fünf"];
let KartenAblagestapel = [];
//Kartenerklärung
let public, static;
let KartenZiehstapel;
() => {
    string[];
    KartenZiehstapel = new String[36];
    KartenZiehstapel[0] = "Gelb 1";
    KartenZiehstapel[1] = "Gelb 2";
    KartenZiehstapel[2] = "Gelb 3";
    KartenZiehstapel[3] = "Gelb 4";
    KartenZiehstapel[4] = "Gelb 5";
    KartenZiehstapel[5] = "Gelb 6";
    KartenZiehstapel[6] = "Gelb 7";
    KartenZiehstapel[7] = "Gelb 8";
    KartenZiehstapel[8] = "Gelb 9";
    KartenZiehstapel[9] = "Blau 1";
    KartenZiehstapel[10] = "Blau 2";
    KartenZiehstapel[11] = "Blau 3";
    KartenZiehstapel[12] = "Blau 4";
    KartenZiehstapel[13] = "Blau 5";
    KartenZiehstapel[14] = "Blau 6";
    KartenZiehstapel[15] = "Blau 7";
    KartenZiehstapel[16] = "Blau 8";
    KartenZiehstapel[17] = "Blau 9";
    KartenZiehstapel[18] = "Grün 1";
    KartenZiehstapel[19] = "Grün 2";
    KartenZiehstapel[20] = "Grün 3";
    KartenZiehstapel[21] = "Grün 4";
    KartenZiehstapel[22] = "Grün 5";
    KartenZiehstapel[23] = "Grün 6";
    KartenZiehstapel[24] = "Grün 7";
    KartenZiehstapel[25] = "Grün 8";
    KartenZiehstapel[26] = "Grün 9";
    KartenZiehstapel[27] = "Rot 1";
    KartenZiehstapel[28] = "Rot 2";
    KartenZiehstapel[29] = "Rot 3";
    KartenZiehstapel[30] = "Rot 4";
    KartenZiehstapel[31] = "Rot 5";
    KartenZiehstapel[32] = "Rot 6";
    KartenZiehstapel[33] = "Rot 7";
    KartenZiehstapel[34] = "Rot 8";
    KartenZiehstapel[35] = "Rot 9";
    Intl;
    i;
    for (i = 0; i < 5; i++) {
        string;
        randomKarten;
        Random;
        random = new Random();
        randomKarten = KartenZiehstapel[Random.nextInt(36) - 1];
        // ----------- Funktionen ----------- //
        window.onload = function () {
            document.getElementById("Kartelegen").addEventListener("click", generateCard, false);
            document.getElementById("Karteziehen").addEventListener("click", getnewcard);
            document.getElementById("Kartenausteilen").addEventListener("click", newgame);
            document.getElementById("Stapelneumischen").addEventListener("click", mixnew);
        };
        //Funktion: Neue Karte generieren//
        function newgame() {
            let generateCard = 36;
        }
        function getnewcard() {
        }
        function mixnew() {
        }
        function generateCard() {
            let random = getRNGNumber(36) + 1; //generiert bis zu 5 Karten
            for (let i = 0; i < random; i++) //eine Schleife mit der Endfunktion i
             {
                let newCard = generateCard();
                let newObject = generateObject();
                let Picadress = Bildpfad;
                let newCard = {
                    cardColor: newcardColor,
                    cardNumber: newcardNumber,
                    object: newObject,
                    picAdress: newPicadress,
                };
                cardArray.push(newCard);
                console.log(cardArray[cardArray.length - 1].);
            }
            updateHTML();
        }
    }
};
//# sourceMappingURL=TS.js.map