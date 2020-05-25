namespace L06_NodeAPI {
    console.log("Hallo Welt");

    let x: number = 0; 
    console.log(x);
    x++;
    console.log(x);

    console.log(process.env.COMPUTERNAME);
    console.log(process.env.PORT);

    setTimeout(handleTimeout, 2000);

    function handleTimeout (_event: Event): void {
        console.log("Timeout");
    }
}