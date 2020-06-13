//Grundgerüst von Nelly Schneider, dann Veränderung und Umsetzung eigener Ideen, da sich bei mir der Hintergrund sonst nicht erstellen ließ 
var L08_Virus;
(function (L08_Virus) {
    //Def. Variablen 
    let crc2;
    let middle = 0.95;
    let width;
    let height;
    //Installation Eventlistener 
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawCellBackground();
        drawHumanCells({ x: 200, y: 300 }, { x: 100, y: 120 });
        drawCoronaVirus({ x: 100, y: 150 }, { x: 70, y: 70 });
        drawAntibodys({ x: 60, y: 420 }, { x: 100, y: 120 });
        drawKillerCells({ x: 30, y: 370 }, { x: 100, y: 250 });
        drawParticles({ x: 130, y: 490 }, { x: 260, y: 490 });
    }
    // Funktion erstellen des Hintergrundes mit Farbverlauf und Pattern-Struktur 
    function drawCellBackground() {
        console.log("background");
        //Farbverlauf von hellrot oben bis weiß unten: 
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#FA5858");
        gradient.addColorStop(middle, "#F8E0E6");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        // Einbettung eines Patterns 
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "#97a0db1a";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 0);
        pattern.lineTo(20, 10);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 20);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 10);
        pattern.lineTo(10, 10);
        pattern.stroke();
        pattern.strokeStyle = "#E6E6E6";
        pattern.stroke();
        pattern.closePath();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    //Funktion 2: Zeichnen der menschlichen Zellen; Orientierung an Sonne in L08_CanvasAlley
    function drawHumanCells(_position, _size) {
        console.log("menschliche Zellen werden gezeichnet", _position);
        let r1 = 1; //Radius innen 
        let r2 = 13; // Radius außen
        let nParticles = 15; //Anzahl menschlicher Zellen
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); //erstelle einen radialen Verlauf 
        particle.arc(0, 0, r2, 0, 2 * Math.PI); //Zelle als voller Kreis -> 2x Pi 
        // Farbverlauf, Leichte Transparenz nach außen
        gradient.addColorStop(0, "#B895A3");
        gradient.addColorStop(0.5, "#FFFFFF");
        gradient.addColorStop(1, "#2E2E2E");
        crc2.save(); //Zwischenspeichern 
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    //Funktion: Zeichnen des Corona-Virus
    function drawCoronaVirus(_position, _size) {
        console.log("Coronaviruszellen werden gezeichnet", _position);
        let r1 = 1; //Radius innen 
        let r2 = 25; // Radius außen
        let nParticles = 6; //Anzahl Coronaviruszellen
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); //erstelle einen radialen Verlauf 
        particle.arc(0, 0, r2, 0, 2 * Math.PI); //Zelle als voller Kreis -> 2x Pi 
        gradient.addColorStop(0, "#B895A3");
        gradient.addColorStop(0.6, "#596024");
        gradient.addColorStop(1, "#42452C");
        crc2.save(); //Zwischenspeichern 
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    //Zeichnen der Antikörper
    function drawAntibodys(_position, _size) {
        console.log("Antikörperzellen werden gezeichnet", _position);
        let r1 = 1; //Radius innen 
        let r2 = 20; // Radius außen
        let nParticles = 8; //Anzahl Antikörper
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); //erstelle einen radialen Verlauf 
        particle.arc(0, 0, r2, 0, 2 * Math.PI); //Zelle als voller Kreis -> 2x Pi 
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0.6, "#FFFFFF");
        gradient.addColorStop(1, "#F78181");
        crc2.save(); //Zwischenspeichern 
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    // function drawAntibodys(_position: Vector, _size: Vector):void {
    //     console.log("Antikörperzellen", _position, _size);
    //    let amountA: number = 10;
    //    let antibody: Path2D = new Path2D;
    //    crc2.beginPath();
    //    crc2.moveTo(_position.x, _position.y);
    //    crc2.lineTo(_position.x + 29, _position.y - 4 );
    // crc2.lineTo(_position.x + 40, _position.y +20);
    //    crc2.lineWidth = 3;
    //    crc2.strokeStyle = "#596024";
    //    crc2.stroke();
    //   crc2.closePath();
    //   crc2.beginPath();
    //   crc2.arc(_position.x + 14, _position.y - 6, 17, 0, 2 * Math.PI);
    //   crc2.stroke();
    //   crc2.closePath();
    //  crc2.beginPath();
    //   crc2.lineWidth = 3; //Breite des Striches
    //   crc2.lineCap = "round"; //Art des Striches 
    //   crc2.moveTo(_position.x, _position.y); // 60 = Länge des Striches; 55 = Steigung des Striches
    //   crc2.lineTo(_position.x +27,_position.y -15);
    //   crc2.stroke();
    //   crc2.save();
    //   crc2.translate(_position.x, _position.y);
    //  for (let drawn: number = 0; drawn < amountA; drawn++) {
    //      crc2.save();
    //      let x: number = (Math.random() - 0.5) * _size.x;
    //      let y: number = - (Math.random() * _size.y);
    //      crc2.translate(x, y);
    //      crc2.fill(antibody);
    //      crc2.restore();
    // }
    // crc2.restore();
    // }
    //Funktion Erstellen der KillerZellen
    function drawKillerCells(_position, _size) {
        console.log("Coronaviruszellen werden gezeichnet", _position);
        let r1 = 1; //Radius innen 
        let r2 = 15; // Radius außen
        let nParticles = 7; //Anzahl Killerzellen
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); //erstelle einen radialen Verlauf 
        particle.arc(0, 0, r2, 0, 2 * Math.PI); //Zelle als voller Kreis -> 2x Pi 
        gradient.addColorStop(0, "#000000"); //Innen
        gradient.addColorStop(0.4, "#FFFFFF"); // circa Mitte
        gradient.addColorStop(0.8, "#F5A9BC"); //außen
        crc2.save(); //Zwischenspeichern 
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    //Zuletzt: Parikel auf Oberster Ebene 
    function drawParticles(_position, _size) {
        console.log("particles", _position, _size);
        let r1 = 1;
        let r2 = 8;
        let nParticles = 40;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSL(0, 50%, 100%)");
        gradient.addColorStop(0.8, "HSLA(360, 40%, 60%)");
        gradient.addColorStop(0.9, "HSLA(360, 40%, 60%)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
})(L08_Virus || (L08_Virus = {}));
//# sourceMappingURL=Virus.js.map