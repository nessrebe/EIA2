var ZOO;
(function (ZOO) {
    class DuckData extends ZOO._MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            super(_x, _y, _dx, _dy);
        }
        move() {
            this.x += 0 + Math.random() * 3;
            this.y += 0;
            if (this.x > 1200) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }
        draw() {
            //enten familie
            //körper
            ZOO.crc2.fillStyle = "#FFD700";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x, this.y, 30, 0, Math.PI);
            ZOO.crc2.fill();
            //kopf      
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 25, this.y, 12, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            ZOO.crc2.closePath();
            //auge
            ZOO.crc2.fillStyle = "#000000";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 30, this.y, 3, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            ZOO.crc2.closePath();
            //schnabel
            ZOO.crc2.beginPath();
            ZOO.crc2.moveTo(this.x + 35, this.y);
            ZOO.crc2.lineTo(this.x + 45, this.y + 5);
            ZOO.crc2.lineTo(this.x + 35, this.y + 8);
            ZOO.crc2.fillStyle = "orange";
            ZOO.crc2.fill();
            ZOO.crc2.strokeStyle = "orange";
            ZOO.crc2.lineWidth = 1;
            ZOO.crc2.stroke();
        }
    }
    ZOO.DuckData = DuckData;
})(ZOO || (ZOO = {}));
//# sourceMappingURL=duck.js.map