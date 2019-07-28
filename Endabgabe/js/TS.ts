 
 // Ich erstelle ein Karteninterface 
 
 interface Karte {
    Farbe: string;
    KartenWert: number;
}

//Festlegung meiner 4 Hauptarrays: 


let Ablagestapel: Karte[] = [];
let Spielerdeck: Karte [] = [];
let Gegnerd: Karte [] = []
let Kartenstapel: Karte[] = [];

//Funktionen: 

window.onload = function (){
    document.getElementById("Kartenstapel").addEventListener("click",KarteNehmen,false);
     GamePlay();   
}

//Funktion, um mein Spiel zum Laufen zu bringen

function GamePlay (){
    KartenGenerierung();
    Kartenstapel = shuffle(Kartenstapel); 
    //ch benutze Shuffle um meinen Stapel zu vermischen 

    //Anschließend lasse ich sie mit dieser Funktion verteilen, i<4 da ich nur 4 Karten an Spieler und Gegner verteile
    for (let i = 0; i < 4; i++){
        Spielerdeck.push(Kartenstapel[i]);
        Gegnerd.push(Kartenstapel[i+4]);
    }

    Ablagestapel.push(Kartenstapel[10]); //Der Ablagestapel 'pusht' 10 KArten 
    Kartenstapel.splice(0,11);

// Konsolenausgaben: 
    console.log(Spielerdeck);
    console.log (Gegnerd);
    console.log (Kartenstapel);  
    
    for(let i = 0; i < Spielerdeck.length; i++) {
        KarteHTML(Spielerdeck[i],"Spielerdeck",i);
    }

    for(let i = 0; i < Gegnerd.length; i++){
        KarteVerdeckt(Gegnerd [i], "Gegnerdeck",i);
    }

    KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
    KarteVerdeckt(Kartenstapel[Kartenstapel.length -1], "Kartenstapel",Kartenstapel.length-1);
}

function KarteHTML (karte:Karte, Zielort: string, index : number){
     let holdingDiv: HTMLElement = document.createElement ("div");
     holdingDiv.setAttribute("class", "Karte"  + " " + karte.Farbe);
     document.getElementById(Zielort).appendChild(holdingDiv);

     let Zahl: HTMLElement = document.createElement ("p");
     Zahl.setAttribute ("class", "Kartenzahl");
     Zahl.innerHTML = "" + karte.KartenWert;
     holdingDiv.appendChild(Zahl);

     if (Zielort == "Spielerdeck"){
         holdingDiv.addEventListener("click", function() {KarteLegen(karte, index)}, false);
     }
}

function KarteVerdeckt(karte: Karte, Zielort: string, index: number) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Verdeckt");
    document.getElementById(Zielort).appendChild(holdingDiv);
}

function KarteLegen(karte :Karte, index: number){
    if(karte.Farbe == Ablagestapel[Ablagestapel.length-1].Farbe || karte.KartenWert ==Ablagestapel[Ablagestapel.length-1].KartenWert){
        Ablagestapel.push(karte);
        Spielerdeck.splice(index, 1);
        updateHTML("Spielerdeck");
        updateHTML("Ablagestapel");
        Gegnerzug();
    }
}

function KarteNehmen(){
    if(checkKarten(Spielerdeck)==false){
        Spielerdeck.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length -1, 1);
        updateHTML("Spielerdeck");
        updateHTML("Kartenstapel");
    }
    if(checkKarten(Spielerdeck)==false){
        Gegnerzug();
    }
}
//Wenn Gegner nicht kann hebt er eine Karte auf 
function Gegnerzug(){
        let i = 0;
        for (i; i<Gegnerd.length;i++){
            if(Gegnerd[i].Farbe == Ablagestapel[Ablagestapel.length-1].Farbe || Gegnerd[i].KartenWert == Ablagestapel[Ablagestapel.length-1].KartenWert){
                Ablagestapel.push(Gegnerd[i]);
                Gegnerd.splice(i, 1);
                updateHTML("Ablagestapel");
                updateHTML("Gegnerdeck");
                break;
            }
        }
        if (i >= Gegnerd.length){

            Gegnerd.push(Kartenstapel[Kartenstapel.length-1]);
            Kartenstapel.splice(Kartenstapel.length-1,1);
            updateHTML("Gegnerdeck");
            updateHTML("Kartenstapel");
            if (Gegnerd[Gegnerd.length-1].Farbe==Ablagestapel[Ablagestapel.length-1].Farbe || Gegnerd[Gegnerd.length-1].KartenWert == Ablagestapel[Ablagestapel.length-1].KartenWert){
                Ablagestapel.push(Gegnerd[Gegnerd.length-1]);
                Gegnerd.splice(Gegnerd.length-1, 1);
                updateHTML("Ablagestapel");
                updateHTML("Gegnerdeck"); 
            }
        }
    

}

function checkKarten(array :Karte[]) :boolean {
    let passendeKarte : boolean = false;
    for (let i=0; i<array.length;i++){
        if(array[i].Farbe == Ablagestapel[Ablagestapel.length-1].Farbe || array[i].KartenWert == Ablagestapel[Ablagestapel.length-1].KartenWert){
            passendeKarte = true;
            break;
        }
    }
    return passendeKarte;
}

function updateHTML(Zielort :string){
    ClearHTML(Zielort);
    if (Zielort =="Spielerdeck"){
        for(let i = 0; i < Spielerdeck.length; i++) {
            KarteHTML(Spielerdeck[i],"Spielerdeck",i);
        }
    }
    if (Zielort == "Gegnerd"){
        for(let i = 0; i < Gegnerd.length; i++){
            KarteVerdeckt(Gegnerd [i], "Gegnerd",i);
        }
    }
    if (Zielort == "Ablagestapel"){
        KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
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

//Funktion für die Generierung meiner Karten 

function KartenGenerierung (){
    let Farbe: string;
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 4; j++){
          
           if (j == 1){
               Farbe = "Gelb"  
           }

           else if (j == 2){
               Farbe = "Blau"
           }

           else if (j == 3){
               Farbe = "Grün"
           }

           else if ( j == 4){
               Farbe = "Rot"
           }

           //Ich ordne meinen Werten von 1-4 der Variablen J eine Farbe zu 
                
            let NewKarte: Karte = {
                Farbe: Farbe,
                KartenWert: i
            }
            Kartenstapel.push(NewKarte); //eine neue Karte wird vom Stapel gezogen
        }
    }
    console.log(Kartenstapel);

}

//Funktion um die Karten zu vermischen 

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

