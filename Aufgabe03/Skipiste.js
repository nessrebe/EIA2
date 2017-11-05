/*
Aufgabe: Aufgabe 3
Name: Rebecca Neß
Matrikel: 256154
Datum: 03.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", canvasInput); // Funktion canvasInput beginnt wenn Seite vollständig geladen hat 
    let canvas; // variable Allgemein/zentral GLOBAL von allen Funktionen abrufbar (Kiste in großem Raum)
    console.log(canvas);
    let crc2; // " "
    console.log(crc2);
    //Arrays 
    let schneeX = [];
    let schneeY = [];
    let wolkeX = [];
    let wolkeY = [];
    let skierX = [];
    let skierY = [];
    let image; //ImageData anstatt "any" / Ausgabe Hintergrundbild
    function canvasInput() {
        canvas = document.getElementsByTagName("canvas")[0]; //Var canvas wird in der funktion aufgerufen 
        crc2 = canvas.getContext("2d"); //Aufruf crc2 variable in der Funktion 
        // Hintergrund 
        crc2.fillStyle = "#6495ED";
        crc2.fillRect(0, 0, 800, 600);
        // Sonne
        crc2.beginPath();
        crc2.arc(80, 60, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFD700";
        crc2.fill();
        // Berg One
        crc2.beginPath();
        crc2.moveTo(0, 700);
        crc2.lineTo(700, 700);
        crc2.lineTo(350, 100);
        crc2.closePath();
        crc2.strokeStyle = "#D3D3D3";
        crc2.stroke();
        crc2.fillStyle = "#D3D3D3";
        crc2.fill();
        // Berg Two
        crc2.beginPath();
        crc2.moveTo(0, 720);
        crc2.lineTo(700, 600);
        crc2.lineTo(450, 70);
        crc2.closePath();
        crc2.strokeStyle = "#D3D3D3";
        crc2.stroke();
        crc2.fillStyle = "#D3D3D3";
        crc2.fill();
        // Skipiste vorne 
        crc2.beginPath();
        crc2.moveTo(0, 90);
        crc2.lineTo(0, 600);
        crc2.lineTo(800, 600);
        crc2.closePath();
        crc2.strokeStyle = "#FCFCFC";
        crc2.stroke();
        crc2.fillStyle = "#FCFCFC";
        crc2.fill();
        // Skilift
        crc2.beginPath();
        crc2.moveTo(430, 130);
        crc2.lineTo(600, 800);
        crc2.strokeStyle = "#000";
        crc2.stroke();
        // Skilift Ende 
        crc2.beginPath();
        crc2.moveTo(430, 130);
        crc2.lineTo(430, 200);
        crc2.strokeStyle = "#000";
        crc2.stroke();
        image = crc2.getImageData(0, 0, 800, 600); //Bild in Variable speichern
        /////////Start Schleifen 
        // Trees
        for (var i = 1; i < 8; i++) {
            drawTree(Math.floor(Math.random() * (300 - 15 + 1) + 15), Math.floor(Math.random() * (570 - 250 + 1) + 250), crc2);
        }
        // fallende Schneeflocken
        for (let i = 0; i < 600; i++) {
            schneeX[i] = 0 + Math.random() * 800; //0 Start x-Achse, geht bis Bereich 800 
            schneeY[i] = 0 + Math.random() * 600; //0 Start y-Achse, geht bis Bereich 600
        }
        // bewegende Wolken
        for (let i = 0; i < 2; i++) {
            wolkeX[i] = 0 + Math.random() * 800;
            wolkeY[i] = 0 + Math.random() * 150 + 40;
        }
        // Skier 
        for (let i = 0; i < 1; i++) {
            skierX[i] = 0;
            skierY[i] = 250;
        }
    } // Schließende Klammer der Funktion canvasInput
    /////////Funktion Animationen
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600); // Hintergrundbild löschen
        crc2.putImageData(image, 0, 0); // Hintergrundbild einsetzen
        /////////SCHLEIFEN
        for (let i = 0; i < schneeX.length; i++) {
            if (schneeY[i] > 600) {
                schneeY[i] = 0;
            }
            schneeY[i] += Math.random(); //Schnelligkeit und Bewegungsschleife der Schneeflocken auf der y-Achse. Höhere Zahl = schnellere Bewegung
            drawSnowflake(schneeX[i], schneeY[i]); //Aufruf Schneeflocken Array
        }
        for (let i = 0; i < wolkeX.length; i++) {
            if (wolkeX[i] > 800) {
                wolkeX[i] = 0;
            }
            wolkeX[i] += Math.random();
            drawwolke(wolkeX[i], wolkeY[i]);
        }
        for (let i = 0; i < skierX.length; i++) {
            if (skierX[i] > 800) {
                skierX[i] = 0;
                skierY[i] = 250;
            }
            skierX[i] += 10;
            skierY[i] += 5;
            drawskier(skierX[i], skierY[i]);
        }
        window.setTimeout(animate, 15);
    }
    /////////FUNKTIONEN (zeichung der in Schleifen aufgerufenen Objekte)
    //Funktion für Trees
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
    //Funktion für Schnee
    function drawSnowflake(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 4, 0, 3 * Math.PI);
        crc2.fillStyle = "#111";
        crc2.fill();
        crc2.closePath();
    }
    //Funktion für Wolken
    function drawwolke(_x, _y) {
        /* crc2.beginPath();
         crc2.arc(_x + 30, _y, 50, 0, 2 * Math.PI);
         crc2.fill();
         crc2.beginPath();
         crc2.arc(_x, _y - 40, 40, 0, 2 * Math.PI);
         crc2.fill();
         crc2.beginPath();
         crc2.arc(_x, _y, 60, 0, 2 * Math.PI);
         crc2.fillStyle = "#ffffff";
         crc2.fill();*/
        crc2.beginPath();
        crc2.arc(740, 80, 20, 1, 3 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(720, 60, 20, 2, 4 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(720, 100, 20, 2, 4 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(700, 70, 20, 2, 4 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(705, 95, 20, 2, 4 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //crc2.closePath();
    }
    //Funktion für Skier 
    function drawskier(_x, _y) {
        crc2.fillStyle = "#7D7D7D";
        crc2.fillRect(_x, _y, 10, -25);
        crc2.beginPath();
        crc2.arc(_x + 20, _y - 35, 15, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x - 30, _y - 15);
        crc2.lineTo(_x + 40, _y + 10);
        crc2.stroke();
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=Skipiste.js.map