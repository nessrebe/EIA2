namespace ZOO {
    
    
    
    export class SnakeData extends _MovingObjects {
       
    
        constructor (_x: number, _y: number, _dx:number, _dy:number) {
            super(_x, _y, _dx, _dy);
        }
        
       // Schlange schleicht hinter dem crocodile
       move(): void {
            this.x += 4;
            this.y += 0;
         
               if (this.x > 50) {
                this.x += 0;
                this.y += 4;
                }
           
                if (this.x > 1200) {
                this.y = this.dy;
                this.x = this.dx;
                }
        
        }
        
        draw(): void {
            
            // Schlange
         
            crc2.beginPath();
            crc2.arc(this.x, this.y, 25, 0, Math.PI, true);
            crc2.lineWidth=8;
            crc2.strokeStyle="#665547";
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(this.x + 55, this.y - 3, 30, 0, Math.PI, false);
            crc2.lineWidth=9;
            crc2.strokeStyle="#665547";
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(this.x + 115, this.y + 3, 30, 0, Math.PI, true);
            crc2.lineWidth=10;
            crc2.strokeStyle="#665547";
            crc2.stroke();
            
            // Kopf 
            crc2.fillStyle = "#665547";    
            crc2.beginPath();
            crc2.arc(this.x + 147, this.y + 4, 14, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            // Auge 
            crc2.fillStyle = "#ffffff";    
            crc2.beginPath();
            crc2.arc(this.x + 150, this.y + 0.5, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            // ende 
            crc2.fillStyle = "#665547";    
            crc2.beginPath();
            crc2.arc(this.x + -25, this.y + 2, 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            
            
            
            
            }
        
        
        }
    }