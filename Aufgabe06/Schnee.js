/*
Aufgabe: Aufgabe 5
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 4, 0, 3 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#fff";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe5.schneeflocken = schneeflocken;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Schnee.js.map