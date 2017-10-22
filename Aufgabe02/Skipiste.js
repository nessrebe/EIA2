/*
Aufgabe: Aufgabe 2
Name: Rebecca Neß
Matrikel: 256154
Datum: 20.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe2;
(function (Aufgabe2) {
    window.addEventListener("load", canvasInput);
    function canvasInput() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let crc2 = canvas.getContext("2d");
        console.log(crc2);
        // Hintergrund 
        crc2.fillStyle = "#6495ED";
        crc2.fillRect(0, 0, 800, 600);
        // Sonne
        crc2.beginPath();
        crc2.arc(80, 80, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFD700";
        crc2.fill();
        // Berg One
        crc2.beginPath();
        crc2.moveTo(0,700);
        crc2.lineTo(700,700);
        crc2.lineTo(350,100);
        crc2.closePath();
        crc2.strokeStyle = "#BEBEBE";
        crc2.stroke();
        crc2.fillStyle = "#BEBEBE";
        crc2.fill();
        // Berg Two
        crc2.beginPath();
        crc2.moveTo(0,720);
        crc2.lineTo(700,600);
        crc2.lineTo(450,70);
        crc2.closePath();
        crc2.strokeStyle = "#BEBEBE";
        crc2.stroke();
        crc2.fillStyle = "#BEBEBE";
        crc2.fill();
        // Berg Three
        crc2.beginPath();
        crc2.moveTo(800,1800);
        crc2.lineTo(800,500);
        crc2.lineTo(455,80);
        crc2.closePath();
        crc2.strokeStyle = "#BEBEBE";
        crc2.stroke();
        crc2.fillStyle = "#BEBEBE";
        crc2.fill(); 
        // Skilift
        crc2.beginPath();
        crc2.moveTo(430, 130);
        crc2.lineTo(500, 500);
        //crc2.lineTo(30, 50);
        crc2.strokeStyle = "#000";
        crc2.stroke();
        // Wolke 
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
        
     
        // Trees
        for (var i = 1; i < 10; i++) {
            drawTree(Math.floor(Math.random() * (400 - 60 + 1) + 200), Math.floor(Math.random() * (600 - 300 + 1) + 400), crc2);
        }
        // Schneeflocken
        for (var i = 1; i < 100; i++) {
            drawSnowflake(Math.floor(Math.random() * (800 + 1)), Math.floor(Math.random() * (600 + 1)), crc2);
        }
       }
      
        function drawTree(x, y, crc2) {
            crc2.beginPath();
            crc2.moveTo(x - 15, y);
            crc2.lineTo(x + 27, y);
            crc2.lineTo(x + 5, y - 60);
            crc2.lineTo(x - 15, y);
            crc2.fillStyle = "#228B22";
            crc2.fill();
            crc2.closePath();
        }
        
        function drawSnowflake(x, y, crc2) {
            crc2.beginPath();
            crc2.arc(x, y, 4, 0 * Math.PI, 2.0 * Math.PI);
            crc2.fillStyle = "#fff";
            crc2.fill();
            crc2.closePath();
        }
        
    
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Skipiste.js.map