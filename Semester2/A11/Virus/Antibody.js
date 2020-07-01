var L11_Virus;
(function (L11_Virus) {
    class Antibody extends L11_Virus.Cell {
        constructor(_position) {
            super(_position);
            this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        moveAntibody(_timeslice) {
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
        drawAntibody() {
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.moveTo(this.position.x, this.position.y);
            L11_Virus.crc2.lineTo(this.position.x + 22, this.position.y - 12);
            L11_Virus.crc2.lineWidth = 3;
            L11_Virus.crc2.strokeStyle = "grey";
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.closePath();
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.arc(this.position.x + 31, this.position.y - 18, 12, 0.7, 1.4 * Math.PI);
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.closePath();
        }
    }
    L11_Virus.Antibody = Antibody;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=Antibody.js.map