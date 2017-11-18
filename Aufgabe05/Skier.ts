/*  
Aufgabe: Aufgabe 5
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {
    
    export class skier {
        x: number;
        y: number;
        color: string;
        
        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color= _color;
        }
        
        update(): void {
            this.move();
            this.draw();
            }
        
        move(): void {
            if(this.x >= 800 || this.y >= 600){
                this.x = Math.random() * 100 + 10;
                this.y = Math.random() + 200 + 195;
                this.color = "hsl(" + Math.random() + 360 + ", 100%, 50%)";
                }
            this.x += 1.75;
            this.y += 0.75;
            }
        
    // (Funktion für Skier)
    drawskier: void {
        crc2.fillStyle = _skier.color;
        crc2.fillRect(_skier.x, _skier.y, 10, -15);
        crc2.beginPath();
        crc2.arc(_skier.x + 10, _skier.y - 25, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_skier.x - 30, _skier.y - 15);
        crc2.lineTo(_skier.x + 40, _skier.y + 10);
        crc2.stroke();
        }
        
    }

}