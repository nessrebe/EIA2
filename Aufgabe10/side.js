var A10;
(function (A10) {
    A10.posten = [
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
        { art: "Schmuck", name: "Christbaumkugel in Rot", preis: 1.99 },
        { art: "Schmuck", name: "Christbaumkugel in Silber", preis: 1.60 },
        { art: "Schmuck", name: "Christbaumkugel in Gold", preis: 1.88 },
        { art: "Schmuck", name: "Christbaumkugel in Blau", preis: 1.60 },
        { art: "Schmuck", name: "Strohstern", preis: 0.99 },
        { art: "Schmuck", name: "Weihnachtsengel Anhänger", preis: 3.99 },
        { art: "Schmuck", name: "Herz Anhänger", preis: 1.99 },
        { art: "Schmuck", name: "Stern Anhänger", preis: 1.80 },
        { art: "Schmuck", name: "Christbaumspitze, Silber", preis: 4.79 },
        { art: "Schmuck", name: "Christbaumspitze, Gold", preis: 4.79 },
        { art: "Schmuck", name: "Lametta in Silber", preis: 2.99 },
        { art: "Schmuck", name: "Lametta in Rot", preis: 2.99 },
        { art: "Schmuck", name: "Lametta in Lila", preis: 2.11 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.99 },
    ];
    A10.b = []; //export: exportiert aus gegebener Datei, mach Klassen, Variablen, funktionen über Dateigrenzen hinweg nutzbar 
    for (var i = 0; i < A10.posten.length; i++) {
        if (A10.posten[i].art == "Beleuchtung") {
            var temp = [A10.posten[i].name, A10.posten[i].preis];
            A10.b.push(temp); //Push Def. -> The push() method adds new items to the end of an array, and returns the new length.
        }
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=side.js.map