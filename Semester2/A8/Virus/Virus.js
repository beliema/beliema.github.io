//Abgabe L08_Canvas; Alina Zeiher mit Hilfe von Code von Alida Kohler
var L08_Virus;
(function (L08_Virus) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    let width;
    let height;
    let middleheigth = 600; //Mitte der Vertikalen
    let middlewigth = 500; //Mitte der Horizontalen
    window.addEventListener("load", createImage);
    function createImage() {
        drawBackground();
        createCells();
    }
    function handleLoad(_event) {
        let virus = document.querySelector("virus");
        if (!virus)
            return;
        crc2 = virus.getContext("2d");
    }
    function drawBackground() {
        console.log("Hintergrund Lungengewebe");
        let pattern = document.createElement('canvas').getContext('2d');
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
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightred");
        gradient.addColorStop(middleheigth, "lightpink");
        gradient.addColorStop(1, "red");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //Pattern for Cell Membran
        pattern.strokeStyle = "#88888844";
        pattern.stroke();
        pattern.closePath();
    }
    function resizeCanvas() {
        width = window.innerWidth;
        canvas.setAttribute("width", width + "px");
        height = window.innerHeight;
        canvas.setAttribute("height", height + "px");
        //Background-Color: 
        crc2.fillStyle = "#DEEFF5";
        crc2.fillRect(0, 0, width, height);
    }
    function createCells() {
    }
})(L08_Virus || (L08_Virus = {}));
//# sourceMappingURL=Virus.js.map