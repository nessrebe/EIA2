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
        let splitted: string[] = _input.split(",");

        if (parseInt(splitted[0]) == NaN) {
            return "Matrikelnummer keine Nummer";
        }
        
        
        var geschlecht: boolean = parseInt(splitted[4]) == 1;   

        let student: StudentData = {
            Matrikelnummer: parseInt(splitted[0]),
            Name: splitted[1],
            Vorname: splitted[2],
            Alter: parseInt(splitted[3]),
            Geschlecht: geschlecht,
            Kommentar: splitted[5]
        };

        students.push(student);


        return "Eingegebene Daten: " + "\nMatrikelnummer: " + student.Matrikelnummer + "\nName: " + student.Name + "\nVorname: " + student.Vorname + "\nAlter: " + student.Alter + "\nGeschlecht: " + student.Geschlecht + "\nKommentar: " + student.Kommentar;
    }

    
    function queryData(_matrikel: number): string {
        
            for (let i: number = 0; i < students.length; i++) {
            
            if (students[i].Matrikelnummer == _matrikel) {
                return "Student: " + "\nMatrikelnummer: " + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + students[i].Geschlecht + "\nKommentar: " + students[i].Kommentar;
            }
            
                else {
                return "Matrikelnummer nicht gespeichert";
                }
        }

        return;
    }
}