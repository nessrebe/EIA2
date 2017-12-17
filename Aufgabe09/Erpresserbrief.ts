/*
Aufgabe: Aufgabe 9
Name: Rebecca Neß
Matrikel: 256154
Datum: 15.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A9 {
    
    window.addEventListener("load", init);
    
    let letter: string; 

    document.addEventListener ("keydown", tastaturEingabe);
    
    

    function init(): void {

        let buchstaben: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        let anzahl: number = buchstaben.length;

        if (anzahl == buchstaben.length) {
            for (let i: number = 0; i < buchstaben.length; i++) {
                drawBox(buchstaben[i]);
            }
        }
        drawBrief();
    }
    
    
    
    function handleClick(_event: MouseEvent): void {

            let klicken: HTMLDivElement = <HTMLDivElement>_event.target;
            klicken.style.color = "#F0F8FF";

            letter = klicken.id;

            let divList: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letters");

            for (let i: number = 0; i < divList.length; i++) {
                if (letter != divList[i].id) {
                    divList[i].style.color = "black";
                }
            }
        }

    

    //divs mit letters
    function drawBox(_buchstaben: string): void {

        let div: HTMLDivElement = document.createElement("div");  // html div Element erstellt 

        div.innerText = _buchstaben;
        div.style.backgroundColor = "#BC8F8F";
        div.style.width = "35px";
        div.style.height = "35px";
        div.style.marginLeft = "2px";
        div.style.marginRight = "2px";
        div.style.fontSize = "30px";
        div.style.textAlign = "center";
        div.id = _buchstaben;  //ID erstellt um divs zu vergleichen
        div.className = "letters";

        div.addEventListener("click", handleClick);
        document.body.appendChild(div);
    }

    
    
       function drawBrief(): void {

        let letter: HTMLDivElement = document.createElement("div");

        letter.style.backgroundColor = "#F0F8FF";
        letter.style.width = "800px";
        letter.style.height = "300px";
        letter.style.marginTop = "10px";
        letter.style.marginRight = "2px";

       
        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);

    }

    
    
    //letters in Brief einfügen
    function setLetters(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");
        
        box.innerText =letter;
        box.style.backgroundColor ="#F0F8FF";
        box.style.width = "35px";
        box.style.height = "35px";
        box.style.marginLeft = "2px";
        box.style.marginRight = "2px";
        box.style.fontSize = "30px";
        box.style.textAlign = "center";
        box.style.position="absolute";
        box.style.left = _event.pageX + "px";
        box.style.top= _event.pageY + "px";
        
        box.addEventListener("click", deleteLetter);
        document.body.appendChild(box);
        
          let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }
    
    
    
    //letters mit keyboard eingeben 
    function tastaturEingabe(event: KeyboardEvent): void {
        
        if (event.key == "a" || event.key == "A") { 
            letter = event.key; 
            setLetters;
        }
        
        else if (event.key == "b" || event.key == "B") {
            letter = event.key;
            setLetters;
        }
        
        else if (event.key == "c" || event.key == "C") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "d" || event.key == "D") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "e" || event.key == "E") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "f" || event.key == "F") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "g" || event.key == "G") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "h" || event.key == "H") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "i" || event.key == "I") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "j" || event.key == "J") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "k" || event.key == "K") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "l" || event.key == "L") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "m" || event.key == "M") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "n" || event.key == "N") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "o" || event.key == "O") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "p" || event.key == "P") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "q" || event.key == "Q") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "r" || event.key == "R") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "s" || event.key == "S") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "t" || event.key == "T") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "u" || event.key == "U") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "v" || event.key == "V") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "w" || event.key == "W") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "x" || event.key == "X") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "y" || event.key == "Y") {
            letter = event.key;
            setLetters;
        }

        else if (event.key == "z" || event.key == "Z") {
            letter = event.key;
            setLetters;
        }
    }

    
    
    function handleAlt (_event: KeyboardEvent): void {
        if(_event.keyCode ==18) {
            
            deleteLetter;
            }
        }
    
    
    
    function deleteLetter(_event:MouseEvent): void {
        
        let d: HTMLDivElement = <HTMLDivElement> _event.target;
        document.addEventListener("keypressed", handleAlt);
        document.body.removeChild(d);
        }
    
}

