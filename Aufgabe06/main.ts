/*  
Aufgabe: Aufgabe 6
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6 {

    window.addEventListener("load", canvasInput);  // Funktion canvasInput beginnt wenn Seite vollständig geladen hat 

    let canvas: HTMLCanvasElement;              // variable Allgemein/zentral GLOBAL von allen Funktionen abrufbar (Kiste in großem Raum)
    console.log(canvas);

    export let crc2: CanvasRenderingContext2D; 
           
    console.log(crc2);


    //Arrays (Assoziatives Array)
    let superclass: MovingShape [] = [];

    let image: ImageData;   //ImageData anstatt "any" / Ausgabe Hintergrundbild


    function canvasInput(): void {
        
        canvas = document.getElementsByTagName("canvas")[0]; //Var canvas wird in der funktion aufgerufen 
        crc2 = canvas.getContext("2d"); //Aufruf crc2 variable in der Funktion 
        
        // Hintergrund 
        crc2.fillStyle = "#6495ED";
        crc2.fillRect(0, 0, 800, 600);
        // Sonne
        crc2.beginPath();
        crc2.arc(80, 60, 40, 0, 2 * Math.PI)
        crc2.fillStyle = "#FFD700";
        crc2.fill();
        // Berg One
        crc2.beginPath();
        crc2.moveTo(0, 700);
        crc2.lineTo(700, 700);
        crc2.lineTo(350, 100);
        crc2.closePath();
        crc2.strokeStyle = "#D3D3D3";
        crc2.stroke();
        crc2.fillStyle = "#D3D3D3";
        crc2.fill();
        // Berg Two
        crc2.beginPath();
        crc2.moveTo(0, 720);
        crc2.lineTo(700, 600);
        crc2.lineTo(450, 70);
        crc2.closePath();
        crc2.strokeStyle = "#D3D3D3";
        crc2.stroke();
        crc2.fillStyle = "#D3D3D3";
        crc2.fill();
        // Skipiste vorne 
        crc2.beginPath();
        crc2.moveTo(0, 90);
        crc2.lineTo(0, 600);
        crc2.lineTo(800, 600);
        crc2.closePath();
        crc2.strokeStyle = "#FCFCFC";
        crc2.stroke();
        crc2.fillStyle = "#FCFCFC";
        crc2.fill();
        // Skilift
        crc2.beginPath();
        crc2.moveTo(430, 130);
        crc2.lineTo(600, 800);
        crc2.strokeStyle = "#000";
        crc2.stroke();
        // Skilift Ende 
        crc2.beginPath();
        crc2.moveTo(430, 130);
        crc2.lineTo(430, 200);
        crc2.strokeStyle = "#000";
        crc2.stroke();
       
       

        /////////Start Schleif    
        // Trees
        for (var i: number = 1; i < 8; i++) {
            drawTree(Math.floor(Math.random() * (300 - 15 + 1) + 15), Math.floor(Math.random() * (570 - 250 + 1) + 250), crc2);
        }

        // bewegende Wolken
        for (let i: number = 0; i < 3; i++) {
            let s: wolken = new wolken (Math.random() * 50 + i * 200, Math.random() * 100 + 0);   // NEW: verbindung zum Wolken.ts, greift auf Informationen zu 
            superclass.push(s);
        }
        
        // Skier
        for (let i: number = 0; i < 5; i++) {
            let s: skifahrer = new skifahrer(Math.random() * 100 + 10, Math.random() * 200 + 195, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            superclass.push(s);
        }
        
        // Schneeflocken 
        for (let i: number = 0; i < 500; i++) {
            let s: schneeflocken = new schneeflocken(Math.random() * 800 + 0, Math.random() * 600 + 0);
            superclass.push(s);
        }


        image = crc2.getImageData(0, 0, 800, 600);      //Bild in Variable speichern

        animate();

    } // Schließende Klammer der Funktion canvasInput



    /////////Funktion Animationen

    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600);     // Hintergrundbild löschen
        crc2.putImageData(image, 0, 0);     // Hintergrundbild einsetzen
       

    window.setTimeout(animate, 15);      // animate wird alle 15ms wiederholt 

}


//Funktion für Trees (Zeichung)
    function drawTree(_x: number, _y: number, crc2: any): void {
            crc2.beginPath();
            crc2.moveTo(_x - 14, _y);
            crc2.lineTo(_x + 26, _y);
            crc2.lineTo(_x + 4, _y - 60);
            crc2.lineTo(_x - 14, _y);
            crc2.fillStyle = "#228B22";
            crc2.fill();
            crc2.closePath();
        }
    
    
        for (let i: number = 0; i < superclass.length; i++) {
        let s: MovingShape = superclass[i];
            
            s.update();
        }   

}