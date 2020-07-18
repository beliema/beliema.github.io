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
        console.log("test");
        // let response: Response = await fetch(""); 
        //  let offer: string = await response.text();
        //  let data: Data = JSON.parse(offer);
        //Festlegung Variablen in Verbindung mit HTML-Elementen 
        let format = document.querySelector("#Zeichenfläche");
        //   let farbe: 
        let symbol = document.querySelector("#Symbol");
        //Button-Elemente 
        let symbolspeichern = document.querySelector("#SaveSymbol");
        let neuesCanvas = document.getElementById("neuCanvas");
        let speichern = document.getElementById("speichern");
        //Submit-Button 
        let submit = document.querySelector("button#Submit");
        console.log("Daten werden an den Server übermittelt");
        // Installation der Listener 
        format.addEventListener("click", generateCanvasSize);
        //  farbe.addEventListener("click", handleChange);
        // symbol.addEventListener("click", chooseSymbol);
        // symbolspeichern.addEventListener("click", saveSymbolValue);
        neuesCanvas.addEventListener("click", (_event) => {
            let deleteOldCanvas = _event.target;
            let getparentdiv = deleteOldCanvas.parentNode;
            let getgrandparentdiv = getparentdiv.parentNode;
            getgrandparentdiv.removeChild(getparentdiv);
            console.log(" Button 'Neu' wurde geklickt, Canvasdaten werden gelöscht");
        });
        //  speichern.addEventListener("click", saveCanvasData);
        // submit.addEventListener("click", sendInOrder);    
        //Funktion 1: Je nachdem welches Format ausgewählt wurde, generieret sich ein Canvas in vordefinierter Größe. 
        function generateCanvasSize(_event) {
            let format1 = document.getElementById("Format1");
            let format2 = document.getElementById("Format2");
            let format3 = document.getElementById("Format3");
            let Canvas1 = document.getElementById("canvas1");
            let Canvas2 = document.getElementById("canvas2");
            let Canvas3 = document.getElementById("canvas3");
            Canvas1.style.height = "500px";
            if (format1.checked == true) {
                Canvas1.hidden = false;
                Canvas2.hidden = true;
                Canvas3.hidden = true;
                console.log("Canvas-Format 500 x 500 Pixel wird generiert");
            }
            else if (format2.checked == true) {
                Canvas1.hidden = true;
                Canvas2.hidden = false;
                Canvas3.hidden = true;
                console.log("Canvas-Format 500 x 00 Pixel wird generiert");
            }
            else if (format3.checked == true) {
                Canvas1.hidden = true;
                Canvas2.hidden = true;
                Canvas3.hidden = false;
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
            //Funktion, die das alte/gezeichnete Canvas löscht 
            function createNewCanvas(_data, _event) {
                let deleteOldCanvas = _event.target;
                let getparentdiv = deleteOldCanvas.parentNode;
                let getgrandparentdiv = getparentdiv.parentNode;
                getgrandparentdiv.removeChild(getparentdiv);
            }
        }
    }
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=generatepage.js.map