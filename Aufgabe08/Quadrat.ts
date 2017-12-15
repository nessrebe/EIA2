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
        
    function  init(_x: number, _y: number, _color: number, _width: number, _height: number): void {
        
        let box: HTMLDivElement = document.createElement("div"); // erzeugt div (Html innerhalb ts - dynamisch)
        
        div.style.width = _width + "px";
        div.style.height = _height + "px";
        
        div.style.marginLeft = _x + "px";
        div.style.marginTop = _y + "px";
        
        div.style.backgroundColor = _color;
        
        document.body.appendChild(box);   //html div ELement wird in Code eingefügt
     }
        
 
    }