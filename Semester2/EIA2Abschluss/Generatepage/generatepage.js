var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var AS_Zauberbild;
(function (AS_Zauberbild) {
    console.log("Zauberbild-Editor wird geladen");
    window.addEventListener("load", handleLoad);
    let url = "zauberbild.html";
    function handleLoad(_event) {
        // let response: Response = await fetch(""); 
        //  let offer: string = await response.text();
        //  let data: Data = JSON.parse(offer);
        //Festlegung Variablen in Verbindung mit HTML-Elementen 
        let format = document.querySelector("#Zeichenfläche");
        let farbe = document.querySelector("#Farbauswahl");
        let canvas = document.querySelector(".canvas");
        //Button-Elemente 
        let neuesCanvas = document.getElementById("neuCanvas");
        let speichern = document.getElementById("speichern");
        //Submit-Button 
        let submit = document.querySelector("button#Submit");
        console.log("Daten werden an den Server übermittelt");
        // Installation der Listener 
        format.addEventListener("click", generateCanvasSize);
        // Funktion ChangeCanvasColor: Die Farbe des Canvas wird dadurhc bestimmt, welches Input Element in der Div Farbenfläche ausgewählt wurde 
        farbe.addEventListener("click", (_event) => {
            let farbe1 = document.getElementById("Farbe1");
            let farbe2 = document.getElementById("Farbe2");
            let farbe3 = document.getElementById("Farbe3");
            let farbe4 = document.getElementById("Farbe4");
            let farbe5 = document.getElementById("Farbe5");
            let farbe6 = document.getElementById("Farbe6");
            let farbe7 = document.getElementById("Farbe7");
            let farbe8 = document.getElementById("Farbe8");
            let farbe9 = document.getElementById("Farbe9");
            let farbe10 = document.getElementById("Farbe10");
            let farbe11 = document.getElementById("Farbe11");
            let farbe12 = document.getElementById("Farbe12");
            let farbe13 = document.getElementById("Farbe13");
            let farbe14 = document.getElementById("Farbe14");
            let farbe15 = document.getElementById("Farbe15");
            let farbe16 = document.getElementById("Farbe16");
            let farbe17 = document.getElementById("Farbe17");
            let farbe18 = document.getElementById("Farbe18");
            if (farbe1.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#F2F5A9";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe2.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#F5A9A9";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe3.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#D0A9F5";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe4.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#A9BCF5";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe5.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#A9F5D0";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe6.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#FACC2E";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe7.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#FE2E2E";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe8.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#A901DB";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe9.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#0174DF";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe10.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#04B431";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe16.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "white";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe17.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "black";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe11.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#F2F5A9");
                gradient.addColorStop(1, "#FACC2E");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe12.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#F5A9A9");
                gradient.addColorStop(1, "#FE2E2E");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe13.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#D0A9F5");
                gradient.addColorStop(1, "#A901DB");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe14.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#A9BCF5");
                gradient.addColorStop(1, "#0174DF");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe15.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#A9F5D0");
                gradient.addColorStop(1, "#04B431");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe18.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "white");
                gradient.addColorStop(1, "black");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
        });
        neuesCanvas.addEventListener("click", (_event) => {
            AS_Zauberbild.crc2.clearRect(0, 0, canvas.width, canvas.height);
        });
        // speichern.addEventListener("click", saveCanvasData);    
        //Funktion 1: Je nachdem welches Format ausgewählt wurde, generieret sich ein Canvas in vordefinierter Größe. 
        function generateCanvasSize(_event) {
            let format1 = document.getElementById("Format1");
            let format2 = document.getElementById("Format2");
            let format3 = document.getElementById("Format3");
            if (format1.checked == true) {
                canvas.style.height = "500px";
                console.log("Canvas-Format 500 x 500 Pixel wird generiert");
            }
            else if (format2.checked == true) {
                canvas.style.height = "400px";
                console.log("Canvas-Format 500 x 400 Pixel wird generiert");
            }
            else if (format3.checked == true) {
                canvas.style.height = "300px";
                console.log("Canvas-Format 500 x 300 Pixel wird generiert");
            }
            // Asynchrone Funktion, die die Daten des gemalten Canvas an den Server schickt 
            function sendInOrder(_event) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("Daten werden abgeschickt");
                    let formData = new FormData(document.forms[0]);
                    let query = new URLSearchParams(formData);
                    let response = yield fetch(url + "?" + query.toString());
                    let responseText = yield response.text();
                    alert(responseText);
                });
            }
        }
    }
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=generatepage.js.map