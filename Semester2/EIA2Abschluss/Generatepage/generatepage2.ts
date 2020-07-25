namespace AS_Zauberbild {
    console.log("Zauberbild-Editor wird geladen!");

    export let crc2: CanvasRenderingContext2D;

    let canvas: HTMLCanvasElement;
    let newCanvas: HTMLButtonElement;
    let saveB: HTMLButtonElement;
    let backgroundColor: HTMLInputElement;

    let semicircleIn: HTMLInputElement;
    let circleIn: HTMLInputElement;
    let rhombusIn: HTMLInputElement;
    let heartIn: HTMLInputElement;
    let hexagonIn: HTMLInputElement;

    let deleteShape: boolean;
    let symbole: HTMLDivElement;

    let shapes: Shape[] = [];
    let backgroundImage: ImageData;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("handleLoad-Funktion wird aufgerufen");

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector(".canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")

        deleteShape = true;

        // Verknüfung der Variablen mit den jeweiligen HTML-Elementen 

        let format: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Zeichenfläche");
        backgroundColor = <HTMLInputElement>document.querySelector("#Farbauswahl");
        symbole = <HTMLDivElement>document.getElementById("Symbol");

        semicircleIn = <HTMLInputElement>document.getElementById("Semicircle");
        circleIn = <HTMLInputElement>document.getElementById("Circle");
        rhombusIn = <HTMLInputElement>document.getElementById("Rhombus");
        heartIn = <HTMLInputElement>document.getElementById("Heart");
        hexagonIn = <HTMLInputElement>document.getElementById("Hexagon");
    



        newCanvas = <HTMLButtonElement>document.getElementById("neuCanvas");
        saveB = <HTMLButtonElement>document.getElementById("speichern");

        // Installation der Listener 

        format.addEventListener("change", (_event: Event): => {

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

        });


        backgroundColor.addEventListener("change", (_event: Event) => {

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
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe2.checked == true) {
                crc2.fillStyle = "#F5A9A9";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe3.checked == true) {
                crc2.fillStyle = "#D0A9F5";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe4.checked == true) {
                crc2.fillStyle = "#A9BCF5";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe5.checked == true) {
                crc2.fillStyle = "#A9F5D0";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe6.checked == true) {
                crc2.fillStyle = "#FACC2E";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe7.checked == true) {
                crc2.fillStyle = "#FE2E2E";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe8.checked == true) {
                crc2.fillStyle = "#A901DB";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe9.checked == true) {
                crc2.fillStyle = "#0174DF";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe10.checked == true) {
                crc2.fillStyle = "#04B431";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe16.checked == true) {
                crc2.fillStyle = "white";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe17.checked == true) {
                crc2.fillStyle = "black";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe11.checked == true) {
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
                gradient.addColorStop(0, "#F2F5A9");
                gradient.addColorStop(1, "#FACC2E");

                crc2.fillStyle = gradient;
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe12.checked == true) {
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
                gradient.addColorStop(0, "#F5A9A9");
                gradient.addColorStop(1, "#FE2E2E");

                crc2.fillStyle = gradient;
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe13.checked == true) {
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
                gradient.addColorStop(0, "#D0A9F5");
                gradient.addColorStop(1, "#A901DB");

                crc2.fillStyle = gradient;
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe14.checked == true) {
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
                gradient.addColorStop(0, "#A9BCF5");
                gradient.addColorStop(1, "#0174DF");

                crc2.fillStyle = gradient;
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

            else if (farbe15.checked == true) {
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
                gradient.addColorStop(0, "#A9F5D0");
                gradient.addColorStop(1, "#04B431");

                crc2.fillStyle = gradient;
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }
            else if (farbe18.checked == true) {
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
                gradient.addColorStop(0, "white");
                gradient.addColorStop(1, "black");

                crc2.fillStyle = gradient;
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            }

        });

        newCanvas.addEventListener("click", (_event: Event) => {
            crc2.clearRect(0, 0, canvas.width, canvas.height)
        }
        );

        setInterval(animate, 100);

        symbole.addEventListener("click", drawShapeinCanvas);
      /*  circleIn.addEventListener("click", drawShapeinCanvas);
        rhombusIn.addEventListener("click", drawShapeinCanvas);
        heartIn.addEventListener("click", drawShapeinCanvas);
        hexagonIn.addEventListener("click", drawShapeinCanvas); */
        createShapes();


    }

    function drawShapeinCanvas(_event: MouseEvent): void {
        console.log("Symbol wird gezeichnet");

        let x: number = 70;
        let y: number = 90; 

        //Halbkreis 

        if (semicircleIn.checked == true) {
            let position: Vector = new Vector(x, y);
            let semicircle: Semicircle = new Semicircle(position);
            semicircle.draw();
            shapes.push(semicircle);

        }

        else if (circleIn.checked == true) { 
            let position: Vector = new Vector(x, y);
            let circle: Circle = new Circle(position);
            circle.draw();
            shapes.push(circle);
        }

        else if (rhombusIn.checked == true) {
            let position: Vector = new Vector(x, y);
            let rhombus: Rhombus = new Rhombus(position);
            rhombus.draw();
            shapes.push(rhombus);
        }

        else if (heartIn.checked == true) {
            let position: Vector = new Vector(x, y);
            let heart: Heart = new Heart(position);
            heart.draw();
            shapes.push(heart);
        }

        else if (hexagonIn.checked == true) {
            let position: Vector = new Vector(x, y);
            let hexagon: Hexagon = new Hexagon(position);
            hexagon.draw();
            shapes.push(hexagon);
        }

    }





    function createShapes(): void {
        let _shape: number;

        //Kreis 
        for (let i: number = 0; i < _shape; i++) {
            let x: number = 50;
            let y: number = 70;
            let position: Vector = new Vector(x, y);
            let circle: Circle = new Circle(position);
            circle.draw();
            //shapes.push(circle);
            console.log(shapes);

            //Halbkreis 
            for (let i: number = 0; i < _shape; i++) {
                let x: number = 340;
                let y: number = 20;
                let position: Vector = new Vector(x, y);
                let semicircle: Semicircle = new Semicircle(position);
                semicircle.draw();
                console.log(shapes);

            }

            //Raute
            for (let i: number = 0; i < _shape; i++) {
                let x: number = 40;
                let y: number = 240;
                let position: Vector = new Vector(x, y);
                let rhombus: Rhombus = new Rhombus(position);
                rhombus.draw();
                console.log(shapes);

            }

            //Herz 
            for (let i: number = 0; i < _shape; i++) {
                let x: number = 50;
                let y: number = 20;
                let position: Vector = new Vector(x, y);
                let heart: Heart = new Heart(position);
                heart.draw();
                console.log(shapes);

            }

            //Hexagon 
            for (let i: number = 0; i < _shape; i++) {
                let x: number = 350;
                let y: number = 250;
                let position: Vector = new Vector(x, y);
                let hexagon: Hexagon = new Hexagon(position);
                hexagon.draw();
                console.log(shapes);

            }
        }
    }





}