var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Moveable {
        constructor(_position) {
            this.expendable = false;
            // console.log("Moveable");
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new AS_Zauberbild.Vector(0, 0);
            this.radius = 5;
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (AS_Zauberbild.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += AS_Zauberbild.crc2.canvas.height;
            if (this.position.x > (AS_Zauberbild.crc2.canvas.width))
                this.position.x -= (AS_Zauberbild.crc2.canvas.width);
            if (this.position.y > AS_Zauberbild.crc2.canvas.height)
                this.position.y -= AS_Zauberbild.crc2.canvas.height;
        }
    }
    AS_Zauberbild.Moveable = Moveable;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Moveable.js.map