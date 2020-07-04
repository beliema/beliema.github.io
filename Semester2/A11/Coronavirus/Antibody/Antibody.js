var L11_Virus;
(function (L11_Virus) {
    class Antibody extends L11_Virus.Cell {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity = L11_Virus.Vector.getRandom(2, 5);
            this.rotation = Math.random() * 360;
        }
        draw() {
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.rotate(this.rotation);
            L11_Virus.crc2.moveTo(0, 0);
            L11_Virus.crc2.lineTo(0, 25);
            L11_Virus.crc2.strokeStyle = "black";
            L11_Virus.crc2.lineWidth = 2;
            L11_Virus.crc2.moveTo(0, 25);
            L11_Virus.crc2.lineTo(15, 40);
            L11_Virus.crc2.moveTo(0, 25);
            L11_Virus.crc2.lineTo(-15, 40);
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.closePath();
            L11_Virus.crc2.restore();
            L11_Virus.crc2.restore();
        }
    }
    L11_Virus.Antibody = Antibody;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=Antibody.js.map