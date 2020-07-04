namespace L11_Virus {
    
    export class Antibody extends Cell {
     

        constructor(_position: Vector) { 
            super(_position);
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

        }

        public moveAntibody(_timeslice: number): void {
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

        public drawAntibody(): void {
          crc2.beginPath();
          crc2.moveTo(this.position.x, this.position.y);
          crc2.lineTo(this.position.x + 22, this.position.y - 12 );
          crc2.lineWidth = 3;
          crc2.strokeStyle = "grey";
          crc2.stroke();
          crc2.closePath();
          
  
          crc2.beginPath();
          crc2.arc(this.position.x + 31, this.position.y - 18, 12, 0.7, 1.4 * Math.PI);
          crc2.stroke();
          crc2.closePath();
        }
        
    }
}