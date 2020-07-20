namespace AS_Zauberbild {
    console.log("Canvas wird geladen");

    export let crc2: CanvasRenderingContext2D;
    export let drawing: boolean = true; 
    export let farbe: HTMLInputElement = <HTMLInputElement>document.querySelector("#Farbauswahl");

    let symbols: Symbol [] = [];

    //let halbkreis: Halbkreis[] = [];
    //let herz: Herz [] = [];
    //let hexagon: Hexagon [] = []; 
    //let kreis: Kreis [] = [];
    //let raute: Raute [] = [];
    let background: ImageData;
    let symbole: HTMLInputElement = <HTMLInputElement>document.getElementById("Symbol");
    
    window.addEventListener("load", handleLoadCanvas);
    symbole.addEventListener("click", createSymbols); 

    export function handleLoadCanvas(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        if (!canvas)
            return; 
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d") 
    }

    function createSymbols(_event: Event): void { 

        let herz: HTMLInputElement = <HTMLInputElement>document.getElementById("Herz"); 
        let raute: HTMLInputElement = <HTMLInputElement>document.getElementById("Raute");
        let halbkreis: HTMLInputElement = <HTMLInputElement>document.getElementById("Halbkreis");
        let kreis: HTMLInputElement = <HTMLInputElement>document.getElementById("Kreis");
        let hexagon: HTMLInputElement = <HTMLInputElement>document.getElementById("Hexagon");
        
        if (herz.checked == true) {
            console.log("Herz wird gezeichnet"); 
           // function drawHerz(); 
            
        }

        if (raute.checked == true) {
            console.log("Herz wird gezeichnet"); 
            // function drawRaute(); 
            
        }


        

    }
   

   







   


}