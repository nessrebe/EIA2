/*  
Aufgabe: Aufgabe 5
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {
    
    export class skifahrer {
        x: number;
        y: number;
        color: string;
        
        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color= _color;
        }
        
        
        
        move(): void {
            if(this.x >= 800 || this.y >= 600){
                this.x = 0;     // damit Skifahrer am linken Bildschirmrand los fahren
                this.y = Math.random() * 200 + 100;
                this.color = "hsl(" + Math.random() + 360 + ", 100%, 50%)";
                }
            this.x += 2;  // Bewegung nach rechts
            this.y += 2 ; // Bewegung nach unten
            }
        
    // (Funktion für Skier)
    draw(): void {
        crc2.fillStyle = this.color;
        crc2.fillRect(this.x, this.y, 10, -15);
        crc2.beginPath();
        crc2.arc(this.x + 10, this.y - 25, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(this.x - 30, this.y - 15);
        crc2.lineTo(this.x + 40, this.y + 10);
        crc2.stroke();
        }
        
        
        update(): void {
            this.move();
            this.draw();
            }
    }

}