namespace ZOO {
    
    
    
    export class CloudData extends _MovingObjects {
       
    
        constructor (_x: number, _y: number, _dx:number, _dy:number) {
            super(_x, _y, _dx, _dy);
        }
        
       
        
       // von rechts nach links  
       move(): void {
            this.x += -0.7; 
           
         
                if (this.x < 0) {
                this.x = 1000;
                }
           
           
        }
        
        
        
        
        draw(): void {
            
            //cloud
            crc2.beginPath();
            crc2.moveTo(this.x,this.y+15);
            crc2.lineTo(this.x+32,this.y+15);
            crc2.lineTo(this.x+32,this.y);
            crc2.lineTo(this.x,this.y);
            crc2.closePath();
            crc2.fillStyle ="#ffffff";
            crc2.fill();
            crc2.beginPath();
            
            //links
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 15, 0, 2 *Math.PI);
            crc2.fill();
            
            //mitte
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x +15 , this.y -6, 15, 0, 2 *Math.PI);
            crc2.fill();
            
            //rechts
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x +30, this.y, 15, 0, 2 *Math.PI);
            crc2.fill();
            
            
            }
        
        
        }
    }