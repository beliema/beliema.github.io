//Ich erstelle ein Interface um ein ungefähres Haupt-Objekt ( in diesem Fall die Karten) zu erstellen
interface Karte;

    name: string;
  
    blau: number;
    rot: number;
    grün: number;
    gelb: number;
  
}


// ------- Variablen -------- //



// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.

let Karte: string[] = ["Ratte", "Ed von Schleck", "Ungeziefer", "Kommulitonin", "Beuteltier", "Eichhörnchen"]; // length = 3, da 3 Einträge. Von 0-2.

let Bildquellen: string[] = ["b1.JPG", "b2.JPG", "b3.JPG", "b4.JPG", "b5.JPG", "b6.JPG", "b7.JPG", "b8.JPG", "b9.JPG", "ge1.JPG", "ge2.JPG", "ge3.JPG", "ge4.JPG", "ge5.JPG", "ge6.JPG", "ge7.JPG", "ge8.JPG", "ge9.JPG", "gr1.JPG", "gr2.JPG", "gr3.JPG", "gr4.JPG", "gr5.JPG", "gr6.JPG", "gr7.JPG", "gr8.JPG", "gr9.JPG", "R1.JPG", "R2.JPG", "R3.JPG", "R4.JPG", "R5.JPG", "R6.JPG", "R7.JPG", "R8.JPG", "R9.JPG"]

let PushArray: number[]=[];

let monsterArray: Monster[] = [];

// ----------- Funktionen ----------- //


//fügt demn Spieler neue Items hinzu
function updatecard(neuesItem: string) {
    playerItems += ", " + neuesItem;
}



