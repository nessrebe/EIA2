/*
Aufgabe: Aufgabe 6
Name: Rebecca Neß
Matrikel: 256154
Datum: 24.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", canvasInput); // Funktion canvasInput beginnt wenn Seite vollständig geladen hat 
    let canvas; // variable Allgemein/zentral GLOBAL von allen Funktionen abrufbar (Kiste in großem Raum)
    console.log(canvas);
    console.log(Aufgabe6.crc2);
    //Arrays 
    let skier = []; // Variable die das Interface "skifahrer" aufruft 
    let schnee = [];
    let wolke = [];
    let image; //ImageData anstatt "any" / Ausgabe Hintergrundbild
    function canvasInput() {
        canvas = document.getElementsByTagName("canvas")[0]; //Var canvas wird in der funktion aufgerufen 
        Aufgabe6.crc2 = canvas.getContext("2d"); //Aufruf crc2 variable in der Funktion 
        // Hintergrund 
        Aufgabe6.crc2.fillStyle = "#6495ED";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        // Sonne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(80, 60, 40, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#FFD700";
        Aufgabe6.crc2.fill();
        // Berg One
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 700);
        Aufgabe6.crc2.lineTo(700, 700);
        Aufgabe6.crc2.lineTo(350, 100);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#D3D3D3";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#D3D3D3";
        Aufgabe6.crc2.fill();
        // Berg Two
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 720);
        Aufgabe6.crc2.lineTo(700, 600);
        Aufgabe6.crc2.lineTo(450, 70);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#D3D3D3";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#D3D3D3";
        Aufgabe6.crc2.fill();
        // Skipiste vorne 
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 90);
        Aufgabe6.crc2.lineTo(0, 600);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#FCFCFC";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FCFCFC";
        Aufgabe6.crc2.fill();
        // Skilift
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(430, 130);
        Aufgabe6.crc2.lineTo(600, 800);
        Aufgabe6.crc2.strokeStyle = "#000";
        Aufgabe6.crc2.stroke();
        // Skilift Ende 
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(430, 130);
        Aufgabe6.crc2.lineTo(430, 200);
        Aufgabe6.crc2.strokeStyle = "#000";
        Aufgabe6.crc2.stroke();
        /////////Start Schleif    
        // Trees
        for (var i = 1; i < 8; i++) {
            drawTree(Math.floor(Math.random() * (300 - 15 + 1) + 15), Math.floor(Math.random() * (570 - 250 + 1) + 250), Aufgabe6.crc2);
        }
        // bewegende Wolken
        for (let i = 0; i < 3; i++) {
            let s = new Aufgabe6.wolken(Math.random() * 50 + i * 200, Math.random() * 100 + 0); // NEW: verbindung zum Wolken.ts, greift auf Informationen zu 
            wolke[i] = s;
        }
        // Skier
        for (let i = 0; i < 5; i++) {
            let s = new Aufgabe6.skifahrer(Math.random() * 100 + 10, Math.random() * 200 + 195, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            skier[i] = s;
        }
        // Schneeflocken 
        for (let i = 0; i < 500; i++) {
            let s = new Aufgabe6.schneeflocken(Math.random() * 800 + 0, Math.random() * 600 + 0);
            schnee[i] = s;
        }
        image = Aufgabe6.crc2.getImageData(0, 0, 800, 600); //Bild in Variable speichern
        animate();
    } // Schließende Klammer der Funktion canvasInput
    /////////Funktion Animationen
    function animate() {
        console.log("Timeout");
        Aufgabe6.crc2.clearRect(0, 0, 800, 600); // Hintergrundbild löschen
        Aufgabe6.crc2.putImageData(image, 0, 0); // Hintergrundbild einsetzen
        for (let i = 0; i < wolke.length; i++) {
            let s = wolke[i];
            s.update();
        }
        for (let i = 0; i < skier.length; i++) {
            let s = skier[i];
            s.update();
        }
        for (let i = 0; i < schnee.length; i++) {
            let s = schnee[i];
            s.update();
        }
        window.setTimeout(animate, 15); // animate wird alle 15ms wiederholt 
    }
    //Funktion für Trees (Zeichung)
    function drawTree(_x, _y, crc2) {
        crc2.beginPath();
        crc2.moveTo(_x - 14, _y);
        crc2.lineTo(_x + 26, _y);
        crc2.lineTo(_x + 4, _y - 60);
        crc2.lineTo(_x - 14, _y);
        crc2.fillStyle = "#228B22";
        crc2.fill();
        crc2.closePath();
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=main.js.map