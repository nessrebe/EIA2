/*
Aufgabe: Aufgabe 8
Name: Rebecca Neß
Matrikel: 256154
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe8 {
    
    window.addEventListener("load", eingabe); // Seite wird geladen/ausgeführt wenn "eingabe" function vollständig geladen hat 
    
    function eingabe() {
        // "prompt" erzeugt das Eingabefester welches für den Nutzer sichtbar ist 
        let Anzahl: string = prompt("Geben Sie eine Zahl zwischen 10 und 100 an.")
        // parseInt konvertiert das erste Argument zu einem String, analysiert diesen und gibt eine ganze Zahl oder NaN zurück
        // Die Number.isNaN() Methode stellt fest, ob der Übergabewert NaN (Not-a-Number) ist und der Typ des Parameters Anzahl ist
        if (Number.isNaN(parseInt(Anzahl)) || parseInt(Anzahl) < 10 || parseInt(Anzahl) > 100) {     // || logisches ODER  
            alert("Eingabe ist nicht korrekt");
            eingabe();
            }
            // zufällige Boxen werden erzeugt und die function init wird aufgerufen 
            else {
                for (let i: number = 0; i < parseInt(Anzahl); i++) {    // i kleiner als eingabe 
                    init(Math.random() * window.innerWidth - 50, Math.random() * window.innerHeight - 50, Math.random() * 360, 70, 70);
                    }
       }
        }
        
    function  init(_x: number, _y: number, _color: number, _width: number, _height: number): void {
        
        let box: HTMLDivElement = document.createElement("div"); // erzeugt div (Html innerhalb ts = dynamisch)
        
        box.style.width = _width + "px";                    // wird von oben ("else"...) übergeben
        box.style.height = _height + "px";
        
        box.style.marginLeft = _x + "px";                   // " " 
        box.style.marginTop = _y + "px";
        
        box.style.backgroundColor = "hsl("+ _color + ", 100%, 50%)";
        
        document.body.appendChild(box);   //html div ELement wird in Code eingefügt
     }
        
 
    }