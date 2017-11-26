/*
Aufgabe: Aufgabe 6
Name: Rebecca Neß
Matrikel: 256154
Datum: 24.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class schneeflocken {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.y >= 600) {
                this.y = 0;
            }
            this.y += 1;
        }
        // (Funktion für Schnee)
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 4, 0, 3 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#fff";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe6.schneeflocken = schneeflocken;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Schnee.js.map