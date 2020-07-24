var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Raute extends AS_Zauberbild.Rotation {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
        draw() {
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.moveTo(0, 40);
            AS_Zauberbild.crc2.lineTo(40, 0);
            AS_Zauberbild.crc2.lineTo(80, 40);
            AS_Zauberbild.crc2.lineTo(40, 80);
            AS_Zauberbild.crc2.lineTo(0, 40);
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.fillStyle = "white";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.restore();
        }
        rotate() {
            let time;
            let canvas = document.getElementsByClassName(".canvas");
            let p1 = { x: 0, y: 40 }; //Ecke links    
            let p2 = { x: 80, y: 40 }; //Ecke rechts
            let dx = p2.x - p1.x;
            let dy = p2.y - p1.y;
            let length = Math.sqrt(dx * dx + dy + dy);
            let angle = Math.atan2(dy, dx);
            draw(angle);
            requestAnimationFrame(animate);
            function animate(time) {
                requestAnimationFrame(animate);
                draw(angle);
                angle += Math.PI / 60;
            }
            function draw(radianAngle) {
                AS_Zauberbild.crc2.clearRect(0, 0, canvas.width, canvas.height);
                AS_Zauberbild.crc2.beginPath();
                AS_Zauberbild.crc2.fillStyle = "white";
                AS_Zauberbild.crc2.rect(p1.x, p1.y, 80, 80);
            }
        }
    }
    AS_Zauberbild.Raute = Raute;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Raute.js.map