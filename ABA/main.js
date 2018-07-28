/*
Aufgabe: Abschlussaufgabe
Name: Rebecca Neß
Matrikel: 256154
Datum: 08.07.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var ZOO;
(function (ZOO) {
    // Audio Dateien einbinden 
    var monkeyaudio = new Audio('monkeys.wav');
    var alpacaaudio = new Audio('Alpaca.wav');
    var crocodileaudio = new Audio('crocodile.wav');
    var elephantaudio = new Audio('elephant.wav');
    var brownbearaudio = new Audio('brownbear.wav');
    var parrotaudio = new Audio('Parrots.wav');
    var pigaudio = new Audio('pig.wav');
    var meercataudio = new Audio('meercat.wav');
    let i;
    let objects = [];
    let duck = [];
    let bug = [];
    let turtle = [];
    let snake = [];
    let cloud = [];
    window.addEventListener("load", canvasInput);
    let image;
    function canvasInput() {
        let meercatdiv = document.createElement("div");
        meercatdiv.id = "meercatdiv";
        meercatdiv.style.width = "100px";
        meercatdiv.style.height = "150px";
        meercatdiv.style.position = "absolute";
        meercatdiv.style.top = "550px";
        meercatdiv.style.left = "480px";
        meercatdiv.onclick = function () { meercataudio.play(); alert('Hey! I am Marvin the Meercat!'); };
        document.body.appendChild(meercatdiv);
        let alpacadiv = document.createElement("div");
        alpacadiv.id = "alpacadiv";
        alpacadiv.style.width = "160px";
        alpacadiv.style.height = "170px";
        alpacadiv.style.position = "absolute";
        alpacadiv.style.top = "300px";
        alpacadiv.style.left = "10px";
        alpacadiv.onclick = function () { alpacaaudio.play(); alert('Hey! I am Alvin the Alpaca!'); };
        document.body.appendChild(alpacadiv);
        let crocodilediv = document.createElement("div");
        crocodilediv.id = "elephantdiv";
        crocodilediv.style.width = "320px";
        crocodilediv.style.height = "200px";
        crocodilediv.style.position = "absolute";
        crocodilediv.style.top = "500px";
        crocodilediv.style.left = "40px";
        crocodilediv.onclick = function () { crocodileaudio.play(); alert('Hey! I am Carmen the Crocodile!'); };
        document.body.appendChild(crocodilediv);
        let elephantdiv = document.createElement("div");
        elephantdiv.id = "elephantdiv";
        elephantdiv.style.width = "270px";
        elephantdiv.style.height = "300px";
        elephantdiv.style.position = "absolute";
        elephantdiv.style.top = "340px";
        elephantdiv.style.left = "730px";
        elephantdiv.onclick = function () { elephantaudio.play(); alert('Hey! I am Elvira the Elephant!'); };
        document.body.appendChild(elephantdiv);
        let monkeydiv = document.createElement("div");
        monkeydiv.id = "monkeydiv";
        monkeydiv.style.width = "140px";
        monkeydiv.style.height = "140px";
        monkeydiv.style.position = "absolute";
        monkeydiv.style.top = "335px";
        monkeydiv.style.left = "530px";
        monkeydiv.onclick = function () { monkeyaudio.play(); alert('Hey! I am Monty the Monkey!'); };
        document.body.appendChild(monkeydiv);
        let pigdiv = document.createElement("div");
        pigdiv.id = "pigdiv";
        pigdiv.style.width = "140px";
        pigdiv.style.height = "154px";
        pigdiv.style.position = "absolute";
        pigdiv.style.top = "290px";
        pigdiv.style.left = "230px";
        pigdiv.onclick = function () { pigaudio.play(); alert('Hey! I am Paul the Pig!'); };
        document.body.appendChild(pigdiv);
        let brownbeardiv = document.createElement("div");
        brownbeardiv.id = "brownbeardiv";
        brownbeardiv.style.width = "150px";
        brownbeardiv.style.height = "154px";
        brownbeardiv.style.position = "absolute";
        brownbeardiv.style.top = "300px";
        brownbeardiv.style.left = "1050px";
        brownbeardiv.onclick = function () { brownbearaudio.play(); alert('Hey! I am Bernie the Brownbear!'); };
        document.body.appendChild(brownbeardiv);
        let parrotdiv = document.createElement("div");
        parrotdiv.id = "parrotdiv";
        parrotdiv.style.width = "50px";
        parrotdiv.style.height = "62px";
        parrotdiv.style.position = "absolute";
        parrotdiv.style.top = "28px";
        parrotdiv.style.left = "605px";
        parrotdiv.onclick = function () { parrotaudio.play(); alert('Hey! I am Paolo the Parrot!'); };
        document.body.appendChild(parrotdiv);
        let canvas = document.getElementsByTagName("canvas")[0];
        ZOO.crc2 = canvas.getContext("2d");
        // sky 
        ZOO.crc2.fillStyle = "lightblue";
        ZOO.crc2.fillRect(0, 0, 1200, 700);
        // field
        ZOO.crc2.beginPath();
        ZOO.crc2.moveTo(0, 300);
        ZOO.crc2.lineTo(0, 700);
        ZOO.crc2.lineTo(1200, 700);
        ZOO.crc2.lineTo(1200, 300);
        ZOO.crc2.closePath();
        ZOO.crc2.strokeStyle = "#88ea89";
        ZOO.crc2.stroke();
        ZOO.crc2.fillStyle = "#88ea89";
        ZOO.crc2.fill();
        // mountains
        ZOO.crc2.beginPath();
        ZOO.crc2.arc(100, 300, 200, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#88ea89";
        ZOO.crc2.fill();
        ZOO.crc2.beginPath();
        ZOO.crc2.arc(300, 300, 150, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#88ea89";
        ZOO.crc2.fill();
        ZOO.crc2.beginPath();
        ZOO.crc2.arc(500, 300, 100, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#88ea89";
        ZOO.crc2.fill();
        ZOO.crc2.beginPath();
        ZOO.crc2.arc(700, 300, 200, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#88ea89";
        ZOO.crc2.fill();
        ZOO.crc2.beginPath();
        ZOO.crc2.arc(950, 300, 150, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#88ea89";
        ZOO.crc2.fill();
        ZOO.crc2.beginPath();
        ZOO.crc2.arc(1150, 300, 100, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#88ea89";
        ZOO.crc2.fill();
        // sun
        ZOO.crc2.beginPath();
        ZOO.crc2.arc(1100, 80, 50, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#fff061";
        ZOO.crc2.fill();
        //river
        ZOO.crc2.fillStyle = "lightblue";
        ZOO.crc2.fillRect(0, 280, 1200, 140);
        // gate left pole
        ZOO.crc2.beginPath();
        ZOO.crc2.moveTo(500, 270);
        ZOO.crc2.lineTo(500, 200);
        ZOO.crc2.closePath();
        ZOO.crc2.strokeStyle = "#8B4513";
        ZOO.crc2.lineWidth = 10;
        ZOO.crc2.stroke();
        ZOO.crc2.fillStyle = "#8B4513";
        ZOO.crc2.fill();
        // gate right pole
        ZOO.crc2.beginPath();
        ZOO.crc2.moveTo(700, 270);
        ZOO.crc2.lineTo(700, 200);
        ZOO.crc2.closePath();
        ZOO.crc2.strokeStyle = "#8B4513";
        ZOO.crc2.lineWidth = 10;
        ZOO.crc2.stroke();
        ZOO.crc2.fillStyle = "#8B4513";
        ZOO.crc2.fill();
        // gate top
        ZOO.crc2.beginPath();
        ZOO.crc2.moveTo(500, 200);
        ZOO.crc2.lineTo(500, 80);
        ZOO.crc2.lineTo(700, 80);
        ZOO.crc2.lineTo(700, 200);
        ZOO.crc2.closePath();
        ZOO.crc2.strokeStyle = "#8B4513";
        ZOO.crc2.stroke();
        ZOO.crc2.fillStyle = "#8B4513";
        ZOO.crc2.fill();
        // cloud left
        ZOO.crc2.beginPath();
        ZOO.crc2.moveTo(365, 80);
        ZOO.crc2.lineTo(410, 80);
        ZOO.crc2.lineTo(410, 60);
        ZOO.crc2.lineTo(365, 60);
        ZOO.crc2.closePath();
        ZOO.crc2.fillStyle = "#ffffff";
        ZOO.crc2.fill();
        ZOO.crc2.beginPath();
        // middle
        ZOO.crc2.arc(390, 60, 15, 0, 2 * Math.PI);
        // left
        ZOO.crc2.arc(410, 65, 15, 0, 2 * Math.PI);
        // right
        ZOO.crc2.arc(367, 65, 15, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#ffffff";
        ZOO.crc2.fill();
        // cloud left left 
        ZOO.crc2.beginPath();
        ZOO.crc2.moveTo(90, 50);
        ZOO.crc2.lineTo(135, 50);
        ZOO.crc2.lineTo(135, 30);
        ZOO.crc2.lineTo(90, 30);
        ZOO.crc2.closePath();
        ZOO.crc2.fillStyle = "#ffffff";
        ZOO.crc2.fill();
        ZOO.crc2.beginPath();
        // middle
        ZOO.crc2.arc(115, 30, 15, 0, 2 * Math.PI);
        // left
        ZOO.crc2.arc(135, 35, 15, 0, 2 * Math.PI);
        // right
        ZOO.crc2.arc(94, 35, 15, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#ffffff";
        ZOO.crc2.fill();
        // cloud middle
        ZOO.crc2.beginPath();
        ZOO.crc2.moveTo(765, 70);
        ZOO.crc2.lineTo(810, 70);
        ZOO.crc2.lineTo(810, 50);
        ZOO.crc2.lineTo(765, 50);
        ZOO.crc2.closePath();
        ZOO.crc2.fillStyle = "#ffffff";
        ZOO.crc2.fill();
        ZOO.crc2.beginPath();
        // middle
        ZOO.crc2.arc(790, 50, 15, 0, 2 * Math.PI);
        // left
        ZOO.crc2.arc(810, 55, 15, 0, 2 * Math.PI);
        // right
        ZOO.crc2.arc(767, 55, 15, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#ffffff";
        ZOO.crc2.fill();
        // cloud right
        ZOO.crc2.beginPath();
        ZOO.crc2.moveTo(865, 90);
        ZOO.crc2.lineTo(910, 90);
        ZOO.crc2.lineTo(910, 70);
        ZOO.crc2.lineTo(865, 70);
        ZOO.crc2.closePath();
        ZOO.crc2.fillStyle = "#ffffff";
        ZOO.crc2.fill();
        ZOO.crc2.beginPath();
        // middle
        ZOO.crc2.arc(890, 70, 15, 0, 2 * Math.PI);
        // left
        ZOO.crc2.arc(910, 75, 15, 0, 2 * Math.PI);
        // right
        ZOO.crc2.arc(867, 75, 15, 0, 2 * Math.PI);
        ZOO.crc2.fillStyle = "#ffffff";
        ZOO.crc2.fill();
        alert("Hey! There are many animals on our planet. Get ready for a little journey and get to know a few them :)");
        alert("To get to know them, klick on the animals which dont move and hear what they have to say. Don´t forget to turn your volume on!:)");
        // Hintergrundmusik 
        var sound = new Audio("rainforestsound.mp3");
        sound.loop = true;
        sound.play();
        document.body.appendChild(sound);
        //duck
        for (let i = 0; i < 3; i++) {
            let duckX = Math.random() * 30;
            let duckY = 260 + Math.random() * 120;
            let duckDX = Math.random() * 30;
            let duckDY = 260 + Math.random() * 120;
            duck[i] = new ZOO.DuckData(duckX, duckY, duckDX, duckDY);
        }
        // bug
        for (let i = 0; i < 1; i++) {
            let bugX = 0;
            let bugY = 487;
            let bugDX = 0;
            let bugDY = 487;
            bug[i] = new ZOO.BugData(bugX, bugY, bugDX, bugDY);
        }
        // turtle
        for (let i = 0; i < 2; i++) {
            let turtleX = Math.random() * 30;
            let turtleY = 290 + Math.random() * 120;
            let turtleDX = Math.random() * 30;
            let turtleDY = 290 + Math.random() * 120;
            turtle[i] = new ZOO.TurtleData(turtleX, turtleY, turtleDX, turtleDY);
        }
        // snake
        for (let i = 0; i < 1; i++) {
            let snakeX = 0;
            let snakeY = 600;
            let snakeDX = 0;
            let snakeDY = 600;
            snake[i] = new ZOO.SnakeData(snakeX, snakeY, snakeDX, snakeDY);
        }
        // randome clouds
        for (let i = 0; i < 3; i++) {
            let cloudX = Math.random() * 1000;
            let cloudY = 30;
            let cloudDX = Math.random() * 1000;
            let cloudDY = 30;
            cloud[i] = new ZOO.CloudData(cloudX, cloudY, cloudDX, cloudDY);
        }
        image = ZOO.crc2.getImageData(0, 0, 1200, 700); //Bild sichern
        animate();
        function animate() {
            ZOO.crc2.putImageData(image, 0, 0);
            for (i = 0; i < duck.length; i++) {
                duck[i].update();
            }
            for (i = 0; i < bug.length; i++) {
                bug[i].update();
            }
            for (i = 0; i < turtle.length; i++) {
                turtle[i].update();
            }
            for (i = 0; i < snake.length; i++) {
                snake[i].update();
            }
            for (i = 0; i < cloud.length; i++) {
                cloud[i].update();
            }
            window.setTimeout(animate, 20);
        }
    }
})(ZOO || (ZOO = {}));
//# sourceMappingURL=main.js.map