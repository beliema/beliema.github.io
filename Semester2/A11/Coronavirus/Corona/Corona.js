var L11_Virus;
(function (L11_Virus) {
    class Corona extends L11_Virus.Cell {
        constructor(_position) {
            super(_position);
            this.infected = false;
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L11_Virus.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity = L11_Virus.Vector.getRandom(5, 10);
        }
        draw() {
            // console.log("draw Corona");
            let r1 = 1; //Radius innen 
            let r2 = 25; // Radius außen
            // let nParticles: number = 6; //Anzahl Coronaviruszellen
            // let particle: Path2D = new Path2D();
            let gradient = L11_Virus.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            // crc2.restore();
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            //Zeichen der Stängel 
            for (let i = 0; i < 11; i++) {
                L11_Virus.crc2.beginPath();
                L11_Virus.crc2.rotate(20);
                L11_Virus.crc2.moveTo(0, 0);
                L11_Virus.crc2.lineTo(0, 40);
                L11_Virus.crc2.strokeStyle = "#B43104";
                L11_Virus.crc2.lineWidth = 2;
                L11_Virus.crc2.stroke();
                L11_Virus.crc2.closePath();
            }
            //Zeichnen des Kreises 
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#B895A3");
            gradient.addColorStop(0.6, "#596024");
            gradient.addColorStop(1, "#42452C");
            //  crc2.fillStyle = "#ae2d16";
            L11_Virus.crc2.fill();
            L11_Virus.crc2.closePath();
            L11_Virus.crc2.restore();
        }
        move(_timeslice) {
            if (this.infected == false) {
                if (this.position.y < 250) {
                    super.move(_timeslice * 2);
                }
                else {
                    super.move(_timeslice);
                }
            }
        }
        isInfected() {
            if (this.position.y < 125) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    L11_Virus.Corona = Corona;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=Corona.js.map