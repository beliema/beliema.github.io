namespace AS_Zauberbild {

    console.log("Zauberbild-Editor wird geladen");

    window.addEventListener("load", handleLoad);

    let url: string = "zauberbild.html";
  


function handleLoad (_event: Event): void {

       // let response: Response = await fetch(""); 
      //  let offer: string = await response.text();
      //  let data: Data = JSON.parse(offer);

        //Festlegung Variablen in Verbindung mit HTML-Elementen 

        let format: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#Zeichenfläche");
     //   let farbe: 
        let symbol: HTMLInputElement =  <HTMLInputElement>document.querySelector("#Symbol");

        //Button-Elemente 
        let symbolspeichern: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#SaveSymbol");
        let neuesCanvas: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#neuCanvas');
        let speichern: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#speichern");


        //Submit-Button 

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Submit");
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

            function generateCanvasSize(_event: Event): void {

                let format1: HTMLInputElement = <HTMLInputElement>document.getElementById("Format1");
                let format2: HTMLInputElement = <HTMLInputElement>document.getElementById("Format2");
                let format3: HTMLInputElement = <HTMLInputElement>document.getElementById("Format3");

                let Canvas1: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");
                let Canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas2");
                let Canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas3");

                if (format1.checked == true) {
                    Canvas1.disabled = false;
                    Canvas2.disabled = true;
                    Canvas3.disabled = true;

                    

                    console.log("Canvas-Format 500 x 500 Pixel wird generiert"); 

                }
                
                else if (format2.checked == true) {
                    Canvas1.disabled = true;
                    Canvas2.disabled = false; 
                    Canvas3.disabled = true; 

                    console.log("Canvas-Format 300 x 500 Pixel wird generiert");

                }

                else if (format3.checked == true) {
                    Canvas1.disabled = true;
                    Canvas2.disabled = true;
                    Canvas3.disabled = false; 

                    console.log("Canvas-Format 500 x 300 Pixel wird generiert"); 
                }


            // Asynchrone Funktion, die die Daten des gemalten Canvas an den Server schickt 

            async function sendInOrder(_event: Event): Promise<void> {
                console.log("Daten werden abgeschickt");

                let formData: FormData = new FormData(document.forms[0]);
                let query: URLSearchParams = new URLSearchParams(<any>formData);
                let response: Response = await fetch(url + "?" + query.toString());
                let responseText: string = await response.text();
                alert(responseText);

            }

            //Funktion, die das alte Canvas löscht und 
            
        }



    }

    
    
}