var L11_Virus;
(function (L11_Virus) {
    class HumanCell extends L11_Virus.Cell {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L11_Virus.Vector(0, 0);
            this.radius = 15;
            this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity = L11_Virus.Vector.getRandom(5, 10);
        }
        draw() {
            // console.log("drawHumanCell");
            let r1 = 1; //Radius innen 
            let r2 = 13; // Radius außen
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            let gradient = L11_Virus.crc2.createRadialGradient(0, 0, r1, 0, 0, this.radius);
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            L11_Virus.crc2.closePath();
            gradient.addColorStop(0, "#B895A3");
            gradient.addColorStop(0.5, "#FFFFFF");
            gradient.addColorStop(1, "#2E2E2E");
            L11_Virus.crc2.fillStyle = "#E6E6FA";
            L11_Virus.crc2.lineWidth = 1;
            L11_Virus.crc2.strokeStyle = "#E6E6FA";
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.fill();
            L11_Virus.crc2.restore();
        }
    }
    L11_Virus.HumanCell = HumanCell;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=HumanCell.js.map