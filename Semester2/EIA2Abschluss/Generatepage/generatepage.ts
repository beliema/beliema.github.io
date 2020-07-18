namespace AS_Zauberbild {

    console.log("Zauberbild-Editor wird geladen");

    window.addEventListener("load", handleLoad);

    let url: string = "zauberbild.html";
  


function handleLoad (_event: Event): void {
    console.log("test");

       // let response: Response = await fetch(""); 
      //  let offer: string = await response.text();
      //  let data: Data = JSON.parse(offer);

        //Festlegung Variablen in Verbindung mit HTML-Elementen 

        let format: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#Zeichenfläche");
     //   let farbe: 
        let symbol: HTMLInputElement =  <HTMLInputElement>document.querySelector("#Symbol");

        //Button-Elemente 
        let symbolspeichern: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#SaveSymbol");
        let neuesCanvas: HTMLButtonElement = <HTMLButtonElement>document.getElementById("neuCanvas");
        let speichern: HTMLButtonElement = <HTMLButtonElement>document.getElementById("speichern");


        //Submit-Button 

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Submit");
        console.log("Daten werden an den Server übermittelt");


        // Installation der Listener 

        format.addEventListener("click", generateCanvasSize);
    //  farbe.addEventListener("click", handleChange);
       // symbol.addEventListener("click", chooseSymbol);

       // symbolspeichern.addEventListener("click", saveSymbolValue);
     
        neuesCanvas.addEventListener("click", (_event: Event) => {

            let deleteOldCanvas: Node = <Node>_event.target;
            let getparentdiv: Node = <Node>deleteOldCanvas.parentNode;
            let getgrandparentdiv: Node = <Node>getparentdiv.parentNode;
            getgrandparentdiv.removeChild(getparentdiv); 
            console.log(" Button 'Neu' wurde geklickt, Canvasdaten werden gelöscht"); 

        } ); 
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

            async function sendInOrder(_event: Event): Promise<void> {
                console.log("Daten werden abgeschickt");

                let formData: FormData = new FormData(document.forms[0]);
                let query: URLSearchParams = new URLSearchParams(<any>formData);
                let response: Response = await fetch(url + "?" + query.toString());
                let responseText: string = await response.text();
                alert(responseText);

            }

            //Funktion, die das alte/gezeichnete Canvas löscht 
            
            function createNewCanvas (_data: number, _event: any): void {

                let deleteOldCanvas: Node = <Node>_event.target;
                let getparentdiv: Node = <Node>deleteOldCanvas.parentNode;
                let getgrandparentdiv: Node = <Node>getparentdiv.parentNode;
                getgrandparentdiv.removeChild(getparentdiv); 

            } 


        }


               
    }



} 
