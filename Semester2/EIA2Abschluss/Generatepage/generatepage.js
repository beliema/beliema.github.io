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
    window.addEventListener("load", handleload);
    let url = "zauberbild.html";
    function handleload(_event) {
        // let response: Response = await fetch(""); 
        //  let offer: string = await response.text();
        //  let data: Data = JSON.parse(offer);
        //Festlegung Variablen in Verbindung mit HTML-Elementen 
        let format = document.querySelector("#Canvas");
        //   let farbe: 
        let symbol = document.querySelector("#Symbol");
        //Button-Elemente 
        let symbolspeichern = document.querySelector("#SaveSymbol");
        let neuesCanvas = document.querySelector('#neuCanvas');
        let speichern = document.querySelector("#speichern");
        //Canvas-Größen 
        let format1 = document.getElementById("#canvas1");
        let format2 = document.getElementById("#canvas2");
        let format3 = document.getElementById("#canvas3");
        //Submit-Button 
        let submit = document.querySelector("button#Submit");
        console.log("Daten werden an den Server übermittelt");
        // Installation der Listener 
        format.addEventListener("click", generateCanvasSize);
        //  farbe.addEventListener("click", handleChange);
        // symbol.addEventListener("click", chooseSymbol);
        // symbolspeichern.addEventListener("click", saveSymbolValue);
        // neuesCanvas.addEventListener("click", createNewCanvas);
        //  speichern.addEventListener("click", saveCanvasData);
        // submit.addEventListener("click", sendInOrder);    
        //Funktion 1: Je nachdem welches Format ausgewählt wurde, generieret sich ein Canvas in vordefinierter Größe. 
        function generateCanvasSize() {
            if (format1.checked == true) {
                format1.disabled = false;
                format2.disabled = true;
                format3.disabled = true;
                console.log("Canvas-Format 500 x 500 Pixel wird generiert");
            }
            else if (format2.checked == true) {
                format1.disabled = true;
                format2.disabled = false;
                format3.disabled = true;
                console.log("Canvas-Format 300 x 500 Pixel wird generiert");
            }
            else if (format3.checked == true) {
                format1.disabled = true;
                format2.disabled = true;
                format3.disabled = false;
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
            //Funktion, die das alte Canvas löscht und 
        }
    }
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=generatepage.js.map