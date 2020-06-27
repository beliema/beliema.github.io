namespace L09_Virus {
    export class CoronaVirus {
        position: Vector;
        velocity: Vector;
        size: number;
        target: HumanCell; 
        type: number;

        constructor(_size: number, _position?: Vector) { //Constructor soll Größe von Außen übernehmen, haben keinen Rückgabewert 
            console.log("erstellen CoronaVirus");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(100, 150);
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        moveCorona(_timeslice: number): void {
            
        }

    }
}