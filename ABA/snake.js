var ZOO;
(function (ZOO) {
    class SnakeData extends ZOO._MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            super(_x, _y, _dx, _dy);
        }
        // Schlange schleicht hinter dem crocodile
        move() {
            this.x += 3;
            this.y += 0;
            if (this.x > 50) {
                this.x += 0;
                this.y += 4;
            }
            if (this.x > 1200) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }
        draw() {
            // Schlange
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x, this.y, 25, 0, Math.PI, true);
            ZOO.crc2.lineWidth = 8;
            ZOO.crc2.strokeStyle = "#665547";
            ZOO.crc2.stroke();
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 55, this.y - 3, 30, 0, Math.PI, false);
            ZOO.crc2.lineWidth = 9;
            ZOO.crc2.strokeStyle = "#665547";
            ZOO.crc2.stroke();
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 115, this.y + 3, 30, 0, Math.PI, true);
            ZOO.crc2.lineWidth = 10;
            ZOO.crc2.strokeStyle = "#665547";
            ZOO.crc2.stroke();
            // Kopf 
            ZOO.crc2.fillStyle = "#665547";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 147, this.y + 4, 14, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            ZOO.crc2.closePath();
            // Auge 
            ZOO.crc2.fillStyle = "#ffffff";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 150, this.y + 0.5, 3, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            ZOO.crc2.closePath();
            // ende 
            ZOO.crc2.fillStyle = "#665547";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + -25, this.y + 2, 4, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            ZOO.crc2.closePath();
        }
    }
    ZOO.SnakeData = SnakeData;
})(ZOO || (ZOO = {}));
//# sourceMappingURL=snake.js.map