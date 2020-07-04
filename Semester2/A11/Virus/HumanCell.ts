namespace L11_Virus {
    
    export class HumanCell extends Cell {
         // private isHit(_hotspot: Vector): void; 

        constructor(_position: Vector, _size: Vector) { 
            super(_position); 

            /* if (_position)
                this.position = _position;
            else
                this.position = new Vector(60, 420);*/ 
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

           // this.type = Math.floor(Math.random() * 4);
           //  this.size = _size;
        }

        public moveHumanCell(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        public drawHumanCell(): void {

            let r1: number = 1; 
            let r2: number = 13; 
            let nParticles: number = 15; 
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); 
            particle.arc(0, 0, r2, 0, 2 * Math.PI); 
    
            
            gradient.addColorStop(0, "#B895A3");
            gradient.addColorStop(0.5, "#FFFFFF"); 
            gradient.addColorStop(1, "#2E2E2E");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.fill(particle);
            crc2.restore();
        }


            
    }
        
    
}