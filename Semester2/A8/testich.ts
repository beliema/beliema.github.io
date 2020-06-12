//Abgabe L08_Canvas; Alina Zeiher mit Hilfe von Code von Alida Kohler

namespace L08_Virus {

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    let width: number;
    let height: number;
    let middleheigth: number = 600;  //Mitte der Vertikalen
    let middlewigth: number= 500;   //Mitte der Horizontalen


    window.addEventListener("load", createImage);


    function createImage(): void {
        
        drawBackground();
        createCells();
    }
   

    
    function handleLoad(_event: Event): void {
        let virus: HTMLCanvasElement | null = document.querySelector("virus");
        if (!virus)
            return;
        crc2 = <CanvasRenderingContext2D>virus.getContext("2d");

        

    }
       


        function drawBackground(): void {
            console.log("Hintergrund Lungengewebe");

            let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
            pattern.canvas.width = 100;
            pattern.canvas.height = 40;
            pattern.fillStyle = "#97a0db3a";
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 20);
            pattern.lineTo(20, 20);
            pattern.lineTo(40, 0);
            pattern.lineTo(60, 0);
            pattern.lineTo(100, 20);
            pattern.lineTo(60, 40);
            pattern.lineTo(40, 40);
            pattern.lineTo(20, 20);

            let gradient: CanvasGradient = crc2.createLinearGradient( 0,0,0, crc2.canvas.height);
            gradient.addColorStop(0, "lightred");
            gradient.addColorStop(middleheigth, "lightpink");
            gradient.addColorStop(1, "red");

            crc2.fillStyle = gradient;
            crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
        
            //Pattern for Cell Membran
            pattern.strokeStyle = "#88888844";
            pattern.stroke();
            pattern.closePath();
        }
        

        function resizeCanvas(): void {
            width= window.innerWidth;
            canvas.setAttribute("width", width + "px");
            height = window.innerHeight;
            canvas.setAttribute("height", height + "px");
            //Background-Color: 
            crc2.fillStyle ="#DEEFF5";
            crc2.fillRect(0,0,width,height);
        }


        
        function createCells(): void {


        }
    
}