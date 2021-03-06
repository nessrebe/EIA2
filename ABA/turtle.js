var ZOO;
(function (ZOO) {
    class TurtleData extends ZOO._MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            super(_x, _y, _dx, _dy);
        }
        move() {
            this.x += 0 + Math.random() * 1;
            this.y += 0;
            if (this.x > 1200) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }
        draw() {
            /*
            // Turtle aus Vogelperspektive
            //körper
            crc2.fillStyle = "#698B22";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 22, 0, 2 * Math.PI);
            crc2.fill();
            
            //kopf
            crc2.fillStyle = "#9ACD32";
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //augen oben
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x + 27, this.y -3 , 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //pupille oben
            crc2.fillStyle = "#000000";
            crc2.beginPath();
            crc2.arc(this.x + 27, this.y -3 , 1.5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //augen unten
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x + 27, this.y +3 , 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //pupille unten
            crc2.fillStyle = "#000000";
            crc2.beginPath();
            crc2.arc(this.x + 27, this.y +3 , 1.5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            // turtletail
            crc2.beginPath();
            crc2.moveTo(this.x-21,this.y +2.5)
            crc2.lineTo(this.x-31,this.y -2.5);
            crc2.lineTo(this.x-21,this.y-8);
            crc2.fillStyle = "#9ACD32";
            crc2.fill();
            crc2.strokeStyle="#9ACD32";
            crc2.lineWidth=1;
            crc2.stroke();
             */
            // Turtle
            ZOO.crc2.fillStyle = "#cd853f";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x, this.y, 25, 0, Math.PI, true);
            ZOO.crc2.fill();
            ZOO.crc2.fillStyle = "green";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 35, this.y, 13, 0, Math.PI, true);
            ZOO.crc2.fill();
            ZOO.crc2.fillStyle = "#deb887";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x, this.y - 14, 5, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            ZOO.crc2.fillStyle = "#deb887";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x - 15, this.y - 10, 5, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            ZOO.crc2.fillStyle = "#deb887";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 15, this.y - 10, 5, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            ZOO.crc2.fillStyle = "white";
            ZOO.crc2.beginPath();
            ZOO.crc2.arc(this.x + 40, this.y - 5, 3, 0, 2 * Math.PI);
            ZOO.crc2.fill();
            ZOO.crc2.fillStyle = "green";
            ZOO.crc2.beginPath();
            ZOO.crc2.moveTo(this.x - 25, this.y);
            ZOO.crc2.lineTo(this.x - 40, this.y);
            ZOO.crc2.lineTo(this.x - 25, this.y - 10);
            ZOO.crc2.fill();
        }
    }
    ZOO.TurtleData = TurtleData;
})(ZOO || (ZOO = {}));
//# sourceMappingURL=turtle.js.map