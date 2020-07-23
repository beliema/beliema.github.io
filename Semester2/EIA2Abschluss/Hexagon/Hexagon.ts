namespace AS_Zauberbild {

    export class Hexagon extends Moveable {

        constructor(_position?: Vector) {

            super(_position);

            this.velocity = new Vector(0,0); 
        }

        move(_timeslice: number): void {
            
            super.move(_timeslice);
    
            if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
            this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
            this.position.y -= crc2.canvas.height;
    
    
        }

       
        public draw(): void {

            let gradient: CanvasGradient = crc2.createLinearGradient(10,40, 100, 40 );

            gradient.addColorStop(0, "#FB8D53" );
            gradient.addColorStop(0.45, "#CA5D6");
            gradient.addColorStop(1,"#93278F" );


            crc2.save(); 
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(10,40);
            crc2.lineTo(30,0);
            crc2.lineTo(80,0);
            crc2.lineTo(100,40);
            crc2.lineTo(80,80);
            crc2.lineTo(30,80);
            crc2.lineTo(10,40);
            crc2.stroke();

            crc2.fillStyle = "gradient";
            crc2.fill();
            crc2.restore();

        }
    }
}