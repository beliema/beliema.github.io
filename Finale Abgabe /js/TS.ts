// Monster sind vielfältig und können sehr unterschiedlich sein. Dennoch werden sie durch allgemeine Attribute, wie Name und Lebenspunkte, vereint.
// Deshalb wird hier ein interface genutzt!
// Ein interface erlaubt das erstellen von einem ungefährem Haupt-Objekt.
// Object = Komplexer Datentyp auf Grundlage primitiver Datentypen

interface Karte;

    name: string;
  
    blau: number;
    rot: number;
    grün: number;
    gelb: number;
  
}


// ------- Variablen -------- //
let saveImageSrc: string;
let monsterHolder: string = "monsterHoldingCell";                                  // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let playerName: string = "Der Rächer für unordentliche Jugendzimmer nach einem Nervenzusammenbruch ";                                            // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP: number = 722 * 2;    
let playerLvl: number = 1;                                                          // Stellt die gesammelte Erfahrung des Spielers dar.                                                                     ////////////////////////////////wichtig, die playerXp darf nicht null sein... sonst kann man nicht den neuen wert aufaddieren
let playerXPperLevel: number = 722;                                                // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
let playerItems: string = "Macarena";
let schonGewonnen: boolean = false;


// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix: string[] = ["Wald-", "Seuchen-", "Uralte(s) ", "Gift-", "Brennende(s) ", "Kniescheibenzertrümmernde(s) ", "furchtlose(s)", "blutrünstige(s)", "Schlangen-", "hopsende(s)", "Eisverkaufende(s)"]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName: string[] = ["Ratte", "Ed von Schleck", "Ungeziefer", "Kommulitonin", "Beuteltier", "Eichhörnchen"]; // length = 3, da 3 Einträge. Von 0-2.
let suffix: string[] = [" des Verderbens", " aus der Hölle", " der Lethalität", " mit Rheuma", " der Redundanz", " der Zerberstung", " der Apokalypse", " des Todes", " aus Baden", " des Rolandus", " aus der Truhe"]; // length = 6, da hier 6 Einträge sind. Von 0-5.

let monsterModifers: string[] = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "Verfehlt häufig", "Prokrastiniert", "mag Kirschen nur in Kombination mit Brokkolie", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.

let Items: string[] = ["Stock", "Käse", "Pfanne", "Baked Beanz", "Schnitzel", "Zigarettenstummel", "Pantoffel", "Türklinke", "Aschenbecher"];                       //Was das jeweilige Monster für ein Utensil bei sich trägt

let Bildquellen: string[] = ["elefant.png", "loewe.png", "Monster1.png", "Monster3.png", "pinguin.png", "Monster4.jpg"]

let PushArray: number[]=[];

let monsterArray: Monster[] = [];

// ----------- Funktionen ----------- //


//fügt demn Spieler neue Items hinzu
function updatecard(neuesItem: string) {
    playerItems += ", " + neuesItem;
}



