namespace AS_Zauberbild {

    export class Halbkreis extends Rotation {

        constructor(_position?: Vector) {

            super(_position);

            this.velocity = new Vector ( 0,0); 

        }

        public draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(300, 300, 40, 0, 1 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 1;
            crc2.fillStyle = "#F6C135";
            crc2.fill();
            crc2.rotate(Math.PI / 2);
            crc2.strokeStyle = "#F6C135";
            crc2.stroke();
            }
    }
}