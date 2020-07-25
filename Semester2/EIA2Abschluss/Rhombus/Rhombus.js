var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Rhombus extends AS_Zauberbild.Shape {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
        draw() {
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.moveTo(0, 20);
            AS_Zauberbild.crc2.lineTo(20, 0);
            AS_Zauberbild.crc2.lineTo(40, 20);
            AS_Zauberbild.crc2.lineTo(20, 40);
            AS_Zauberbild.crc2.lineTo(0, 20);
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.fillStyle = "white";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.restore();
        }
        rotate() {
            let canvas = document.getElementsByClassName(".canvas");
            let p1 = { x: 0, y: 40 }; //Ecke links    
            let p2 = { x: 80, y: 40 }; //Ecke rechts
            let dx = p2.x - p1.x;
            let dy = p2.y - p1.y;
            let angle = Math.atan2(dy, dx);
            draw();
            requestAnimationFrame(animate);
            function animate( /*time*/) {
                requestAnimationFrame(animate);
                draw();
                angle += Math.PI / 60;
            }
            function draw() {
                AS_Zauberbild.crc2.clearRect(0, 0, canvas.width, canvas.height);
                AS_Zauberbild.crc2.beginPath();
                AS_Zauberbild.crc2.fillStyle = "white";
                AS_Zauberbild.crc2.rect(p1.x, p1.y, 80, 80);
            }
        }
    }
    AS_Zauberbild.Rhombus = Rhombus;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Rhombus.js.map