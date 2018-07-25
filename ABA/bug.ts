namespace ZOO {
    
    
    
    export class BugData extends _MovingObjects {
       
    
        constructor (_x: number, _y: number, _dx:number, _dy:number) {
            super(_x, _y, _dx, _dy);
        }
        

       move(): void {
            this.x += 4;
            this.y += 0;
         
               if (this.x > 450) {
                this.x += 0;
                this.y += 2;
                }
           
                if (this.x > 750) {
                this.x += 0;
                this.y += -4;
                }
           
                if (this.x > 950) {
                this.x += 0;
                this.y += 2;
                }
           
                if (this.x > 1200) {
                this.y = this.dy;
                this.x = this.dx;
                }
        
            }
        
        draw(): void {
            
            /*// Ladybug (Vogel Perspektive)
            //körper
            crc2.fillStyle = "red";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc2.fill();
            
            //kopf  
            crc2.fillStyle = "#000000";    
            crc2.beginPath();
            crc2.arc(this.x + 14, this.y, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //auge oben 
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x + 15, this.y -2, 1.5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //auge unten 
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x + 15, this.y +2, 1.5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //punkt unten rechts
            crc2.fillStyle = "#000000";    
            crc2.beginPath();
            crc2.arc(this.x + 3, this.y + 4, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //punkt oben links
            crc2.fillStyle = "#000000";    
            crc2.beginPath();
            crc2.arc(this.x - 2, this.y - 4, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            //punkt oben rechts
            crc2.fillStyle = "#000000";    
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 5, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
           
            //punkt unten links
            crc2.fillStyle = "#000000";    
            crc2.beginPath();
            crc2.arc(this.x - 3, this.y + 4, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            // mittel stroke 
            crc2.beginPath();
            crc2.moveTo(this.x - 9.5, this.y );
            crc2.lineTo(this.x + 10, this.y );
            crc2.lineWidth=1;
            crc2.strokeStyle="#000000";
            crc2.stroke();*/
            
            //Ladybug
            //körper
            crc2.fillStyle = "red";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 25, 0, Math.PI, true);
            crc2.fill();
            
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.x+35, this.y, 13, 0, Math.PI, true);
            crc2.fill();
            
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.x, this.y-14, 5, 0, 2 * Math.PI);
            crc2.fill();
            
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.x-15, this.y-10, 5, 0, 2 * Math.PI);
            crc2.fill();
            
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.x+15, this.y-10, 5, 0, 2 * Math.PI);
            crc2.fill();
            
            crc2.fillStyle = "white";
            crc2.beginPath();
            crc2.arc(this.x+40, this.y-5, 4, 0, 2 * Math.PI);
            crc2.fill();
            
            //beinchen
            crc2.beginPath();
            crc2.moveTo(this.x-15,this.y)
            crc2.lineTo(this.x-15,this.y +10);
            crc2.strokeStyle="black";
            crc2.lineWidth=4;
            crc2.stroke();
            
            crc2.beginPath();
            crc2.moveTo(this.x-5,this.y)
            crc2.lineTo(this.x-5,this.y +10);
            crc2.strokeStyle="black";
            crc2.lineWidth=4;
            crc2.stroke();
            
              crc2.beginPath();
            crc2.moveTo(this.x+15,this.y)
            crc2.lineTo(this.x+15,this.y +10);
            crc2.strokeStyle="black";
            crc2.lineWidth=4;
            crc2.stroke();
            
            crc2.beginPath();
            crc2.moveTo(this.x+5,this.y)
            crc2.lineTo(this.x+5,this.y +10);
            crc2.strokeStyle="black";
            crc2.lineWidth=4;
            crc2.stroke();
        
            }
        
        
        }
    }