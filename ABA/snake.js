var ZOO;
(function (ZOO) {
    class SnakeData extends ZOO._MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            super(_x, _y, _dx, _dy);
        }
        move() {
            this.x += 0 + Math.random() * 4.5;
            this.y += 0;
            if (this.x > 1200) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }
        draw() {
            // Schlange
        }
    }
    ZOO.SnakeData = SnakeData;
})(ZOO || (ZOO = {}));
//# sourceMappingURL=snake.js.map