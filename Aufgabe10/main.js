/*
Aufgabe: Aufgabe 10
Name: Rebecca Neß
Matrikel: 256154
Datum: 12.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A10;
(function (A10) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    let name;
    let strasse;
    let hausnummer;
    let ort;
    let plz;
    let mail;
    let zusatz;
    let label;
    let basketBaumart = ["keine Baumart ausgewählt", "0"];
    let basketHalter = ["keiner ausgewählt", "0"];
    let basketBeleuchtung = ["willst du deinen Baum leuchten lassen?" + A10.b[0][1]];
    let basketSchmuck = [];
    let basketLieferopt = ["keine Lieferoption ausgewählt", "0"];
    function createElements() {
        let baumart = document.getElementById("baumart");
        for (let i = 0; i < A10.posten.length; i++) {
            if (A10.posten[i].art == "Baumart") {
                //radiobutton erzeugen
                var radioB3 = document.createElement("input");
                radioB3.type = "radio"; //radio = Auswählknöpfchen, radiogroup eins kann ausgewählt werden 
                radioB3.name = "radioGroupBaumart";
                radioB3.value = "radio3." + i;
                radioB3.id = "radio3." + i;
                baumart.appendChild(radioB3); //appendChild: heißt es wird angehängt (id = baumart in html)
                //nicht nur durch Radio button kann auch gewählt werden sonder auch durch klicken auf den Text
                var label4 = document.createElement("label");
                label4.id = "label" + i;
                label4.htmlFor = radioB3.id;
                label4.innerText = A10.posten[i].name; //innerText
                baumart.appendChild(label4);
                //Stepper
                let stepper2 = document.createElement("input");
                stepper2.type = "number";
                stepper2.name = "StepperBaumart" + i;
                stepper2.value = "1";
                stepper2.id = "stepper2." + i;
                stepper2.min = "1";
                stepper2.max = "10";
                stepper2.step = "1";
                baumart.appendChild(stepper2);
                var br = document.createElement("br");
                baumart.appendChild(br);
            }
        }
        //Halterung:
        let halterung = document.getElementById("halterung");
        for (let i = 0; i < A10.posten.length; i++) {
            if (A10.posten[i].art == "Halter") {
                //Radiobutton erzeugen
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                //Text auswahlmöglichkeiten erzeugen
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = A10.posten[i].name;
                halterung.appendChild(label);
                var br = document.createElement("br");
                halterung.appendChild(br);
            }
        }
        //Beleuchtung:
        let beleuchtung = document.getElementById("beleuchtung");
        //Selectbox erzeugen und Eigenschaften festlegen
        let selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        //Auswahlmöglichkeiten erzeugen
        for (let i = 0; i < A10.posten.length; i++) {
            if (A10.posten[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = A10.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Dekoartikel:
        let schmuckartikel = document.getElementById("schmuckartikel");
        //Liste durch for Schleife erzeugen....für jedes Element:
        for (let i = 0; i < A10.posten.length; i++) {
            if (A10.posten[i].art == "Deko") {
                //....eine Checkbox,...
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxDekoartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                //...den Text zur Auswahlmöglichkeit,...
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = A10.posten[i].name;
                schmuckartikel.appendChild(label2);
                //..und den Stepper erzeugen.
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperDekoartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "20";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }
        //Deine Daten:
        let daten = document.getElementById("daten");
        //Daten let für Zugriff auf id in der html
        //Daten anhängen für einzelne Eingabefelder
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Vorname, Nachname";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
        strasse.required = true;
        daten.appendChild(strasse);
        hausnummer = document.createElement("input");
        hausnummer.type = "number";
        hausnummer.name = "DatenHausnummer";
        hausnummer.placeholder = "Hausnummer";
        hausnummer.pattern = "[0-9]{3}";
        hausnummer.required = true;
        daten.appendChild(hausnummer);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.required = true;
        daten.appendChild(ort);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        //Lieferoptionen:
        let lieferopt = document.getElementById("lieferoptionen");
        for (let i = 0; i < A10.posten.length; i++) {
            if (A10.posten[i].art == "Lieferung") {
                //Radiobutton erstellen
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                //Text zur Auswahlmöglichkeit erstellen
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = A10.posten[i].name;
                lieferopt.appendChild(label3);
                var br = document.createElement("br");
                lieferopt.appendChild(br);
            }
        }
        //Button:
        //Submit Button zur Überprüfung erstellen
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.style.padding = "1em 2.5em 1em 2.5em";
        submit.style.borderRadius = "0.4em";
        submit.style.border = "none";
        submit.style.background = "#9BCD9B";
        submit.innerText = "Finish";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit); // submit
    }
    function warenkorb(_event) {
        let target = _event.target;
        let stepper = [];
        let stepper2 = [];
        let checkBoxes = [];
        let checkBoxes2 = [];
        let gesamtpreis = 0;
        for (let i = 0; i < A10.posten.length; i++) {
            //Schmuck Warenkorb
            if (A10.posten[i].art == "Deko") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            //Baumart Warenkorb
            if (target.id == "radio3." + i || target.id == "stepper2." + i) {
                stepper2[i] = document.getElementById("stepper2." + i);
                checkBoxes2[i] = document.getElementById("check" + i);
                basketBaumart[0] = A10.posten[i].name;
                basketBaumart[1] = "" + (A10.posten[i].preis * parseInt(stepper2[i].value));
            }
            //Halter Warenkorb
            if (target.id == "radio" + i) {
                basketHalter[0] = A10.posten[i].name;
                basketHalter[1] = "" + A10.posten[i].preis;
            }
            //Lieferoptionen Warenkorb
            if (target.id == "radio2." + i) {
                basketLieferopt[0] = A10.posten[i].name;
                basketLieferopt[1] = "" + A10.posten[i].preis;
            }
            //Beleuchtung Warenkorb
            if (target.value == A10.posten[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = A10.posten[i].name;
                basketBeleuchtung[1] = "" + A10.posten[i].preis;
            }
            //Schmuck Warenkorb
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [A10.posten[i].name, "" + Math.round((A10.posten[i].preis * parseInt(stepper[i].value) * 100)) / 100];
            }
        }
        let korb = document.getElementById("zusammenfassung");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#9BCD9B";
        korb.innerHTML = "<span class='wk'>Dein Warenkorb</span> <br>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "€ <br>";
        korb.innerHTML += basketHalter[0] + ": " + basketHalter[1] + "€ <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + ": " + basketBeleuchtung[1] + "€ <br>";
        korb.innerHTML += " " + basketLieferopt[0] + ": " + basketLieferopt[1] + "€ <br>";
        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketBeleuchtung[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferopt[1]);
        for (let i = 0; i < stepper.length; i++) {
            //Wenn anzahl nicht gleich 0 und die checkbox ausgewählt ist, dann......
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]); //preis dazurechnen
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "€ <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "€";
        let price = document.getElementById("price");
        price.innerHTML = "";
        price.innerHTML += "Gesamtpreis: ";
        price.innerHTML += Math.round(gesamtpreis * 100) / 100 + "€";
    }
    function handleMouseDown(_event) {
        let feedback = document.createElement("div");
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausnummer.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Uppps etwas stimmt nicht mit den angegebenen Daten. Bitte überprüfe diese noch einmal.";
            feedback.style.color = "red";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Vielen Dank für deine Bestellung bei Dein Weihnachtsbaumkonfigurator, in deinen Mails findest du deine Bestellbescheinigung.";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=main.js.map