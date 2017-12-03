/* 
Aufgabe: Aufgabe 7
Name: Rebecca Neß
Matrikel: 256154
Datum: 01.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {
    
    interface StudentData {
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: number;
        Geschlecht: boolean; 
        Kommentar: string;
    }
    
    
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var Matrikelnummer: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(Matrikelnummer));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let dataArray: string[] = _input.split(",");
        let studentData: StudentData = {
            Matrikelnummer: parseInt(dataArray[0]),          
            Name: dataArray[1],                   
            Vorname: dataArray[2],
            Alter: parseInt(dataArray[3]),
            Geschlecht: parseInt(dataArray[4]) == 0,
            Kommentar: dataArray[5]
            };

        students.push(studentData);

        let Geschlecht: string;
        if (parseInt(dataArray[4]) == 0) {
            Geschlecht = "weiblich";
        }
        
        else {
            Geschlecht = "männlich";
        }

        return "Deine Daten:\n" + "\nMatrikelnummer: " + studentData.Matrikelnummer + "\nName: " + studentData.name + studentData.vorname + "\nAlter: " + studentData.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + studentData.kommentar;
        }

    }

    function queryData(_matrikel: number): string {
        
            if (Students[i].matrikel == _matrikel) {
                let Geschlecht: string = Students[i].Geschlecht ? "weiblich" : "männlich";
                return "Daten zur Matrikelnummer: " + Students[i].Matrikelnummer + "\n\nName: " + students[i].name + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }

            else {
                return "Matrikelnummer nicht in Datenbank vorhanden";
            }
     }


