namespace AS_Zauberbild {

    export abstract class Rotation {
        public position: Vector;
        public velocity: Vector;
        public expendable: boolean = false; 
        public size: number; 
        public color: string;

    constructor(_position: Vector) {
       
         if (_position)
         this.position = _position.copy();
         else 
         this.velocity = new Vector(0, 0);

         this.velocity = new Vector(0, 0);

    }

    public abstract draw(): void; 

    public abstract rotate(): void;
    

    }
}