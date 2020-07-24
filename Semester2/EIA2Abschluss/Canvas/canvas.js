var AS_Zauberbild;
(function (AS_Zauberbild) {
    console.log("Canvas wird geladen");
    AS_Zauberbild.drawing = true;
    AS_Zauberbild.farbe = document.querySelector("#Farbauswahl");
    let symbols = [];
    AS_Zauberbild.moveables = [];
    let halbkreis = [];
    let herz = [];
    let hexagon = [];
    let kreis = [];
    let raute = [];
    let background;
    window.addEventListener("load", handleLoadCanvas);
    function handleLoadCanvas(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        AS_Zauberbild.crc2 = canvas.getContext("2d");
        let symbole = document.getElementById("Symbol");
        symbole.addEventListener("click", saveSymbol);
        createSymbols(new AS_Zauberbild.Vector(0, 0), 1);
        setInterval(frame, 100);
    }
    AS_Zauberbild.handleLoadCanvas = handleLoadCanvas;
    function saveSymbol(_event) {
        let herzIn = document.getElementById("Herz");
        let rauteIn = document.getElementById("Raute");
        let halbkreisIn = document.getElementById("Halbkreis");
        let kreisIn = document.getElementById("Kreis");
        let hexagonIn = document.getElementById("Hexagon");
        if (herzIn.checked == true) {
            console.log("Herz wird gezeichnet");
            function drawHerz(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let herz = new AS_Zauberbild.Herz(position);
                herz.draw();
                symbols.push(herz);
            }
            ;
        }
        if (rauteIn.checked == true) {
            console.log("Raute wird gezeichnet");
            function drawRaute(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let raute = new AS_Zauberbild.Raute(position);
                raute.draw();
                symbols.push(raute);
            }
            ;
        }
        if (halbkreisIn.checked == true) {
            console.log("Halbkreis wird gezeichnet");
            function drawHalbkreis(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let halbkreis = new AS_Zauberbild.Halbkreis(position);
                halbkreis.draw();
                symbols.push(halbkreis);
            }
            ;
        }
        if (kreisIn.checked == true) {
            console.log("Kreis wird gezeichnet");
            function drawKreis(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let kreis = new AS_Zauberbild.Kreis(position);
                kreis.draw();
                symbols.push(kreis);
            }
            ;
        }
        if (hexagonIn.checked == true) {
            console.log("Hexagon wird gezeichnet");
            function drawHexagon(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let hexagon = new AS_Zauberbild.Hexagon(position);
                hexagon.draw();
                symbols.push(hexagon);
            }
            ;
        }
    }
    function createSymbols(_position, _symbol) {
        //Kreis 
        for (let i = 0; i < _symbol; i++) {
            let x = 50;
            let y = 70;
            let position = new AS_Zauberbild.Vector(x, y);
            let kreis = new AS_Zauberbild.Kreis(position);
            kreis.draw();
            //symbols.push(circle);
            console.log(symbols);
            //Halbkreis 
            for (let i = 0; i < _symbol; i++) {
                let x = 340;
                let y = 20;
                let position = new AS_Zauberbild.Vector(x, y);
                let halbkreis = new AS_Zauberbild.Halbkreis(position);
                halbkreis.draw();
                console.log(symbols);
            }
            //Raute
            for (let i = 0; i < _symbol; i++) {
                let x = 40;
                let y = 240;
                let position = new AS_Zauberbild.Vector(x, y);
                let raute = new AS_Zauberbild.Raute(position);
                raute.draw();
                console.log(symbols);
            }
            //Herz 
            for (let i = 0; i < _symbol; i++) {
                let x = 360;
                let y = 210;
                let position = new AS_Zauberbild.Vector(x, y);
                let herz = new AS_Zauberbild.Herz(position);
                herz.draw();
                console.log(symbols);
            }
            //Hexagon 
            for (let i = 0; i < _symbol; i++) {
                let x = 350;
                let y = 250;
                let position = new AS_Zauberbild.Vector(x, y);
                let herz = new AS_Zauberbild.Herz(position);
                herz.draw();
                console.log(symbols);
            }
        }
        function animation() {
            return setInterval(createSymbols, 100);
        }
        // function shootLaser(_event: MouseEvent): void {
        //    console.log("Symbol wird an dieser Stelle erstellt");
        //    let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        //    let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        //    console.log(asteroidHit);
        //    if (asteroidHit)
        //        breakAsteroid(asteroidHit);
        // }
    }
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=canvas.js.map