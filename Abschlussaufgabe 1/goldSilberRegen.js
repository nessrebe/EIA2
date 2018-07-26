var AG;
(function (AG) {
    class goldRegen extends AG.MovingShape {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
            this.zeichnen = false;
        }
        move() {
            if (this.zeichnen == true) {
                if (this.y >= 600) {
                    this.y = 0;
                }
                this.y += 1;
            }
        }
        draw() {
            if (this.zeichnen == true) {
                AG.crc2.beginPath();
                AG.crc2.arc(this.x, this.y, 2.5, 1, 3 * Math.PI);
                AG.crc2.fillStyle = "gold";
                AG.crc2.fill();
                AG.crc2.closePath();
            }
        }
    }
    AG.goldRegen = goldRegen;
})(AG || (AG = {}));
//# sourceMappingURL=goldSilberRegen.js.map