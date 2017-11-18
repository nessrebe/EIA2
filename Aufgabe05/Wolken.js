/*
Aufgabe: Aufgabe 5
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class wolken {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.x >= 800) {
                this.x = 0;
            }
            this.x += 1;
        }
        // (Funktion für Wolken)
        draw() {
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe5.wolken = wolken;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Wolken.js.map