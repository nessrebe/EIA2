var ZOO;
(function (ZOO) {
    class _MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
        }
        move() {
        }
    }
    ZOO._MovingObjects = _MovingObjects;
})(ZOO || (ZOO = {}));
//# sourceMappingURL=MovingObjects.js.map