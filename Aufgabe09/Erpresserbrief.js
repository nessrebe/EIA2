/*
Aufgabe: Aufgabe 9
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A9;
(function (A9) {
    window.addEventListener("load", init);
    let chosenletter;
    document.addEventListener("keydown", tastaturEingabe);
    function init() {
        let buchstaben = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let anzahl = buchstaben.length;
        if (anzahl == buchstaben.length) {
            for (let i = 0; i < buchstaben.length; i++) {
                drawBox(buchstaben[i]);
            }
        }
        drawBrief();
    }
    function handleClick(_event) {
        let klicken = _event.target;
        klicken.style.color = "#F0F8FF";
        chosenletter = klicken.id;
        let divList = document.getElementsByClassName("chosenletters");
        for (let i = 0; i < divList.length; i++) {
            if (chosenletter != divList[i].id) {
                divList[i].style.color = "black";
            }
        }
    }
    //divs/ BOXEN mit den letters
    function drawBox(_buchstaben) {
        let div = document.createElement("div"); // html div Element erstellt 
        div.innerText = _buchstaben;
        div.style.backgroundColor = "#BC8F8F";
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.marginLeft = "3px";
        div.style.marginRight = "3px";
        div.style.fontSize = "30px";
        div.style.textAlign = "center";
        div.id = _buchstaben; //ID erstellt um divs zu vergleichen
        div.className = "chosenletters";
        div.addEventListener("click", handleClick);
        document.body.appendChild(div);
    }
    // Brief BOX
    function drawBrief() {
        let chosenletter = document.createElement("div");
        chosenletter.style.backgroundColor = "#F0F8FF";
        chosenletter.style.width = "1000px";
        chosenletter.style.height = "350px";
        chosenletter.style.marginTop = "12px";
        chosenletter.style.marginRight = "3px";
        chosenletter.addEventListener("click", setchosenletters);
        document.body.appendChild(chosenletter);
    }
    //chosenletters in Brief einfügen
    function setchosenletters(_event) {
        let box = document.createElement("div");
        box.innerText = chosenletter;
        box.style.backgroundColor = "#F0F8FF";
        box.style.width = "35px";
        box.style.height = "35px";
        box.style.marginLeft = "3px";
        box.style.marginRight = "3px";
        box.style.fontSize = "30px";
        box.style.textAlign = "center";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";
        box.addEventListener("click", deletechosenletter);
        document.body.appendChild(box);
        let clicking = _event.target;
    }
    //chosenletters mit keyboard eingeben 
    function tastaturEingabe(event) {
        if (event.key == "a" || event.key == "A") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "b" || event.key == "B") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "c" || event.key == "C") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "d" || event.key == "D") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "e" || event.key == "E") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "f" || event.key == "F") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "g" || event.key == "G") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "h" || event.key == "H") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "i" || event.key == "I") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "j" || event.key == "J") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "k" || event.key == "K") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "l" || event.key == "L") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "m" || event.key == "M") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "n" || event.key == "N") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "o" || event.key == "O") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "p" || event.key == "P") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "q" || event.key == "Q") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "r" || event.key == "R") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "s" || event.key == "S") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "t" || event.key == "T") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "u" || event.key == "U") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "v" || event.key == "V") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "w" || event.key == "W") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "x" || event.key == "X") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "y" || event.key == "Y") {
            chosenletter = event.key;
            setchosenletters;
        }
        else if (event.key == "z" || event.key == "Z") {
            chosenletter = event.key;
            setchosenletters;
        }
    }
    function handleAlt(_event) {
        if (_event.keyCode == 18) {
            deletechosenletter;
        }
    }
    function deletechosenletter(_event) {
        let d = _event.target;
        document.addEventListener("keypressed", handleAlt);
        document.body.removeChild(d);
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=Erpresserbrief.js.map