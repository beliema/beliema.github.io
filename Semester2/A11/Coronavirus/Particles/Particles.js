var L11_Virus;
(function (L11_Virus) {
    class Particle extends L11_Virus.Cell {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity = L11_Virus.Vector.getRandom(100, 200);
            this.radius = (Math.random() * 7) + 1;
        }
        draw() {
            console.log("draw Particle");
            let r1 = 1;
            let r2 = 8;
            let gradient = L11_Virus.crc2.createRadialGradient(0, 0, r1, 0, 0, this.radius);
            L11_Virus.crc2.save();
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            L11_Virus.crc2.closePath();
            gradient.addColorStop(0, "HSL(0, 50%, 100%)");
            gradient.addColorStop(0.8, "HSLA(360, 40%, 60%)");
            gradient.addColorStop(0.9, "HSLA(0, 100%, 100%, 20%)");
            L11_Virus.crc2.fillStyle = gradient;
            L11_Virus.crc2.fill();
            L11_Virus.crc2.restore();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.x *= 0;
            offset.y *= _timeslice * 1.2;
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += L11_Virus.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L11_Virus.crc2.canvas.height;
            }
            if (this.position.x > L11_Virus.crc2.canvas.width) {
                this.position.x -= L11_Virus.crc2.canvas.width;
            }
            if (this.position.y > L11_Virus.crc2.canvas.height) {
                this.position.y -= L11_Virus.crc2.canvas.height;
            }
        }
    }
    L11_Virus.Particle = Particle;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=Particles.js.map