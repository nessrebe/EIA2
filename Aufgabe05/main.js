/*
Aufgabe: Aufgabe 5
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", canvasInput); // Funktion canvasInput beginnt wenn Seite vollständig geladen hat 
    let canvas; // variable Allgemein/zentral GLOBAL von allen Funktionen abrufbar (Kiste in großem Raum)
    console.log(canvas);
    let crc2; // " "
    console.log(crc2);
    //Arrays 
    let skier = []; // Variable die das Interface "skifahrer" aufruft 
    let schnee = [];
    let wolke = [];
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
        /////////Start Schleif    
        // Trees
        for (var i = 1; i < 8; i++) {
            drawTree(Math.floor(Math.random() * (300 - 15 + 1) + 15), Math.floor(Math.random() * (570 - 250 + 1) + 250), crc2);
        }
        // fallende Schneeflocken
        for (let i = 0; i < 600; i++) {
            schnee[i] = {
                x: 0,
                y: 650,
                dx: 0 + Math.random() * 800,
                dy: 0 + Math.random() * 600,
                color: "#ffffff"
            };
        }
        // bewegende Wolken
        for (let i = 0; i < 3; i++) {
            wolke[i] = {
                x: 0,
                y: 650,
                dx: 0 + Math.random() * 800,
                dy: 0 + Math.random() * 200 + 50,
                color: "#ffffff"
            };
        }
        // Skier 
        for (let i = 0; i < 4; i++) {
            skier[i] = {
                x: 0,
                y: 250,
                dx: Math.random() * 10 + 5,
                dy: Math.random() * 10 + 10,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        image = crc2.getImageData(0, 0, 800, 600); //Bild in Variable speichern
        animate();
    } // Schließende Klammer der Funktion canvasInput
    /////////Funktion Animationen
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600); // Hintergrundbild löschen
        crc2.putImageData(image, 0, 0); // Hintergrundbild einsetzen
        /////////SCHLEI    
        for (let i = 0; i < schnee.length; i++) {
            if (schnee[i].y > 600) {
                schnee[i].y = 0;
            }
            schnee[i].y += Math.random(); //Schnelligkeit und Bewegungsschleife der Schneeflocken auf der y-Achse. Höhere Zahl = schnellere Bewegung
        }
        for (let i = 0; i < wolke.length; i++) {
            if (wolke[i].x > 800) {
                wolke[i].x = 0;
            }
            wolke[i].x += Math.random();
        }
        for (let i = 0; i < skier.length; i++) {
            drawskier(skier[i]);
            if (skier[i].x > 800, skier[i].y > 650) {
                skier[i].x = 0;
                skier[i].y = 230; // Winkel in dem der Skier den Berg unter fährt 
            }
            skier[i].x += 17;
            skier[i].y += 4;
        }
        window.setTimeout(animate, 15);
    }
    /////////FUNKTIONEN (Zeichung, der in Schleifen aufgerufenen Objekten)
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
    function drawSnowflake(_schnee) {
        _schnee.x += _schnee.dx;
        _schnee.y += _schnee.dy;
        crc2.beginPath();
        crc2.arc(_schnee.x, _schnee.y, 4, 0, 3 * Math.PI);
        crc2.fillStyle = "#fff";
        crc2.fill();
        crc2.closePath();
    }
    //Funktion für Wolken
    function drawwolke(_wolke) {
        _wolke.x += _wolke.dx;
        _wolke.y += _wolke.dy;
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(_wolke.x, _wolke.y, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_wolke.x, _wolke.y, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_wolke.x, _wolke.y, 30, 0, 2 * Math.PI);
        crc2.fill();
    }
    //Funktion für Skier 
    function drawskier(_skier) {
        _skier.x += _skier.dx;
        _skier.y += _skier.dy; // um andere Bewegungsmuster zu finden 
        crc2.fillStyle = _skier.color;
        crc2.fillRect(_skier.x, _skier.y, 10, -15);
        crc2.beginPath();
        crc2.arc(_skier.x + 10, _skier.y - 25, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_skier.x - 30, _skier.y - 15);
        crc2.lineTo(_skier.x + 40, _skier.y + 10);
        crc2.stroke();
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=main.js.map