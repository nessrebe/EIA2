/*  
Aufgabe: Aufgabe 6
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe6 {
    export class wolken extends MovingShape{
        x: number;
        y: number;
        color:string;
        
        constructor(_x: number, _y : number, _color:string){
            super(_x, _y, _color);
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