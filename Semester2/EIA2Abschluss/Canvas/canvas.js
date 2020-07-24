var AS_Zauberbild;
(function (AS_Zauberbild) {
    console.log("Canvas wird geladen");
    AS_Zauberbild.drawing = true;
    AS_Zauberbild.farbe = document.querySelector("#Farbauswahl");
    let shapes = [];
    //   let moveables: Moveable [] = []; 
    let semicircle = [];
    let heart = [];
    let hexagon = [];
    let circle = [];
    let rhombus = [];
    let background;
    window.addEventListener("load", handleLoadCanvas);
    function handleLoadCanvas(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        AS_Zauberbild.crc2 = canvas.getContext("2d");
        let symbole = document.getElementById("Symbol");
        symbole.addEventListener("click", saveSymbol);
        //   canvas.addEventListener("mouseup", createSymbols);
        createSymbols(new AS_Zauberbild.Vector(0, 0), 1);
        //    setInterval(frame, 100); 
    }
    AS_Zauberbild.handleLoadCanvas = handleLoadCanvas;
    function saveSymbol(_event) {
        let heartIn = document.getElementById("Herz");
        let rhombusIn = document.getElementById("Raute");
        let semicircleIn = document.getElementById("Halbkreis");
        let circleIn = document.getElementById("Kreis");
        let hexagonIn = document.getElementById("Hexagon");
        if (heartIn.checked == true) {
            console.log("Herz wird gezeichnet");
            function drawHeart(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let heart = new AS_Zauberbild.Heart(position);
                heart.draw();
                shapes.push(heart);
            }
            ;
        }
        else if (rhombusIn.checked == true) {
            console.log("Raute wird gezeichnet");
            function drawRhombus(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let rhombus = new AS_Zauberbild.Rhombus(position);
                rhombus.draw();
                shapes.push(rhombus);
            }
            ;
        }
        else if (semicircleIn.checked == true) {
            console.log("Halbkreis wird gezeichnet");
            function drawHalbkreis(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let semicircle = new AS_Zauberbild.Semicircle(position);
                semicircle.draw();
                shapes.push(semicircle);
            }
            ;
        }
        else if (circleIn.checked == true) {
            console.log("Kreis wird gezeichnet");
            function drawKreis(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let circle = new AS_Zauberbild.Circle(position);
                circle.draw();
                shapes.push(circle);
            }
            ;
        }
        else if (hexagonIn.checked == true) {
            console.log("Hexagon wird gezeichnet");
            function drawHexagon(_event) {
                let canvas = document.querySelector(".canvas");
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let position = new AS_Zauberbild.Vector(x, y);
                let hexagon = new AS_Zauberbild.Hexagon(position);
                hexagon.draw();
                shapes.push(hexagon);
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
            let circle = new AS_Zauberbild.Circle(position);
            circle.draw();
            //symbols.push(circle);
            console.log(shapes);
            //Halbkreis 
            for (let i = 0; i < _symbol; i++) {
                let x = 340;
                let y = 20;
                let position = new AS_Zauberbild.Vector(x, y);
                let semicircle = new AS_Zauberbild.Semicircle(position);
                semicircle.draw();
                console.log(shapes);
            }
            //Raute
            for (let i = 0; i < _symbol; i++) {
                let x = 40;
                let y = 240;
                let position = new AS_Zauberbild.Vector(x, y);
                let rhombus = new AS_Zauberbild.Rhombus(position);
                rhombus.draw();
                console.log(shapes);
            }
            //Herz 
            for (let i = 0; i < _symbol; i++) {
                let x = 360;
                let y = 210;
                let position = new AS_Zauberbild.Vector(x, y);
                let heart = new AS_Zauberbild.Heart(position);
                heart.draw();
                console.log(shapes);
            }
            //Hexagon 
            for (let i = 0; i < _symbol; i++) {
                let x = 350;
                let y = 250;
                let position = new AS_Zauberbild.Vector(x, y);
                let hexagon = new AS_Zauberbild.Hexagon(position);
                hexagon.draw();
                console.log(shapes);
            }
        }
        function animation() {
            return setInterval(createSymbols, 100);
        }
        function frame() {
            AS_Zauberbild.crc2.putImageData(background, 0, 0);
            //drawTriangle();
            for (let i = 0; i < shapes.length; i++) {
                shapes[i].move(1 / 50);
                shapes[i].draw();
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
    }
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=canvas.js.map