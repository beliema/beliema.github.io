var L06_NodeAPI;
(function (L06_NodeAPI) {
    console.log("Hallo Welt");
    let x = 0;
    console.log(x);
    x++;
    console.log(x);
    console.log(process.env.COMPUTERNAME);
    console.log(process.env.PORT);
    setTimeout(handleTimeout, 2000);
    function handleTimeout(_event) {
        console.log("Timeout");
    }
})(L06_NodeAPI || (L06_NodeAPI = {}));
//# sourceMappingURL=Test.js.map