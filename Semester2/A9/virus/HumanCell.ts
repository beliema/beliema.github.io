namespace L09_Virus {
    
    export class HumanCell {
        position: Vector;
        velocity: Vector;
        size: number; 
        type: any;

        constructor(_size: number, _position?: Vector) { 
            console.log("menschliche Zelle wird erstellt");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(60, 420);
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        moveHumanCell(_timeslice: number): void {
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

        drawHumanCell(): void {

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
            crc2.scale(this.size, this.size);
            crc2.translate(60, 420);
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }
        
    }
}