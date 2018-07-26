namespace AG {
    
    window.addEventListener("load", canvasInput);
    
    let canvas: HTMLCanvasElement; 
    console.log(canvas);
    
    export let crc2: CanvasRenderingContext2D;
    console.log(crc2);
  
    let image :ImageData;
    let baumBild:any = new Image();
    let superclass: goldRegen [] = [];
   

    
    // Start Page 
    let start = prompt ("Hallo mein Freund, bist du ready um in eine märchenhafte Welt einzutauchen? Klick auf den Baum and you´ll see the magic. Wie heißt du?");
    
    // Canvas 
    function canvasInput() {
        canvas = document.getElementsByTagName("canvas")[0];
        let inhalt:any = document.getElementById("content");
        let div: HTMLDivElement = document.createElement("div");
                div.style.width = "40%";
                div.style.height = "10em";
                div.style.position = "absolute";
                div.style.top = "3em";
                div.style.left = "48%";
                div.style.zIndex = "99";
                div.addEventListener("click",drawRegen);
                inhalt.appendChild(div);
         

        crc2 = canvas.getContext("2d");
        // Backgound 
        crc2.fillStyle = "#800000";
        crc2.fillRect(0, 0, 1200, 600);
        // Book
        crc2.beginPath();
        crc2.moveTo(50, 530);
        crc2.lineTo(1150, 530);
        crc2.lineTo(1150, 70);
        crc2.lineTo(50, 70);
        crc2.closePath();
        crc2.strokeStyle = "#2e242c";
        crc2.stroke();
        crc2.fillStyle = "#fdf5e6";
        crc2.fill();
        // Mittel Linie
        crc2.beginPath();
        crc2.moveTo(600, 530);
        crc2.lineTo(600, 70);
        crc2.closePath();
        crc2.strokeStyle = "#2e242c";
        crc2.stroke();
        // Baum 
        baumBild.src = "imgs/Baum.png";
        // Baum Bild Kasten 
        crc2.beginPath();
        crc2.moveTo(650, 100);
        crc2.lineTo(650, 500);
        crc2.lineTo(650, 500);
        crc2.lineTo(1100, 500);
        crc2.lineTo(1100, 500);
        crc2.lineTo(1100, 100);
        crc2.lineTo(1100, 100);
        crc2.lineTo(650, 100);
        crc2.closePath();
        crc2.strokeStyle = "#2e242c";
        crc2.stroke();
        crc2.fillStyle = "#CAE1FF";
        crc2.fill();
        // Text
        crc2.fillStyle = "#2e242c";
        crc2.fill();
        crc2.font="30px Lora";
        crc2.fillText('»Bäumchen, rüttel dich', 100, 230);
        crc2.fillText('und schüttel dich ', 100, 280);
        crc2.fillText('wirf Gold und Silber über mich!«' , 100, 330);
        crc2.font="20px Lora";
        crc2.fillText(' Aschenputtel', 360, 440);
       
        image = crc2.getImageData(0, 0, 1200, 600);
        
        
        
    
    
    for (let i: number = 0; i < 800; i++) {
            let s: goldRegen = new goldRegen(Math.random() * 1200 + 0, Math.random() *-600 + 0,"gold");
            superclass.push(s);
        }
        animate();
    }
    
    function drawRegen():void{
      
        for (let i: number = 0; i < superclass.length; i++) {
          let s: goldRegen = superclass[i];
            
            s.zeichnen=true;
        }   
    }
    
    
    
    
    
    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 1200, 600);  // Hintergrundbild löschen
        crc2.putImageData(image, 0, 0);   // Hintergrundbild einsetzen
        crc2.drawImage(baumBild, 550, 100);  // Baum Bild einfügen 
        for (let i: number = 0; i < superclass.length; i++) {
        let s: goldRegen = superclass[i];
            
            s.update();
        } 

    window.setTimeout(animate, 15);      // animate wird alle 15ms wiederholt 

    }

     

  
    
} 
