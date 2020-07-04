var L11_Virus;
(function (L11_Virus) {
    window.addEventListener("load", handleLoad);
    let middle = 0.95;
    let humanCell = [];
    let particles = [];
    let viren = [];
    let cells = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Virus.crc2 = canvas.getContext("2d");
        drawCellBackground();
        createParticles(new L11_Virus.Vector(260, 490), 40);
        drawHumanCells(new L11_Virus.Vector(200, 300), new L11_Virus.Vector(100, 120), 15, false);
        drawCoronaVirus(new L11_Virus.Vector(30, 370), false, 5);
        createAntibodies(new L11_Virus.Vector(60, 420), 8);
        createKillerCells(new L11_Virus.Vector(30, 370), 7);
        setInterval(frame, 100);
        // drawHumanCells({x: 200, y: 300}, {x: 100, y: 120});
        // drawCoronaVirus({x: 100, y: 150}, {x: 70, y: 70});
        // drawAntibodys({x: 60, y: 420}, {x: 100, y: 120});
        // drawKillerCells({x: 30, y: 370}, {x: 100, y: 250});
        // drawParticles({x: 130, y: 490}, {x: 260, y: 490});
    }
    // Funktion erstellen des Hintergrundes mit Farbverlauf und Pattern-Struktur 
    function drawCellBackground() {
        console.log("Hintergrund");
        //Farbverlauf von hellrot oben bis weiß unten: 
        let gradient = L11_Virus.crc2.createLinearGradient(0, 0, 0, L11_Virus.crc2.canvas.height);
        gradient.addColorStop(0, "#FA5858");
        gradient.addColorStop(middle, "#F8E0E6");
        L11_Virus.crc2.fillStyle = gradient;
        L11_Virus.crc2.fillRect(0, 0, L11_Virus.crc2.canvas.width, L11_Virus.crc2.canvas.height);
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
        L11_Virus.crc2.fillStyle = L11_Virus.crc2.createPattern(pattern.canvas, "repeat");
        L11_Virus.crc2.fillRect(0, 0, L11_Virus.crc2.canvas.width, L11_Virus.crc2.canvas.height);
    }
    function redrawAll() {
        drawCellBackground();
        drawHumanCells(new L11_Virus.Vector(200, 300), new L11_Virus.Vector(0, 0), L11_Virus.HumanCell.length, true);
    }
    function drawHumanCells(_position, _size, _n, _isHit) {
        console.log("menschliche Zellen werden gezeichnet", _position);
        let r1 = 1; //Radius innen 
        let r2 = 13; // Radius außen
        let nParticles = 15; //Anzahl menschlicher Zellen
        let particle = new Path2D();
        let gradient = L11_Virus.crc2.createRadialGradient(0, 0, r1, 0, 0, r2); //erstelle einen radialen Verlauf 
        particle.arc(0, 0, r2, 0, 2 * Math.PI); //Zelle als voller Kreis -> 2x Pi 
        // Farbverlauf, Leichte Transparenz nach außen
        gradient.addColorStop(0, "#B895A3");
        gradient.addColorStop(0.5, "#FFFFFF");
        gradient.addColorStop(1, "#2E2E2E");
        L11_Virus.crc2.save(); //Zwischenspeichern 
        L11_Virus.crc2.translate(_position.x, _position.y);
        L11_Virus.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L11_Virus.crc2.save();
            if (_redraw) {
                let cell = humanCell[drawn];
                L11_Virus.crc2.translate(cell.size.x, cell.size.y);
            }
            else {
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                L11_Virus.crc2.translate(x, y);
                humanCell.push(new L11_Virus.HumanCell(_position, new L11_Virus.Vector(x, y)));
            }
            // let x: number = (Math.random() - 0.5) * _size.x;
            // let y: number = - (Math.random() * _size.y);
            // crc2.translate(x, y);
            L11_Virus.crc2.fill(particle);
            L11_Virus.crc2.restore();
        }
        L11_Virus.crc2.restore();
    }
    function createVirus(_position) {
        L11_Virus.crc2.restore();
        L11_Virus.crc2.save();
        L11_Virus.crc2.translate(_position.x, _position.y);
        for (let i = 0; i < 9; i++) {
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.rotate(30);
            L11_Virus.crc2.moveTo(0, 20);
            L11_Virus.crc2.lineTo(10, 40);
            L11_Virus.crc2.lineTo(5, 30);
            L11_Virus.crc2.lineTo(0, 40);
            L11_Virus.crc2.strokeStyle = "#777777";
            L11_Virus.crc2.lineWidth = 1;
            L11_Virus.crc2.fillStyle = "grey";
            L11_Virus.crc2.fill();
            L11_Virus.crc2.stroke();
        }
        L11_Virus.crc2.beginPath();
        L11_Virus.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        L11_Virus.crc2.fillStyle = "#8B0000";
        L11_Virus.crc2.fill();
        L11_Virus.crc2.closePath();
        L11_Virus.crc2.restore();
    }
    //Funktion: Zeichnen des Corona-Virus
    /*function drawCoronaVirus(_position: Vector, _size: Vector): void {
        console.log("Coronaviruszellen werden gezeichnet", _position);
        let r1: number = 1; //Radius innen
        let r2: number = 25; // Radius außen
        let nParticles: number = 6; //Anzahl Coronaviruszellen
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); //erstelle einen radialen Verlauf
        particle.arc(0, 0, r2, 0, 2 * Math.PI); //Zelle als voller Kreis -> 2x Pi
        gradient.addColorStop(0, "#B895A3");
        gradient.addColorStop(0.6, "#596024");
        gradient.addColorStop(1, "#42452C");
        
        
 


        crc2.save(); //Zwischenspeichern
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        
        
        

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }*/
    function drawCoronaVirus(_size, _redraw, _number) {
        for (let drawn = 0; drawn < _number; drawn++) {
            L11_Virus.crc2.save();
            let x;
            let y;
            if (_redraw) {
                let cell = viren[drawn];
                x = cell.size.x;
                y = cell.size.y;
            }
            else {
                x = (Math.random() + 0.5) * _size.x;
                y = -((Math.random() - 2) * _size.y);
                viren.push(new L11_Virus.HumanCell(new L11_Virus.Vector(0, 0), new L11_Virus.Vector(x, y)));
            }
            L11_Virus.crc2.translate(x, y);
            createVirus(new L11_Virus.Vector(x, y));
            L11_Virus.crc2.restore();
        }
        L11_Virus.crc2.restore();
    }
    //Zeichnen der Antikörper
    /* function drawAntibodys(_position: Vector, _size: Vector): void {
        console.log("Antikörperzellen werden gezeichnet", _position);
        let r1: number = 1; //Radius innen
        let r2: number = 20; // Radius außen
        let nParticles: number = 8; //Anzahl Antikörper
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); //erstelle einen radialen Verlauf
        particle.arc(0, 0, r2, 0, 2 * Math.PI); //Zelle als voller Kreis -> 2x Pi
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0.6, "#FFFFFF");
        gradient.addColorStop(1, "#F78181");
        
        
 


        crc2.save(); //Zwischenspeichern
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        
        
        

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }

    //Funktion Erstellen der KillerZellen

    function drawKillerCells(_position: Vector, _size: Vector): void {
        console.log("Coronaviruszellen werden gezeichnet", _position);
        let r1: number = 1; //Radius innen
        let r2: number = 15; // Radius außen
        let nParticles: number = 7; //Anzahl Killerzellen
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); //erstelle einen radialen Verlauf
        particle.arc(0, 0, r2, 0, 2 * Math.PI); //Zelle als voller Kreis -> 2x Pi
        gradient.addColorStop(0, "#000000"); //Innen
        gradient.addColorStop(0.4, "#FFFFFF"); // circa Mitte
        gradient.addColorStop(0.8, "#F5A9BC"); //außen
        
        
 


        crc2.save(); //Zwischenspeichern
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        
        
        

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }

    //Zuletzt: Parikel auf Oberster Ebene
    
    function drawParticles(_position: Vector, _size: Vector): void {
        console.log("particles", _position, _size);
        let r1: number = 1;
        let r2: number = 8;
        let nParticles: number = 40;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSL(0, 50%, 100%)");
        gradient.addColorStop(0.8, "HSLA(360, 40%, 60%)");
        gradient.addColorStop(0.9, "HSLA(360, 40%, 60%)");
        
        
 


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        
        
        

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        } */
    // crc2.restore();
    function animation() {
        return setInterval(frame, 50);
    }
    function stopAnimation(_interval) {
        if (_interval)
            clearInterval(_interval);
    }
    function frame() {
        refresh();
        for (let i = 0; i < cells.length; i++) {
            cells[i].move(1 / 50);
            cells[i].draw();
        }
    }
    function createParticles(_position, _n) {
        let x = (Math.random() - 0.5) * _position.x;
        let y = -(Math.random() * _position.y);
        for (let i = 0; i < _n; i++) {
            particles.push(new L11_Virus.Particle(new L11_Virus.Vector(x, y)));
        }
    }
    function createAntibodies(_position, _n) {
        for (let i = 0; i < _n; i++) {
            let x = Math.random() * L11_Virus.crc2.canvas.width / 1.4;
            let y = 250 + (20 * Math.random());
            cells.push(new L11_Virus.Antibody(new L11_Virus.Vector(x, y)));
        }
    }
    function createKillerCells(_position, _n) {
        for (let i = 0; i < _n; i++) {
            let x = Math.random() * L11_Virus.crc2.canvas.width / 1.8;
            let y = 50 + (20 * Math.random());
            cells.push(new L11_Virus.KillerCell(new L11_Virus.Vector(x, y)));
        }
    }
    function drawAntibodies() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].draw();
        }
    }
    function drawParticles() {
        for (let i = 0; i < particles.length; i++) {
            particles[i].draw();
        }
    }
    function refresh() {
        drawCellBackground();
        drawHumanCells(new L11_Virus.Vector(200, 300), new L11_Virus.Vector(100, 120), humanCell.length, true);
        drawCoronaVirus(new L11_Virus.Vector(120, 300), true, 5);
    }
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=Main.js.map