var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Semicircle extends AS_Zauberbild.Shape {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
        draw() {
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.arc(300, 300, 40, 0, 1 * Math.PI);
            AS_Zauberbild.crc2.closePath();
            AS_Zauberbild.crc2.lineWidth = 1;
            AS_Zauberbild.crc2.fillStyle = "#F6C135";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.rotate(Math.PI / 2);
            AS_Zauberbild.crc2.strokeStyle = "#F6C135";
            AS_Zauberbild.crc2.stroke();
        }
        rotate() {
        }
    }
    AS_Zauberbild.Semicircle = Semicircle;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Semicircle.js.map