/*  
Aufgabe: Aufgabe 6
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe6 {
	
	export class schneeflocken extends MovingShape{
		x: number;
    	y: number;
    	color:string;
    
    constructor(_x: number, _y : number, _color:string){
        super(_x, _y, _color);
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