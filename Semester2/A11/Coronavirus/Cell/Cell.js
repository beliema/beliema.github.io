var L11_Virus;
(function (L11_Virus) {
    class Cell {
        constructor(_position) {
            // console.log("Moveable");
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L11_Virus.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L11_Virus.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L11_Virus.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L11_Virus.crc2.canvas.height;
            if (this.position.x > (L11_Virus.crc2.canvas.width))
                this.position.x -= (L11_Virus.crc2.canvas.width);
            if (this.position.y > L11_Virus.crc2.canvas.height)
                this.position.y -= L11_Virus.crc2.canvas.height;
        }
    }
    L11_Virus.Cell = Cell;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=Cell.js.map