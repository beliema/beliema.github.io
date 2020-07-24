namespace AS_Zauberbild {

    export class Raute extends Rotation {



        constructor(_position?: Vector) {

            super(_position);

            this.velocity = new Vector (0,0); 

        }

        public draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y); 
            crc2.moveTo(0,40);
            crc2.lineTo(40,0);
            crc2.lineTo(80,40);
            crc2.lineTo(40,80);
            crc2.lineTo(0,40);
            crc2.stroke();

            crc2.fillStyle = "white";
            crc2.fill();
            crc2.restore();


        }

        public rotate(): void {

            let time: number; 
            let canvas = document.getElementsByClassName(".canvas"); 
            let p1={ x: 0, y: 40};  //Ecke links    
            let p2={x: 80, y: 40};  //Ecke rechts
            let dx= p2.x-p1.x;
            let dy= p2.y-p1.y; 
            let length = Math.sqrt(dx*dx+dy+dy); 
            let angle = Math.atan2(dy, dx); 

            draw(angle); 
            requestAnimationFrame(animate); 

            function animate(time){
                requestAnimationFrame(animate);
                draw(angle);
                angle += Math.PI/60;

            }

            function draw(radianAngle){
                crc2.clearRect(0,0, canvas.width, canvas.height); 
                crc2.beginPath();
                crc2.fillStyle = "white";
                crc2.rect(p1.x, p1.y, 80, 80);


            }



        }


    }
}