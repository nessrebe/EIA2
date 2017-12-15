/*
Aufgabe: Aufgabe 8
Name: Rebecca Neß
Matrikel: 256154
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", eingabe); // Seite wird geladen/ausgeführt wenn "eingabe" function vollständig geladen hat 
    function eingabe() {
        // "prompt" erzeugt das Eingabefester welches für den Nutzer sichtbar ist 
        let Anzahl = prompt("Geben Sie eine Zahl zwischen 10 und 100 an.");
        // parseInt konvertiert das erste Argument zu einem String, analysiert diesen und gibt eine ganze Zahl oder NaN zurück
        // Die Number.isNaN() Methode stellt fest, ob der Übergabewert NaN (Not-a-Number) ist und der Typ des Parameters Anzahl ist
        if (Number.isNaN(parseInt(Anzahl)) || parseInt(Anzahl) < 10 || parseInt(Anzahl) > 100) {
            alert("Eingabe ist nicht korrekt");
            eingabe();
        }
        else {
            for (let i = 0; i < parseInt(Anzahl); i++) {
                init(Math.random() * window.innerWidth - 50, Math.random() * window.innerHeight - 50, Math.random() * 360, 70, 70);
            }
        }
    }
    function init(_x, _y, _color, _width, _height) {
        let box = document.createElement("div"); // erzeugt div (Html innerhalb ts = dynamisch)
        box.style.width = _width + "px";
        box.style.height = _height + "px";
        box.style.marginLeft = _x + "px";
        box.style.marginTop = _y + "px";
        box.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)";
        document.body.appendChild(box); //html div ELement wird in Code eingefügt
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=Quadrat.js.map