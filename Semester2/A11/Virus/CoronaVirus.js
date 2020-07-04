var L11_Virus;
(function (L11_Virus) {
    class CoronaVirus extends L11_Virus.Cell {
        constructor(_position) {
            super(_position);
            /*  if (_position)
                  this.position = _position;
              else
                  this.position = new Vector(100, 150); */
            this.velocity = new L11_Virus.Vector(0, 0);
            this.velocity.random(100, 200);
            //  this.type = Math.floor(Math.random() * 4);
            //   this.size = _size;
        }
        moveCorona(_timeslice) {
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
        drawCorona() {
        }
    }
    L11_Virus.CoronaVirus = CoronaVirus;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=CoronaVirus.js.map