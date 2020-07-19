var AS_Zauberbild;
(function (AS_Zauberbild) {
    console.log("Canvas wird geladen");
    AS_Zauberbild.drawing = true;
    let symbols = [];
    //let halbkreis: Halbkreis[] = [];
    //let herz: Herz [] = [];
    //let hexagon: Hexagon [] = []; 
    //let kreis: Kreis [] = [];
    //let raute: Raute [] = [];
    let background;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        AS_Zauberbild.crc2 = canvas.getContext("2d");
        // createBackground();
        createSymbols();
        // window.setInterval(animate, 20); 
    }
    AS_Zauberbild.handleLoad = handleLoad;
    function createSymbols() {
        let x;
        let y;
        let click;
    }
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=canvas.js.map