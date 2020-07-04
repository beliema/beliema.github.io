var L11_Virus;
(function (L11_Virus) {
    class Pattern {
        constructor(_position) {
            this.position = _position;
        }
        draw(_position) {
            //    console.log("drawpattern");
            let middle = 0.6;
            let gradient = L11_Virus.crc2.createLinearGradient(0, 0, 0, L11_Virus.crc2.canvas.height);
            gradient.addColorStop(0, "#FA5858");
            gradient.addColorStop(middle, "#F8E0E6");
            L11_Virus.crc2.fillStyle = gradient;
            L11_Virus.crc2.fillRect(0, 0, L11_Virus.crc2.canvas.width, L11_Virus.crc2.canvas.height);
            L11_Virus.crc2.save();
            let pattern = document.createElement("canvas").getContext("2d");
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
            L11_Virus.crc2.fillStyle = L11_Virus.crc2.createPattern(pattern.canvas, "repeat");
            L11_Virus.crc2.fillRect(0, 0, L11_Virus.crc2.canvas.width, L11_Virus.crc2.canvas.height);
            // fill primary canvas with pattern
            L11_Virus.crc2.save();
            L11_Virus.crc2.restore();
        }
    }
    L11_Virus.Pattern = Pattern;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=Pattern.js.map