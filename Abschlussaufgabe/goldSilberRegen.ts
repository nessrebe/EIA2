namespace AG {
    
 export class goldRegen extends MovingShape{
        x: number;
        y: number;
        color:string;
        zeichnen:boolean = false;
    
    constructor(_x: number, _y : number, _color:string){
        super(_x, _y, _color);
    }
        
        
        
        move(): void {
            if(this.zeichnen == true){
            if(this.y >= 600) {
                this.y = 0;
                }
            this.y += 1;
                }
            }
    
        draw(): void {
            if(this.zeichnen == true){
        crc2.beginPath();
        crc2.arc(this.x, this.y, 2.5, 1, 3 * Math.PI);
        crc2.fillStyle = "gold";
        crc2.fill();
        crc2.closePath();
                }
        }
    
   
    }
   
    
}