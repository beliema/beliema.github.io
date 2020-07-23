var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Kreis extends AS_Zauberbild.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += AS_Zauberbild.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += AS_Zauberbild.crc2.canvas.height;
            if (this.position.x > AS_Zauberbild.crc2.canvas.width)
                this.position.x -= AS_Zauberbild.crc2.canvas.width;
            if (this.position.y > AS_Zauberbild.crc2.canvas.height)
                this.position.y -= AS_Zauberbild.crc2.canvas.height;
        }
        draw() {
            let r = 50;
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.arc(0, 0, r, 0, 2 * Math.PI);
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.fillStyle = "lightgrey";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.restore();
        }
    }
    AS_Zauberbild.Kreis = Kreis;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Kreis.js.map