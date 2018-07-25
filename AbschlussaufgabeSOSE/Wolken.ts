namespace Zoo {
    export class wolken {           // Datei übergreifend 
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        

        move(): void {
            if (this.x >= 800) {
                this.x = 0;
            }
            this.x += 1;
        }

        // (Funktion für Wolken)
        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            crc2.fill();
            }
        
        update(): void {
            this.move();
            this.draw();
        }
        }
    }