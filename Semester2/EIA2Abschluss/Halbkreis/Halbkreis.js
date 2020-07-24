var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Halbkreis extends AS_Zauberbild.Rotation {
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
    AS_Zauberbild.Halbkreis = Halbkreis;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Halbkreis.js.map