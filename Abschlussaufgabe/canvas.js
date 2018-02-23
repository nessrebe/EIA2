var AG;
(function (AG) {
    window.addEventListener("load", canvasInput);
    let canvas;
    console.log(canvas);
    console.log(AG.crc2);
    let image;
    let baumBild = new Image();
    let superclass = [];
    // Start Page 
    let start = prompt("Hallo mein Freund, bist du ready um in eine märchenhafte Welt einzutauchen? Klick auf den Baum and you´ll see the magic. Wie heißt du?");
    // Canvas 
    function canvasInput() {
        canvas = document.getElementsByTagName("canvas")[0];
        let inhalt = document.getElementById("content");
        let div = document.createElement("div");
        div.style.width = "40%";
        div.style.height = "10em";
        div.style.position = "absolute";
        div.style.top = "3em";
        div.style.left = "48%";
        div.style.zIndex = "99";
        div.addEventListener("click", drawRegen);
        inhalt.appendChild(div);
        AG.crc2 = canvas.getContext("2d");
        // Backgound 
        AG.crc2.fillStyle = "#800000";
        AG.crc2.fillRect(0, 0, 1200, 600);
        // Book
        AG.crc2.beginPath();
        AG.crc2.moveTo(50, 530);
        AG.crc2.lineTo(1150, 530);
        AG.crc2.lineTo(1150, 70);
        AG.crc2.lineTo(50, 70);
        AG.crc2.closePath();
        AG.crc2.strokeStyle = "#2e242c";
        AG.crc2.stroke();
        AG.crc2.fillStyle = "#fdf5e6";
        AG.crc2.fill();
        // Mittel Linie
        AG.crc2.beginPath();
        AG.crc2.moveTo(600, 530);
        AG.crc2.lineTo(600, 70);
        AG.crc2.closePath();
        AG.crc2.strokeStyle = "#2e242c";
        AG.crc2.stroke();
        // Baum 
        baumBild.src = "imgs/Baum.png";
        // Baum Bild Kasten 
        AG.crc2.beginPath();
        AG.crc2.moveTo(650, 100);
        AG.crc2.lineTo(650, 500);
        AG.crc2.lineTo(650, 500);
        AG.crc2.lineTo(1100, 500);
        AG.crc2.lineTo(1100, 500);
        AG.crc2.lineTo(1100, 100);
        AG.crc2.lineTo(1100, 100);
        AG.crc2.lineTo(650, 100);
        AG.crc2.closePath();
        AG.crc2.strokeStyle = "#2e242c";
        AG.crc2.stroke();
        AG.crc2.fillStyle = "#CAE1FF";
        AG.crc2.fill();
        // Text
        AG.crc2.fillStyle = "#2e242c";
        AG.crc2.fill();
        AG.crc2.font = "30px Lora";
        AG.crc2.fillText('»Bäumchen, rüttel dich', 100, 230);
        AG.crc2.fillText('und schüttel dich ', 100, 280);
        AG.crc2.fillText('wirf Gold und Silber über mich!«', 100, 330);
        AG.crc2.font = "20px Lora";
        AG.crc2.fillText(' Aschenputtel', 360, 440);
        image = AG.crc2.getImageData(0, 0, 1200, 600);
        for (let i = 0; i < 800; i++) {
            let s = new AG.goldRegen(Math.random() * 1200 + 0, Math.random() * -600 + 0, "gold");
            superclass.push(s);
        }
        animate();
    }
    function drawRegen() {
        for (let i = 0; i < superclass.length; i++) {
            let s = superclass[i];
            s.zeichnen = true;
        }
    }
    function animate() {
        console.log("Timeout");
        AG.crc2.clearRect(0, 0, 1200, 600); // Hintergrundbild löschen
        AG.crc2.putImageData(image, 0, 0); // Hintergrundbild einsetzen
        AG.crc2.drawImage(baumBild, 550, 100); // Baum Bild einfügen 
        for (let i = 0; i < superclass.length; i++) {
            let s = superclass[i];
            s.update();
        }
        window.setTimeout(animate, 15); // animate wird alle 15ms wiederholt 
    }
})(AG || (AG = {}));
//# sourceMappingURL=canvas.js.map