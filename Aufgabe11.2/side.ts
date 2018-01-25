namespace A11 {
    export interface Bestellposten {
        art: string;
        name: string;
        preis: number;
    }

    export let posten: Bestellposten[] = [
        { art: "Baumart", name: "Nordmanntanne", preis: 29.99 },
        { art: "Baumart", name: "Blaufichte", preis: 44.99 },
        { art: "Baumart", name: "Rotfichte", preis: 44.99 },
        { art: "Baumart", name: "Fichte", preis: 29.99 },
        { art: "Baumart", name: "Kiefer", preis: 49.80 },
        { art: "Halter", name: "Halterung aus Holz", preis: 15.99 },
        { art: "Halter", name: "Halterung aus Metall silber", preis: 24.99 },
        { art: "Halter", name: "Halterung aus Metall grün", preis: 28.49 },
        { art: "Beleuchtung", name: "Lichterkette classic", preis: 20.80 },
        { art: "Beleuchtung", name: "Lichterkette bunt", preis: 15.99 },
        { art: "Beleuchtung", name: "echte Kerzen mit Halterung", preis: 31.55 },
        { art: "Deko", name: "Christbaumkugel in Rot", preis: 1.99 },
        { art: "Deko", name: "Christbaumkugel in Silber", preis: 1.60 },
        { art: "Deko", name: "Christbaumkugel in Gold", preis: 1.88 },
        { art: "Deko", name: "Christbaumkugel in Blau", preis: 1.60 },
        { art: "Deko", name: "Strohstern", preis: 0.99 },
        { art: "Deko", name: "Weihnachtsengel Anhänger", preis: 3.99 },
        { art: "Deko", name: "Herz Anhänger", preis: 1.99 },
        { art: "Deko", name: "Stern Anhänger", preis: 1.80 },
        { art: "Deko", name: "Christbaumspitze, Silber", preis: 4.79 },
        { art: "Deko", name: "Christbaumspitze, Gold", preis: 4.79 },
        { art: "Deko", name: "Lametta in Silber", preis: 2.99 },
        { art: "Deko", name: "Lametta in Rot", preis: 2.99 },
        { art: "Deko", name: "Lametta in Lila", preis: 2.11 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.99 },
    ];
    
    
    export let b: string[][] = [];   //export: exportiert aus gegebener Datei, mach Klassen, Variablen, funktionen über Dateigrenzen hinweg nutzbar 
    
    for (var i: number = 0; i < posten.length; i++) {
        

        if (posten[i].art == "Beleuchtung") {
           var temp: any = [posten[i].name, posten[i].preis]; 
           b.push(temp);                 //Push Def. -> The push() method adds new items to the end of an array, and returns the new length.

                           
        }
    }
}