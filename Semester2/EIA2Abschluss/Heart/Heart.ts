namespace AS_Zauberbild {

    export class Heart extends Shape {
        
    
        constructor(_position?: Vector) {

            super(_position);

            this.velocity = new Vector ( 0,0); 

        }

        draw(): void {       
                crc2.beginPath();
                crc2.bezierCurveTo(75, 40, 70, 25, 50, 25);
                crc2.bezierCurveTo(10, 25, 20, 62.5, 20, 62.5);
                crc2.bezierCurveTo(22, 80, 40, 102, 75, 120);
                crc2.bezierCurveTo(105, 110, 130, 80, 130, 62.5);
                crc2.bezierCurveTo(130, 62.5, 135, 28, 105, 25);
                crc2.bezierCurveTo(80, 25, 75, 37, 75, 40);
                crc2.fillStyle = "#F5A9A9";
                crc2.fill();
        }
    }

}