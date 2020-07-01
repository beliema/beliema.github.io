namespace L11_Virus {
    export class CoronaVirus extends Cell {
       
        private target: HumanCell; 

        constructor(_position: Vector) { 
            super(_position); 

          /*  if (_position)
                this.position = _position;
            else
                this.position = new Vector(100, 150); */ 
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

          //  this.type = Math.floor(Math.random() * 4);
          //   this.size = _size;
        }

        moveCorona(_timeslice: number): void {
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

        drawCorona(): void { 
            
        }

    }
}