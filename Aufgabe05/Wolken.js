/*
Aufgabe: Aufgabe 6
Name: Rebecca Neß
Matrikel: 256154
Datum: 24.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
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
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe6.wolken = wolken;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Wolken.js.map