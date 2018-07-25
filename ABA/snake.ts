namespace ZOO {
    
    
    
    export class SnakeData extends _MovingObjects {
       
    
        constructor (_x: number, _y: number, _dx:number, _dy:number) {
            super(_x, _y, _dx, _dy);
        }
        

       move(): void {
            this.x += 0 + Math.random()*4.5;
            this.y += 0;
         
               
                if (this.x > 1200) {
                this.y = this.dy;
                this.x = this.dx;
                }
        
        }
        
        draw(): void {
            
            // Schlange

            
            
            
            
            
            
            
            }
        
        
        }
    }