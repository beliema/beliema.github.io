var L11_Virus;
(function (L11_Virus) {
    class KillerCell extends L11_Virus.Cell {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity = L11_Virus.Vector.getRandom(5, 10);
            this.radius = 20;
        }
        draw() {
            console.log("draw KillerCells");
            let r1 = 1; //Radius innen 
            let r2 = 15; // Radius außen
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.moveTo(0, 0);
            L11_Virus.crc2.arc(0, 0, this.radius, 0, Math.PI * 1.6);
            L11_Virus.crc2.lineTo(0, 0);
            L11_Virus.crc2.closePath();
            L11_Virus.crc2.fillStyle = "#F7DCBA";
            L11_Virus.crc2.lineWidth = 2;
            L11_Virus.crc2.strokeStyle = "#F9A12C";
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.fill();
            L11_Virus.crc2.restore();
        }
    }
    L11_Virus.KillerCell = KillerCell;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=Killercell.js.map