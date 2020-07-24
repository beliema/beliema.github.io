namespace AS_Zauberbild {
    console.log("Canvas wird geladen");

    export let crc2: CanvasRenderingContext2D;
    export let drawing: boolean = true; 
    export let farbe: HTMLInputElement = <HTMLInputElement>document.querySelector("#Farbauswahl");

    let symbols: Symbol [] = [];

    export let moveables: Moveable [] = []; 

    
    let halbkreis: Halbkreis[] = [];
    let herz: Herz [] = [];
    let hexagon: Hexagon [] = []; 
    let kreis: Kreis [] = [];
    let raute: Raute [] = [];
    let background: ImageData;
    
    
    window.addEventListener("load", handleLoadCanvas);
   

    export function handleLoadCanvas(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        if (!canvas)
            return; 
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d") 
        let symbole: HTMLDivElement = <HTMLDivElement>document.getElementById("Symbol");
        


        symbole.addEventListener("click", saveSymbol); 
        createSymbols(new Vector(0,0), 1);
        setInterval(frame, 100); 

    }

    function saveSymbol(_event: Event): void {

        let herzIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Herz"); 
        let rauteIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Raute");
        let halbkreisIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Halbkreis");
        let kreisIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Kreis");
        let hexagonIn: HTMLInputElement = <HTMLInputElement>document.getElementById("Hexagon");
     
        if (herzIn.checked == true) {
            console.log("Herz wird gezeichnet"); 

                function drawHerz(_event: MouseEvent): void {
                    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector(".canvas");
                    let x: number = Math.random() * canvas.width;
                    let y: number = Math.random() * canvas.height;
                    let position: Vector = new Vector(x, y);
                    let herz: Herz = new Herz(position);
                    herz.draw();
                    symbols.push(herz);
                }; 
            
        }

        if (rauteIn.checked == true) {
            console.log("Raute wird gezeichnet"); 
                function drawRaute(_event: MouseEvent): void {
                    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector(".canvas");
                    let x: number = Math.random() * canvas.width;
                    let y: number = Math.random() * canvas.height;
                    let position: Vector = new Vector(x, y);
                    let raute: Raute = new Raute(position);
                    raute.draw();
                    symbols.push(raute);
                };
            
        }

        if (halbkreisIn.checked == true) {
            console.log("Halbkreis wird gezeichnet"); 
            
            function drawHalbkreis(_event: MouseEvent): void {
                let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector(".canvas");
                let x: number = Math.random() * canvas.width;
                let y: number = Math.random() * canvas.height;
                let position: Vector = new Vector(x, y);
                let halbkreis: Halbkreis = new Halbkreis(position);
                halbkreis.draw();
                symbols.push(halbkreis);
            };
            
        }

        if (kreisIn.checked == true) {
            console.log("Kreis wird gezeichnet"); 
            function drawKreis(_event: MouseEvent): void {
                let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector(".canvas");
                let x: number = Math.random() * canvas.width;
                let y: number = Math.random() * canvas.height;
                let position: Vector = new Vector(x, y);
                let kreis: Kreis = new Kreis(position);
                kreis.draw();
                symbols.push(kreis);
            };
            
        }

        if (hexagonIn.checked == true) {
            console.log("Hexagon wird gezeichnet"); 
            function drawHexagon(_event:MouseEvent) {
                let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector(".canvas");
                let x: number = Math.random() * canvas.width;
                let y: number = Math.random() * canvas.height;
                let position: Vector = new Vector(x, y);
                let hexagon: Hexagon = new Hexagon(position);
                hexagon.draw();
                symbols.push(hexagon);
            }; 
            
        }

    }



    function createSymbols(_position: Vector, _symbol: number): void { 
       
        //Kreis 
        for (let i: number = 0; i < _symbol; i++) {
            let x: number = 50;
            let y: number = 70;
            let position: Vector = new Vector(x, y);
            let kreis: Kreis = new Kreis(position);
            kreis.draw();
            //symbols.push(circle);
            console.log(symbols);

        //Halbkreis 
        for (let i: number = 0; i < _symbol; i++) {
            let x: number = 340;
            let y: number = 20;
            let position: Vector = new Vector(x, y);
            let halbkreis: Halbkreis = new Halbkreis(position);
            halbkreis.draw();
            
            console.log(symbols);

        }

        //Raute
        for (let i: number = 0; i < _symbol; i++) {
            let x: number = 40;
            let y: number = 240;
            let position: Vector = new Vector(x, y);
            let raute: Raute = new Raute(position);
            raute.draw();
            
            console.log(symbols);

        }

        //Herz 
        for (let i: number = 0; i < _symbol; i++) {
            let x: number = 360;
            let y: number = 210;
            let position: Vector = new Vector(x, y);
            let herz: Herz = new Herz(position);
            herz.draw();
            
            console.log(symbols);

        }

        //Hexagon 
        for (let i: number = 0; i < _symbol; i++) {
            let x: number = 350;
            let y: number = 250;
            let position: Vector = new Vector(x, y);
            let herz: Herz = new Herz(position);
            herz.draw();
            
            console.log(symbols);

        }
    }

    function animation() {
        return setInterval(createSymbols, 100);
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