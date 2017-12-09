/*
Aufgabe: Aufgabe 8
Name: Rebecca Neß
Matrikel: 256154
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe8 {
    
    window.addEventListener("load", eingabe);
    
    function eingabe() {
        // "prompt" erzeugt das Eingabefester welches für den Nutzer sichtbar ist 
        let Anzahl: string = prompt("Geben Sie eine Zahl zwischen 10 und 100 an.")
        // Die Number.isNaN() Methode stellt fest, ob der Übergabewert NaN (Not-a-Number) ist und der Typ des Parameters Anzahl ist
        if (Number.isNaN(parseInt(Anzahl)) || parseInt(Anzahl) < 10 || parseInt(Anzahl) > 100) {    
            alert("Eingabe ist nicht korrekt");
            eingabe();
            }
            // zufällige Boxen werden erzeugt und die function init wird aufgerufen 
            else {
                for (let i: number = 0; i < parseInt(Anzahl); i++) {
                    init(Math.random() * window.innerWidth - 50, Math.random() * window.innerHeight - 50, Math.random() * 360);
                    }
       }
        }
        
    function  init(_x: number, _y: number, _color: number): void {
        
        let box: HTMLDivElement = document.createElement("div");
        
        box.style.width = "50px";
        box.style.height = "50px";
        box.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)";
        // Verschiebung x und y Achse 
        box.style.left = _x + "px";
        box.style.left = _y + "px";
        document.body.appendChild(box);   
     }
        
 
    }