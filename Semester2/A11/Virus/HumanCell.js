var L11_Virus;
(function (L11_Virus) {
    class HumanCell extends L11_Virus.Cell {
        // private isHit(_hotspot: Vector): void; 
        constructor(_position, _size) {
            super(_position);
            /* if (_position)
                this.position = _position;
            else
                this.position = new Vector(60, 420);*/
            this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity.random(100, 200);
            // this.type = Math.floor(Math.random() * 4);
            //  this.size = _size;
        }
        moveHumanCell(_timeslice) {
            let offset = new L11_Virus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_Virus.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Virus.crc2.canvas.height;
            if (this.position.x > L11_Virus.crc2.canvas.width)
                this.position.x -= L11_Virus.crc2.canvas.width;
            if (this.position.y > L11_Virus.crc2.canvas.height)
                this.position.y -= L11_Virus.crc2.canvas.height;
        }
        drawHumanCell() {
            let r1 = 1;
            let r2 = 13;
            let nParticles = 15;
            let particle = new Path2D();
            let gradient = L11_Virus.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#B895A3");
            gradient.addColorStop(0.5, "#FFFFFF");
            gradient.addColorStop(1, "#2E2E2E");
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            L11_Virus.crc2.fillStyle = gradient;
            L11_Virus.crc2.fill(particle);
            L11_Virus.crc2.restore();
        }
    }
    L11_Virus.HumanCell = HumanCell;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=HumanCell.js.map