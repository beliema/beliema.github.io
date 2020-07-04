namespace L11_Virus {
    export class Pattern {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        public draw(_position: Vector): void {
        //    console.log("drawpattern");
        let middle: number = 0.6; 
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height); 
        gradient.addColorStop(0, "#FA5858");
        gradient.addColorStop(middle, "#F8E0E6");
       


        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.save();
            let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
            pattern.canvas.width = 100;
            pattern.canvas.height = 40;
            pattern.fillStyle = "#97a0db1a";
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 20);
            pattern.lineTo(20, 20);
            pattern.lineTo(40, 0);
            pattern.lineTo(60, 0);
            pattern.lineTo(100, 20);
            pattern.lineTo(60, 40);
            pattern.lineTo(40, 40);
            pattern.lineTo(20, 20);

        
            pattern.strokeStyle = "#E9967A";
            pattern.stroke();
            pattern.closePath();

        //Punkt in Zelle
            pattern.beginPath();
            pattern.arc(50, 20, 2, 0, 2 * Math.PI);
            pattern.fillStyle = "#88888844";
            pattern.fill();

            crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

            

            // fill primary canvas with pattern
            crc2.save(); 
            crc2.restore();
        }
    }
}