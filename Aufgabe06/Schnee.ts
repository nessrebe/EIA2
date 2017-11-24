/*  
Aufgabe: Aufgabe 5
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {
	
	export class schneeflocken {
		x: number;
		y: number;
	
		constructor(_x: number, _y: number){
			this.x = _x;
			this.y = _y;
		}
		
		
		
		move(): void {
			if(this.y >= 600) {
				this.y = 0;
				}
			this.y += 1;
			}
    
	 // (Funktion für Schnee)
    draw(): void {
        crc2.beginPath();
        crc2.arc(this.x, this.y, 4, 0, 3 * Math.PI);
        crc2.fillStyle = "#fff";
        crc2.fill();
        crc2.closePath();
    	}
    
    update(): void {
		this.move();
		this.draw();
	}
	}

}