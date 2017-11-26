/*
Aufgabe: Aufgabe 6
Name: Rebecca Neß
Matrikel: 256154
Datum: 24.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class skifahrer {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        move() {
            if (this.x >= 800 || this.y >= 600) {
                this.x = 0; // damit Skifahrer am linken Bildschirmrand los fahren
                this.y = Math.random() * 200 + 100;
                this.color = "hsl(" + Math.random() + 360 + ", 100%, 50%)";
            }
            this.x += 2; // Bewegung nach rechts
            this.y += 2; // Bewegung nach unten
        }
        // (Funktion für Skier)
        draw() {
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fillRect(this.x, this.y, 10, -15);
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 10, this.y - 25, 5, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 30, this.y - 15);
            Aufgabe6.crc2.lineTo(this.x + 40, this.y + 10);
            Aufgabe6.crc2.stroke();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe6.skifahrer = skifahrer;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Skier.js.map