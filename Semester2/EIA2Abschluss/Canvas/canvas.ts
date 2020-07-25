namespace AS_Zauberbild {
    console.log("Canvas wird geladen");

    export let crc2: CanvasRenderingContext2D;
    export let farbe: HTMLInputElement = <HTMLInputElement>document.querySelector("#Farbauswahl");
    

    let shapes: Shape[] = [];
    let semicircle: Semicircle[] = [];
    let heart: Heart[] = [];
    let hexagon: Hexagon[] = [];
    let circle: Circle[] = [];
    let rhombus: Rhombus[] = [];
    let background: ImageData;
    let canvas: HTMLCanvasElement;


    window.addEventListener("load", handleLoadCanvas);
  


    export function handleLoadCanvas(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")
        let symbole: HTMLDivElement = <HTMLDivElement>document.getElementById("Symbol");



        symbole.addEventListener("click", saveSymbol);
        canvas.addEventListener("mousedown", createSymbols);
        createSymbols(new Vector(0, 0), 1);
       // setInterval(frame, 100); 

    }

    function BackgroundData(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        background = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }

    function saveSymbol(_event: Event): void {

        let heartIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Herz");
        let rhombusIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Raute");
        let semicircleIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Halbkreis");
        let circleIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Kreis");
        let hexagonIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Hexagon");

        if (heartIn.checked == true) {
            console.log("Herz wird gezeichnet");
            heartIn.addEventListener("click", drawHeart);

        }

        else if (rhombusIn.checked == true) {
            console.log("Raute wird gezeichnet");
            rhombusIn.addEventListener("click", drawRhombus);
        }

        else if (semicircleIn.checked == true) {
            console.log("Halbkreis wird gezeichnet");
            semicircleIn.addEventListener("click", drawSemicircle);
        }

        else if (circleIn.checked == true) {
            console.log("Kreis wird gezeichnet");
            circleIn.addEventListener("click", drawCircle);
        }

        else if (hexagonIn.checked == true) {
            console.log("Hexagon wird gezeichnet");
            hexagonIn.addEventListener("click", drawHexagon);
        }

    }

    function drawHeart(_event: MouseEvent): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let position: Vector = new Vector(x, y);
        let heart: Heart = new Heart(position);
        heart.draw();
        shapes.push(heart);
    };

    function drawRhombus(_event: MouseEvent): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let position: Vector = new Vector(x, y);
        let rhombus: Rhombus = new Rhombus(position);
        rhombus.draw();
        shapes.push(rhombus);
    };

    function drawSemicircle(_event: MouseEvent): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let position: Vector = new Vector(x, y);
        let semicircle: Semicircle = new Semicircle(position);
        semicircle.draw();
        shapes.push(semicircle);
    };

    function drawCircle(_event: MouseEvent): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let position: Vector = new Vector(x, y);
        let circle: Circle = new Circle(position);
        circle.draw();
        shapes.push(circle);
    };

    function drawHexagon(_event: MouseEvent) {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let position: Vector = new Vector(x, y);
        let hexagon: Hexagon = new Hexagon(position);
        hexagon.draw();
        shapes.push(hexagon);
    };



    function createSymbols(_position: Vector, _shape: number): void {

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

        function animation() {
            return setInterval(createSymbols, 100);
        }

        function frame(): void {

            crc2.putImageData(background, 0, 0);
            //drawTriangle();

            for (let i: number = 0; i < shapes.length; i++) {
                shapes[i].move(1 / 50);
                shapes[i].draw();
            }


















            // function shootLaser(_event: MouseEvent): void {
            //    console.log("Symbol wird an dieser Stelle erstellt");
            //    let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
            //    let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
            //    console.log(asteroidHit);
            //    if (asteroidHit)
            //        breakAsteroid(asteroidHit);
            // }



        }
    }
}