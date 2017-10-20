window.addEventListener("load", canvasInput);
function canvasInput() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
    // Hintergrund 
    crc2.fillStyle = "#6495ED";
    crc2.fillRect(0, 0, 800, 600);
    // Sonne
    crc2.beginPath();
    crc2.arc(80, 80, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFD700";
    crc2.fill();
    // Berg One
    crc2.beginPath();
    crc2.moveTo(0, 700);
    crc2.lineTo(700, 700);
    crc2.lineTo(350, 100);
    crc2.closePath();
    crc2.strokeStyle = "#BEBEBE";
    crc2.stroke();
    crc2.fillStyle = "#BEBEBE";
    crc2.fill();
    // Berg Two
    crc2.beginPath();
    crc2.moveTo(0, 720);
    crc2.lineTo(700, 600);
    crc2.lineTo(450, 70);
    crc2.closePath();
    crc2.strokeStyle = "#BEBEBE";
    crc2.stroke();
    crc2.fillStyle = "#BEBEBE";
    crc2.fill();
    // Berg Three
    crc2.beginPath();
    crc2.moveTo(800, 1800);
    crc2.lineTo(800, 500);
    crc2.lineTo(455, 80);
    crc2.closePath();
    crc2.strokeStyle = "#BEBEBE";
    crc2.stroke();
    crc2.fillStyle = "#BEBEBE";
    crc2.fill();
    // Skilift
    crc2.beginPath();
    crc2.moveTo(430, 130);
    crc2.lineTo(500, 500);
    //crc2.lineTo(30, 50);
    crc2.strokeStyle = "#000";
    crc2.stroke();
    // Baum One
    crc2.beginPath();
    crc2.moveTo(680, 340);
    crc2.lineTo(710, 430);
    crc2.lineTo(650, 430);
    crc2.closePath();
    crc2.strokeStyle = "#228B22";
    crc2.stroke();
    crc2.fillStyle = "#228B22";
    crc2.fill();
    // Baum Two
    crc2.beginPath();
    crc2.moveTo(150, 500);
    crc2.lineTo(200, 500);
    crc2.lineTo(180, 410);
    crc2.closePath();
    crc2.strokeStyle = "#228B22";
    crc2.stroke();
    crc2.fillStyle = "#228B22";
    crc2.fill();
    // Wolke 
    crc2.beginPath();
    crc2.arc(740, 80, 20, 1, 3 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(720, 60, 20, 2, 4 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(720, 100, 20, 2, 4 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(700, 70, 20, 2, 4 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(705, 95, 20, 2, 4 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
}
//# sourceMappingURL=Skipiste.js.map