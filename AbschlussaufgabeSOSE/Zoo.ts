/*
Aufgabe: Abschlussaufgabe SoSe 2018 (Nachholer) 
Name: Rebecca Neß
Matrikel: 256154
Datum: 08.07.2018   
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Zoo {
    
    window.addEventListener("load", init);
    
    //Canvas = Variable 
    export let crc2: CanvasRenderingContext2D;
    console.log(crc2)
    
    let image : ImageData;
    /*let soundPlay1: SoundPlay;*/
    let wolke: wolken[] = [];

  
    function init(): void {
        
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas") [0];
        console.log(canvas);
        
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        /*canvas = document.getElementsByTagName("canvas")[0];
        let inhalt:any = document.getElementById("sound");
        let div: HTMLDivElement = document.createElement("div");
                div.style.width = "40%";
                div.style.height = "10em";
                div.style.position = "absolute";
                div.style.backgroundcolor = "red";
                div.style.top = "3em";
                div.style.left = "30%";
                div.style.zIndex = "99";
                div.addEventListener("click",drawRegen);
                inhalt.appendChild(div); */
        
        
        
        let birds1: HTMLDivElement = document.createElement("div");
            birds1.style.position = "absolute";
            birds1.id = "birds"
            
            /*birds1.onclick.function(){alert('Hey, How are you? I´m birdy');}*/
        
            document.appendChild(birds1);  
            
        
        
        
        
        
        
        
        
        
        
        
        
        // sky 
        crc2.fillStyle = "#7c9de0";
        crc2.fillRect(0, 0, 1200, 700);
        // field
        crc2.beginPath();
        crc2.moveTo(0,300);
        crc2.lineTo(0,700);
        crc2.lineTo(1200,700);
        crc2.lineTo(1200,300);
        crc2.closePath();
        crc2.strokeStyle = "#88ea89";
        crc2.stroke();
        crc2.fillStyle = "#88ea89";
        crc2.fill();
        // mountain
        crc2.beginPath();
        crc2.moveTo(250, 700);
        crc2.lineTo(350, 900);
        crc2.lineTo(450, 600);
        crc2.closePath();
        crc2.strokeStyle = "#88ea89";
        crc2.stroke();
        crc2.fillStyle = "#88ea89";
        crc2.fill();
        // another mountain
        crc2.beginPath();
        crc2.moveTo(350, 700);
        crc2.lineTo(450, 1000);
        crc2.lineTo(550, 600);
        crc2.closePath();
        crc2.strokeStyle = "#88ea89";
        crc2.stroke();
        crc2.fillStyle = "#88ea89";
        crc2.fill();
        // sun
        crc2.beginPath();
        crc2.arc(1100,80,50,0,2 * Math.PI)
        crc2.fillStyle ="fff061";
        crc2.fill();
        // gate left pole
        crc2.beginPath();
        crc2.moveTo(500,450);
        crc2.lineTo(500,200);
        crc2.closePath();
        crc2.strokeStyle = "#8B4513";
        crc2.stroke();
        crc2.fillStyle = "#8B4513";
        crc2.fill();
        // gate right pole
        crc2.beginPath();
        crc2.moveTo(700,450);
        crc2.lineTo(700,200);
        crc2.closePath();
        crc2.strokeStyle = "#8B4513";
        crc2.stroke();
        crc2.fillStyle = "#8B4513";
        crc2.fill();
        // gate top
        crc2.beginPath();
        crc2.moveTo(500,200);
        crc2.lineTo(500,80);
        crc2.lineTo(700,80);
        crc2.lineTo(700,200);
        crc2.closePath();
        crc2.strokeStyle = "#8B4513";
        crc2.stroke();
        crc2.fillStyle = "#8B4513";
        crc2.fill();
        
      
        /*alert("Hey! There are many animals on our planet. Get ready for a little journey and get to know a few them :)");
        alert("To get to know them klick on the animals and hear what they have to say.");
        */
        var sound = new Audio("rainforestsound.wav")
        sound.loop = true;
        sound.play();
        document.body.appendChild(sound);
        
        //Start Schleife
        // birds 
        for (let i: number = 0; i < 3; i++) {
            let s: wolken = new wolken (Math.random() * 50 + i * 200, Math.random() * 100 + 0);   // NEW: verbindung zum Wolken.ts, greift auf Informationen zu 
            wolke[i] = s;
        }
        
        image = crc2.getImageData(0, 0, 1200, 700);
        
        animate ();
        
        }
        
    
    
        function animate(): void {
            console.log("Timeout");
            crc2.clearRect(0, 0, 800, 600);     // Hintergrundbild löschen
            crc2.putImageData(image, 0, 0);     // Hintergrundbild einsetzen


     


         for (let i: number = 0; i < wolke.length; i++) {
             let s: wolken = wolke[i];

             s.update();
         }
    
    
             window.setTimeout(animate, 15);      // animate wird alle 15ms wiederholt 

        }   
    
        
    } 
    
