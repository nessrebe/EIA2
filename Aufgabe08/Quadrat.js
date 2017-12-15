/*
Aufgabe: Aufgabe 8
Name: Rebecca Neß
Matrikel: 256154
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", eingabe);
    function eingabe() {
        // "prompt" erzeugt das Eingabefester welches für den Nutzer sichtbar ist 
        let Anzahl = prompt("Geben Sie eine Zahl zwischen 10 und 100 an.");
        // Die Number.isNaN() Methode stellt fest, ob der Übergabewert NaN (Not-a-Number) ist und der Typ des Parameters Anzahl ist
        if (Number.isNaN(parseInt(Anzahl)) || parseInt(Anzahl) < 10 || parseInt(Anzahl) > 100) {
            alert("Eingabe ist nicht korrekt");
            eingabe();
        }
        else {
            for (let i = 0; i < parseInt(Anzahl); i++) {
                init(Math.random() * window.innerWidth - 50, Math.random() * window.innerHeight - 50, Math.random() * 360);
            }
        }
    }
    function init(_x, _y, _color) {
        let box = document.createElement("div"); // erzeugt div (Html innerhalb ts - dynamisch)
        box.style.width = "50px";
        box.style.height = "50px";
        box.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)";
        // Verschiebung x und y Achse 
        box.style.left = _x + "px";
        box.style.right = _y + "px";
        document.body.appendChild(box); //html div ELement wird in Code eingefügt
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=Quadrat.js.map