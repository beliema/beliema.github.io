//Ausgabe//
console.log("Hallo");
console.log("Was geht");
window.onload = function () {
    document.getElementById("ge").addEventListener("click", ChangeName);
    document.getElementById("Dunkel").addEventListener("click", ChangeClass);
    window.alert("Klick Mal!");
    let name = "Ja"; //Ich weiße der Variable den Typ String und den Wert Ja zu // 
    let name2 = "Ja2";
    let number1 = 1; //Typ Number//
    let number2 = 2;
    let number3 = 3;
    number2 = 3; //neuer Wert an deklarierte Varbiable// 
    console.log(name + name);
    console.log(number1 + number2);
    console.log(number1 + name);
};
function ChangeName() {
    document.getElementById("ge").innerHTML = "Ulala";
}
//Klassenänderung//
function ChangeClass() {
    document.getElementById("Dunkel").className = "Lampe2";
}
//HTML neu erstellen//
//# sourceMappingURL=script.js.map