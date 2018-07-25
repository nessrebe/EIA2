namespace Zoo {
    
    
    
    export class djads extends _MovingObjects {
        
        constructor (_x: number, _y: number, _dx: number, _dy: number) {
            super(_x, _y, _dx, _dy);
        }
        
        
    
    move(): void {
        this.x += 1;
        this.y += 0;
        
            if (this.x > 40) {
                this.y = this.dy;
                this.x = this.dx;
            }
      }
    }
        
       
        
        draw(): void {
            
            }
}