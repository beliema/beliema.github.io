namespace L11_Virus {

    export class Cell {
        public position: Vector;
        public velocity: Vector;
        public size: number;
        public type: number; 
        public expendable: boolean; 


        constructor(_position: Vector) { 
            this.position = _position;
            this.velocity = new Vector (0,0); 
            this.size 
        }

        public draw(): void {

        }

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

        }
    }
}