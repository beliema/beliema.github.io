namespace AS_Zauberbild {

    export class Kreis extends Moveable {

        constructor(_position?: Vector) {
            
            super(_position); 
            

            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);


            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
            this.radius = 20;
        }
    }
}