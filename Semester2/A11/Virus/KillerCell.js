var L11_Virus;
(function (L11_Virus) {
    class KillerCell extends L11_Virus.Cell {
        //  size: number; 
        //  type: any;
        constructor(_position) {
            super(_position);
            this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity.random(10, 100);
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += L11_Virus.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Virus.crc2.canvas.height;
            if (this.position.x > L11_Virus.crc2.canvas.width)
                this.position.x -= L11_Virus.crc2.canvas.width;
            if (this.position.y > L11_Virus.crc2.canvas.height)
                this.position.y -= L11_Virus.crc2.canvas.height;
        }
        draw() {
            let radiusK = 15;
            /*let r1: number = 1;
            let r2: number = 15;
            let nParticles: number = 7;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#000000");
            gradient.addColorStop(0.4, "#FFFFFF");
            gradient.addColorStop(0.8, "#F5A9BC"); */
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.moveTo(this.position.x, this.position.y);
            L11_Virus.crc2.arc(this.position.x + 20, this.position.y + 20, radiusK, 0.2 * Math.PI, 1.8 * Math.PI, false);
            L11_Virus.crc2.lineTo(this.position.x + 20, this.position.y + 20);
            L11_Virus.crc2.closePath();
            L11_Virus.crc2.fillStyle = "grey";
            L11_Virus.crc2.strokeStyle = "#ffffff";
            L11_Virus.crc2.fill();
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.save();
            /* crc2.save();
             crc2.translate(this.position.x, this.position.y);
             crc2.fillStyle = gradient;
             crc2.scale(this.size, this.size);
             crc2.translate(-50, -50);
             crc2.stroke(antibodyPaths[this.type]);
             crc2.restore(); */
        }
    }
    L11_Virus.KillerCell = KillerCell;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=KillerCell.js.map