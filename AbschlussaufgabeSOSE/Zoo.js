/*
Aufgabe: Abschlussaufgabe SoSe 2018 (Nachholer)
Name: Rebecca Neß
Matrikel: 256154
Datum: 08.07.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Zoo;
(function (Zoo) {
    window.addEventListener("load", init);
    console.log(Zoo.crc2);
    let image;
    /* let birds: birdsData[] = [];
     */
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Zoo.crc2 = canvas.getContext("2d");
        console.log(Zoo.crc2);
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
        let birds1 = document.createElement("div");
        birds1.style.position = "absolute";
        birds1.id = "birds";
        /*birds1.onclick.function(){alert('Hey, How are you? I´m birdy');}*/
        document.appendChild(birds1);
        // sky 
        Zoo.crc2.fillStyle = "#7c9de0";
        Zoo.crc2.fillRect(0, 0, 1200, 700);
        // field
        Zoo.crc2.beginPath();
        Zoo.crc2.moveTo(0, 300);
        Zoo.crc2.lineTo(0, 700);
        Zoo.crc2.lineTo(1200, 700);
        Zoo.crc2.lineTo(1200, 300);
        Zoo.crc2.closePath();
        Zoo.crc2.strokeStyle = "#88ea89";
        Zoo.crc2.stroke();
        Zoo.crc2.fillStyle = "#88ea89";
        Zoo.crc2.fill();
        // mountain
        Zoo.crc2.beginPath();
        Zoo.crc2.moveTo(250, 700);
        Zoo.crc2.lineTo(350, 900);
        Zoo.crc2.lineTo(450, 600);
        Zoo.crc2.closePath();
        Zoo.crc2.strokeStyle = "#88ea89";
        Zoo.crc2.stroke();
        Zoo.crc2.fillStyle = "#88ea89";
        Zoo.crc2.fill();
        // another mountain
        Zoo.crc2.beginPath();
        Zoo.crc2.moveTo(350, 700);
        Zoo.crc2.lineTo(450, 1000);
        Zoo.crc2.lineTo(550, 600);
        Zoo.crc2.closePath();
        Zoo.crc2.strokeStyle = "#88ea89";
        Zoo.crc2.stroke();
        Zoo.crc2.fillStyle = "#88ea89";
        Zoo.crc2.fill();
        // sun
        Zoo.crc2.beginPath();
        Zoo.crc2.arc(1100, 80, 50, 0, 2 * Math.PI);
        Zoo.crc2.fillStyle = "fff061";
        Zoo.crc2.fill();
        // gate left pole
        Zoo.crc2.beginPath();
        Zoo.crc2.moveTo(500, 450);
        Zoo.crc2.lineTo(500, 200);
        Zoo.crc2.closePath();
        Zoo.crc2.strokeStyle = "#8B4513";
        Zoo.crc2.stroke();
        Zoo.crc2.fillStyle = "#8B4513";
        Zoo.crc2.fill();
        // gate right pole
        Zoo.crc2.beginPath();
        Zoo.crc2.moveTo(700, 450);
        Zoo.crc2.lineTo(700, 200);
        Zoo.crc2.closePath();
        Zoo.crc2.strokeStyle = "#8B4513";
        Zoo.crc2.stroke();
        Zoo.crc2.fillStyle = "#8B4513";
        Zoo.crc2.fill();
        // gate top
        Zoo.crc2.beginPath();
        Zoo.crc2.moveTo(500, 200);
        Zoo.crc2.lineTo(500, 80);
        Zoo.crc2.lineTo(700, 80);
        Zoo.crc2.lineTo(700, 200);
        Zoo.crc2.closePath();
        Zoo.crc2.strokeStyle = "#8B4513";
        Zoo.crc2.stroke();
        Zoo.crc2.fillStyle = "#8B4513";
        Zoo.crc2.fill();
        // fence left
        Zoo.crc2.beginPath();
        Zoo.crc2.moveTo(500, 200);
        Zoo.crc2.lineTo(400, 10);
        Zoo.crc2.closePath();
        Zoo.crc2.strokeStyle = "#8B4513";
        Zoo.crc2.stroke();
        // fence right
        Zoo.crc2.beginPath();
        Zoo.crc2.moveTo(700, 200);
        Zoo.crc2.lineTo(900, 10);
        Zoo.crc2.closePath();
        Zoo.crc2.strokeStyle = "#8B4513";
        Zoo.crc2.stroke();
        /*alert("Hey! There are many animals on our planet. Get ready for a little journey and get to know a few them :)");
        alert("To get to know them klick on the animals and hear what they have to say. Have fun!");
        */
        var sound = new Audio("rainforestsound.wav");
        sound.loop = true;
        sound.play();
        document.body.appendChild(sound);
        image = Zoo.crc2.getImageData(0, 0, 1200, 700);
        /*for (let i: number = 0; i < 3; i++) {
           let s: birdsData = new birdsData (Math.random() * 50 + i * 200, Math.random() * 100 + 0);
           birds[i] = s;
       }*/
    }
    function animate() {
        console.log("Timeout");
        Zoo.crc2.clearRect(0, 0, 1200, 700); // Hintergrundbild löschen
        Zoo.crc2.putImageData(image, 0, 0); // Hintergrundbild einsetzen
        /* for (let i: number = 0; i < birds.length; i++) {
           let s: birdsData = birds[i];

           s.update();
          }
          
          window.setTimeout(animate, 15);*/
    }
})(Zoo || (Zoo = {}));
//# sourceMappingURL=Zoo.js.map