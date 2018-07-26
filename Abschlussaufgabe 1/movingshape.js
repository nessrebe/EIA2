var AG;
(function (AG) {
    class MovingShape {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
        }
        draw() {
        }
    }
    AG.MovingShape = MovingShape;
})(AG || (AG = {}));
//# sourceMappingURL=movingshape.js.map