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

let Bildquellen: string[] = ["", "loewe.png", "Monster1.png", "Monster3.png", "pinguin.png", "Monster4.jpg"]

let PushArray: number[]=[];

let monsterArray: Monster[] = [];

// ----------- Funktionen ----------- //


//fügt demn Spieler neue Items hinzu
function updatecard(neuesItem: string) {
    playerItems += ", " + neuesItem;
}



