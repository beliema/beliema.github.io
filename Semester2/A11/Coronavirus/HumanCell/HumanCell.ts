namespace L11_Virus {

    export class HumanCell extends Cell {




        constructor(_position?: Vector) {

            super(_position); 

            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
           

            this.radius = 15;
            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
        }

        public draw(): void {
            // console.log("drawHumanCell");
            let r1: number = 1; //Radius innen 
            let r2: number = 13; // Radius außen
            
        
            crc2.save();
            
            crc2.translate(this.position.x, this.position.y);

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, this.radius);
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath(); 
            gradient.addColorStop(0, "#B895A3");
            gradient.addColorStop(0.5, "#FFFFFF");
            gradient.addColorStop(1, "#2E2E2E"); 
            
            crc2.fillStyle = "#E6E6FA";
            crc2.lineWidth = 1;
            crc2.strokeStyle = "#E6E6FA";
    
            
            crc2.stroke();
            crc2.fill();
            crc2.restore();
          
        }

        
    }
}