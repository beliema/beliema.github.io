var L09_Virus;
(function (L09_Virus) {
    class KillerCell {
        constructor(_size, _position) {
            console.log("Killerzelle wird erstellt");
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Virus.Vector(30, 370);
            this.velocity = new L09_Virus.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        moveKIllerCell(_timeslice) {
            let offset = new L09_Virus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Virus.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Virus.crc2.canvas.height;
            if (this.position.x > L09_Virus.crc2.canvas.width)
                this.position.x -= L09_Virus.crc2.canvas.width;
            if (this.position.y > L09_Virus.crc2.canvas.height)
                this.position.y -= L09_Virus.crc2.canvas.height;
        }
        drawKillerCell() {
            let r1 = 1;
            let r2 = 15;
            let nParticles = 7;
            let particle = new Path2D();
            let gradient = L09_Virus.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#000000");
            gradient.addColorStop(0.4, "#FFFFFF");
            gradient.addColorStop(0.8, "#F5A9BC");
            L09_Virus.crc2.save();
            L09_Virus.crc2.translate(this.position.x, this.position.y);
            L09_Virus.crc2.fillStyle = gradient;
            L09_Virus.crc2.scale(this.size, this.size);
            L09_Virus.crc2.translate(-50, -50);
            L09_Virus.crc2.stroke(antibodyPaths[this.type]);
            L09_Virus.crc2.restore();
        }
    }
    L09_Virus.KillerCell = KillerCell;
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=KillerCell.js.map