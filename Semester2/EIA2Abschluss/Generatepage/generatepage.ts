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
        let farbe: HTMLInputElement = <HTMLInputElement>document.querySelector("#Farbauswahl");
        let symbol: HTMLInputElement =  <HTMLInputElement>document.querySelector("#Symbol");
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector(".canvas");

        //Button-Elemente 
        let symbolspeichern: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#SaveSymbol");
        let neuesCanvas: HTMLButtonElement = <HTMLButtonElement>document.getElementById("neuCanvas");
        let speichern: HTMLButtonElement = <HTMLButtonElement>document.getElementById("speichern");


        //Submit-Button 

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Submit");
        console.log("Daten werden an den Server übermittelt");


        // Installation der Listener 

        format.addEventListener("click", generateCanvasSize);
    // Funktion ChangeCanvasColor: Die Farbe des Canvas wird dadurhc bestimmt, welches Input Element in der Div Farbenfläche ausgewählt wurde 
        farbe.addEventListener("click", (_event: Event) => {
                let farbe1: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe1"); 
                let farbe2: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe2"); 
                let farbe3: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe3"); 
                let farbe4: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe4"); 
                let farbe5: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe5"); 
                let farbe6: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe6"); 
                let farbe7: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe7"); 
                let farbe8: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe8"); 
                let farbe9: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe9"); 
                let farbe10: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe10"); 
                let farbe11: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe11");
                let farbe12: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe12"); 
                let farbe13: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe13");  
                let farbe14: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe14"); 
                let farbe15: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe15"); 
                let farbe16: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe16"); 
                let farbe17: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe17"); 
                let farbe18: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe18"); 

                if (farbe1.checked == true) {
                    crc2.fillStyle = "#F2F5A9";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe2.checked == true) {
                    crc2.fillStyle = "#F5A9A9";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe3.checked == true) {
                    crc2.fillStyle = "#D0A9F5";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe4.checked == true) {
                    crc2.fillStyle = "#A9BCF5";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe5.checked == true) {
                    crc2.fillStyle = "#A9F5D0";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe6.checked == true) {
                    crc2.fillStyle = "#FACC2E";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe7.checked == true) {
                    crc2.fillStyle = "#FE2E2E";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe8.checked == true) {
                    crc2.fillStyle = "#A901DB";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe9.checked == true) {
                    crc2.fillStyle = "#0174DF";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe10.checked == true) {
                    crc2.fillStyle = "#04B431";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe16.checked == true) {
                    crc2.fillStyle = "white";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe17.checked == true) {
                    crc2.fillStyle = "black";
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }             

                else if (farbe11.checked == true) {
                    let gradient: CanvasGradient = crc2.createLinearGradient(0,0, 0, crc2.canvas.height);
                    gradient.addColorStop(0, "#F2F5A9");
                    gradient.addColorStop(1, "#FACC2E");
        
                    crc2.fillStyle = gradient;
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe12.checked == true) {
                    let gradient: CanvasGradient = crc2.createLinearGradient(0,0, 0, crc2.canvas.height);
                    gradient.addColorStop(0, "#F5A9A9");
                    gradient.addColorStop(1, "#FE2E2E");
        
                    crc2.fillStyle = gradient;
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe13.checked == true) {
                    let gradient: CanvasGradient = crc2.createLinearGradient(0,0, 0, crc2.canvas.height);
                    gradient.addColorStop(0, "#D0A9F5");
                    gradient.addColorStop(1, "#A901DB");
        
                    crc2.fillStyle = gradient;
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe14.checked == true) {
                    let gradient: CanvasGradient = crc2.createLinearGradient(0,0, 0, crc2.canvas.height);
                    gradient.addColorStop(0, "#A9BCF5");
                    gradient.addColorStop(1, "#0174DF");
        
                    crc2.fillStyle = gradient;
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

                else if (farbe15.checked == true) {
                    let gradient: CanvasGradient = crc2.createLinearGradient(0,0, 0, crc2.canvas.height);
                    gradient.addColorStop(0, "#A9F5D0");
                    gradient.addColorStop(1, "#04B431");
        
                    crc2.fillStyle = gradient;
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }
                else if (farbe18.checked == true) {
                    let gradient: CanvasGradient = crc2.createLinearGradient(0,0, 0, crc2.canvas.height);
                    gradient.addColorStop(0, "white");
                    gradient.addColorStop(1, "black");
        
                    crc2.fillStyle = gradient;
                    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
                }

        });

       // symbol.addEventListener("click", chooseSymbol);

       // symbolspeichern.addEventListener("click", saveSymbolValue);
     
        neuesCanvas.addEventListener("click", (_event: Event) => {
                crc2.clearRect(0,0, canvas.width, canvas.height)
            } 
        ); 
        
       // speichern.addEventListener("click", saveCanvasData);

        //submit.addEventListener("click", sendInOrder);    

        //Funktion 1: Je nachdem welches Format ausgewählt wurde, generieret sich ein Canvas in vordefinierter Größe. 

            function generateCanvasSize(_event: Event): void {

                let format1: HTMLInputElement = <HTMLInputElement>document.getElementById("Format1");
                let format2: HTMLInputElement = <HTMLInputElement>document.getElementById("Format2");
                let format3: HTMLInputElement = <HTMLInputElement>document.getElementById("Format3");
                
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

            async function sendInOrder(_event: Event): Promise<void> {
                console.log("Daten werden abgeschickt");

                let formData: FormData = new FormData(document.forms[0]);
                let query: URLSearchParams = new URLSearchParams(<any>formData);
                let response: Response = await fetch(url + "?" + query.toString());
                let responseText: string = await response.text();
                alert(responseText);

            }



            


        }


               
    }



} 
