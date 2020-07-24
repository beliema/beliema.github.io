var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Hexagon extends AS_Zauberbild.Shape {
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
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.moveTo(10, 40);
            AS_Zauberbild.crc2.lineTo(30, 0);
            AS_Zauberbild.crc2.lineTo(80, 0);
            AS_Zauberbild.crc2.lineTo(100, 40);
            AS_Zauberbild.crc2.lineTo(80, 80);
            AS_Zauberbild.crc2.lineTo(30, 80);
            AS_Zauberbild.crc2.lineTo(10, 40);
            AS_Zauberbild.crc2.stroke();
            let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 100, 40);
            gradient.addColorStop(0, "#FB8D53");
            gradient.addColorStop(0.45, "#CA5D6F");
            gradient.addColorStop(1, "#93278F");
            AS_Zauberbild.crc2.fillStyle = "gradient";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.restore();
        }
    }
    AS_Zauberbild.Hexagon = Hexagon;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Hexagon.js.map