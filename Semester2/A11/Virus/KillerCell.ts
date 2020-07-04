namespace L11_Virus {
    
    export class KillerCell extends Cell {
    
      //  size: number; 
      //  type: any;

        constructor(_position: Vector) { 
            super(_position);

            this.velocity = new Vector(0,0);
            this.velocity.random(10,100); 

        } 

       public  move(_timeslice: number): void {
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

            let radiusK: number =15; 
            /*let r1: number = 1; 
            let r2: number = 15; 
            let nParticles: number = 7; 
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); 
            particle.arc(0, 0, r2, 0, 2 * Math.PI); 
            gradient.addColorStop(0, "#000000"); 
            gradient.addColorStop(0.4, "#FFFFFF"); 
            gradient.addColorStop(0.8, "#F5A9BC"); */

            crc2.beginPath();
            crc2.moveTo(this.position.x,this.position.y);
            crc2.arc(this.position.x + 20, this.position.y + 20, radiusK, 0.2 * Math.PI, 1.8 * Math.PI, false);
            crc2.lineTo(this.position.x + 20, this.position.y + 20);
            crc2.closePath();
            crc2.fillStyle = "grey";
            crc2.strokeStyle = "#ffffff";
            crc2.fill();
            crc2.stroke();
            crc2.save();
            
           /* crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.stroke(antibodyPaths[this.type]);
            crc2.restore(); */ 
        }
        
    }
}