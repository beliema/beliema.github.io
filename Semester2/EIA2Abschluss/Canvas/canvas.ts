namespace AS_Zauberbild {
    console.log("Canvas wird geladen");

    export let crc2: CanvasRenderingContext2D;
    export let drawing: boolean = true; 

    let symbols: Symbol [] = [];

    //let halbkreis: Halbkreis[] = [];
    //let herz: Herz [] = [];
    //let hexagon: Hexagon [] = []; 
    //let kreis: Kreis [] = [];
    //let raute: Raute [] = [];
    let background: ImageData;
    
    window.addEventListener("load", handleLoad);

    export function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        if (!canvas)
            return; 
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

       // createBackground();
    createSymbols(); 

       // window.setInterval(animate, 20); 

        
    }

    function createSymbols(): void {

        let x: number;
        let y: number;
        let click: Event; 
        
    }


}