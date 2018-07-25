namespace ZOO {
    
    
    
    export class DuckData extends _MovingObjects {
       
    
        constructor (_x: number, _y: number, _dx:number, _dy:number) {
            super(_x, _y, _dx, _dy);
        }
        

       move(): void {
            this.x += 0 + Math.random()*3;
            this.y += 0;
         
               
                if (this.x > 1200) {
                this.y = this.dy;
                this.x = this.dx;
                }
        
        }
        
        draw(): void {
            
            //enten familie
            //körper
            crc2.fillStyle = "#FFD700";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 30, 0, Math.PI);
            crc2.fill();
            
            //kopf      
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y, 12, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //auge
            crc2.fillStyle = "#000000";
             crc2.beginPath();
            crc2.arc(this.x + 30, this.y, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //schnabel
            crc2.beginPath();
            crc2.moveTo(this.x+35,this.y)
            crc2.lineTo(this.x+45,this.y+5);
            crc2.lineTo(this.x+35,this.y+8);
            crc2.fillStyle = "orange";
            crc2.fill();
            crc2.strokeStyle="orange";
            crc2.lineWidth=1;
            crc2.stroke();
           
            
            
            }
        
        
        }
    }