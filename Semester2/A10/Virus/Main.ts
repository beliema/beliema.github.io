namespace L09_Virus { 

    //Nicht fertig gecodet, weil keine Zeit 

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let middle: number = 0.95;
    export let canvas: HTMLCanvasElement;

    let humanCell: HumanCell[] = [];
    let particles: Particle[] = [];
    
    let viren: HumanCell[] = [];
    
    
    
    function handleLoad (_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawCellBackground();
        
        createParticles( new Vector( 260, 490), 50);
        
        drawHumanCells(new Vector (200, 300), new Vector(100, 120), 10, false);
       
        drawCoronaVirus(new Vector(120, 300), false, 5);

        setInterval(frame, 100);
        
        
       // drawHumanCells({x: 200, y: 300}, {x: 100, y: 120});
       // drawCoronaVirus({x: 100, y: 150}, {x: 70, y: 70});
       // drawAntibodys({x: 60, y: 420}, {x: 100, y: 120});
       // drawKillerCells({x: 30, y: 370}, {x: 100, y: 250});
       // drawParticles({x: 130, y: 490}, {x: 260, y: 490});



    }
    
    // Funktion erstellen des Hintergrundes mit Farbverlauf und Pattern-Struktur 

    function drawCellBackground(): void {
        console.log("Hintergrund");

       //Farbverlauf von hellrot oben bis weiß unten: 
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height); 
        gradient.addColorStop(0, "#FA5858");
        gradient.addColorStop(middle, "#F8E0E6");
       

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        
        // Einbettung eines Patterns 

        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        
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

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }


    function redrawAll(): void {
        drawCellBackground();
        drawHumanCells( new Vector(200, 300), new Vector(0, 0), HumanCell.length, true);
      }


    //Funktion 2: Zeichnen der menschlichen Zellen; Orientierung an Sonne in L08_CanvasAlley


    function drawHumanCells(_position: Vector, _size: Vector): void {
        console.log("menschliche Zellen werden gezeichnet", _position);
        let r1: number = 1; //Radius innen 
        let r2: number = 13; // Radius außen
        let nParticles: number = 15; //Anzahl menschlicher Zellen
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); //erstelle einen radialen Verlauf 
        particle.arc(0, 0, r2, 0, 2 * Math.PI); //Zelle als voller Kreis -> 2x Pi 

        // Farbverlauf, Leichte Transparenz nach außen
        gradient.addColorStop(0, "#B895A3");
        gradient.addColorStop(0.5, "#FFFFFF"); 
        gradient.addColorStop(1, "#2E2E2E");
        
        
 


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

    //Funktion: Zeichnen des Corona-Virus

    function drawCoronaVirus(_position: Vector, _size: Vector): void {
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

    }

    //Zeichnen der Antikörper

    function drawAntibodys(_position: Vector, _size: Vector): void {
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
        }

        crc2.restore();

        function animation() {
            return setInterval(frame, 50);
        } 
    
        function stopAnimation(_interval: any): void {
           
            if (_interval)
               clearInterval(_interval);
        }
        function frame(): void {
            refresh();
            for (let i: number = 0; i < particles.length; i++) {
                particles[i].move(1 / 50);
            }
            drawParticles();
        }
        function createParticles(_position: Vector, _n: number): void {
            for (let i: number = 0; i < _n; i++){
                let x: number = (Math.random() - 0.5) * _position.x;
                let y: number = -(Math.random() * _position.y);
                particles.push(new Particle( new Vector(x, y)));
            }
        }
        function drawParticles(): void {
            for (let i: number = 0; i < particles.length; i++) {
               particles[i].draw();
            }
        }
        function refresh(): void {
            drawCellBackground();
            drawHumanCells(new Vector(200, 300), new Vector(100, 120), humanCell.length, true);
            drawCoronaVirus(new Vector(120, 300), true, 5);
        }
           
    
        }
    

    }


}
