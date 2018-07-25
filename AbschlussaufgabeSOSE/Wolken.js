var Zoo;
(function (Zoo) {
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
            Zoo.crc2.fillStyle = "#ffffff";
            Zoo.crc2.beginPath();
            Zoo.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Zoo.crc2.fill();
            Zoo.crc2.beginPath();
            Zoo.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Zoo.crc2.fill();
            Zoo.crc2.beginPath();
            Zoo.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Zoo.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Zoo.wolken = wolken;
})(Zoo || (Zoo = {}));
//# sourceMappingURL=Wolken.js.map