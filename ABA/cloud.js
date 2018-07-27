var ZOO;
(function (ZOO) {
    class CloudData extends ZOO._MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            super(_x, _y, _dx, _dy);
        }
        // von rechts nach links  
        move() {
            this.x += -0.7;
            if (this.x < 0) {
                this.x = 1000;
            }
        }
        draw() {
            //cloud
            ZOO.crc2.beginPath();
            ZOO.crc2.moveTo(this.x, this.y + 15);
            ZOO.crc2.lineTo(this.x + 32, this.y + 15);
            ZOO.crc2.lineTo(this.x + 32, this.y);
            ZOO.crc2.lineTo(this.x, this.y);
            ZOO.crc2.closePath();
            ZOO.crc2.fillStyle = "#ffffff";
            ZOO.crc2.fill();
            ZOO.crc2.beginPath();
            //links
            ZOO.crc2.fillStyle = "#ffffff";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            //mitte
            ZOO.crc2.fillStyle = "#ffffff";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 15, this.y - 6, 15, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            //rechts
            ZOO.crc2.fillStyle = "#ffffff";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 30, this.y, 15, 0, 2 * Math.PI);
            ZOO.crc2.fill();
        }
    }
    ZOO.CloudData = CloudData;
})(ZOO || (ZOO = {}));
//# sourceMappingURL=cloud.js.map