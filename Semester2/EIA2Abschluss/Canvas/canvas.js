var AS_Zauberbild;
(function (AS_Zauberbild) {
    console.log("Canvas wird geladen");
    AS_Zauberbild.drawing = true;
    AS_Zauberbild.farbe = document.querySelector("#Farbauswahl");
    let symbols = [];
    //let halbkreis: Halbkreis[] = [];
    //let herz: Herz [] = [];
    //let hexagon: Hexagon [] = []; 
    //let kreis: Kreis [] = [];
    //let raute: Raute [] = [];
    let background;
    let symbole = document.getElementById("Symbol");
    window.addEventListener("load", handleLoadCanvas);
    symbole.addEventListener("click", createSymbols);
    function handleLoadCanvas(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        AS_Zauberbild.crc2 = canvas.getContext("2d");
    }
    AS_Zauberbild.handleLoadCanvas = handleLoadCanvas;
    function createSymbols(_event) {
        let herz = document.getElementById("Herz");
        let raute = document.getElementById("Raute");
        let halbkreis = document.getElementById("Halbkreis");
        let kreis = document.getElementById("Kreis");
        let hexagon = document.getElementById("Hexagon");
        if (herz.checked == true) {
            console.log("Herz wird gezeichnet");
            // function drawHerz(); 
        }
        if (raute.checked == true) {
            console.log("Herz wird gezeichnet");
            // function drawRaute(); 
        }
    }
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=canvas.js.map