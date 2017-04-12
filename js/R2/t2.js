/**
 * Created by Dominik on 2017-03-22.
 */
str = "Obiekty w Javascripcie to JSON - JavaScript Object Notation. JSON to NOTACJA. Obiekty posiadają właściwości. Właściwościom nadaje się wartości do których odwołujemy się poprzez nazwę właściwości";

//POBIERANIE ZEWNĘTRZNEGO JSON'A ---------------------------------------------------------------------------------------------------------

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/R2/t2.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        return actual_JSON;
    });
}
init();
//END POBIERANIE ZEWNĘTRZNEGO JSON'A ---------------------------------------------------------------------------------------------------------


var osoba = {
    "imie":"Anna",
    "nazwisko":"Jakastam",
    "adres":{
        "ulica":"Malinowa 85",
        "miasto":"Gliwice"
    }
};

str += "<br />Dane odczytane z obiektu osoba:<br />";
str += "Imie: " + osoba.imie + "<br />";
str += "Nazwisko: " + osoba.nazwisko + "<br />";
str += "Adres ulica: " + osoba.adres.ulica + "<br />";
str += "Adres miasto: " + osoba.adres.miasto + "<br />";

//dodajemy właściwość

osoba.pesel = "94020535192";

str += "Peselik: " + osoba.pesel + "<br />";

osoba.pesel = "zmieniony: 93041424315";

str += "Peselik " + osoba['pesel'] + "<br />";

var punkt = {};

var właściwość1 = "zmienna_x";
var właściwość2 = "zmienna_y";

punkt[właściwość1] = 100;
punkt[właściwość2] = 200;

str += "Obiekt punkt: <br />";
str += "x: " + punkt['zmienna_x'] + ", y: " + punkt['zmienna_y'] + "<br />";

//FOR...IN

str += "Odczytajmy jeszcze raz za pomoca pętli for...in <br />";

for(var indeks in osoba){
    if(typeof osoba[indeks] != "string") continue;
    str += indeks + " = " + osoba[indeks] + "<br />";
}

str += "<br />FUNKCJE KTÓRE SĄ WŁĄŚCIWOŚCIĄ OBIEKTU TO METODY<br />";

osoba.przedstaw_sie = function(){
    str += "Czesc, jestem " + this.imie + " " + this.nazwisko + " :)<br />";
}

osoba.przedstaw_sie();

str += "Poniewaz takie funkcje czyli metody zwykle wykonują operacje na danych zawartych w obiekcie to muszą mieć do nich dostęp. Używa się do tego konstrukcji ze słowem this <br />";
str += "To waznie poniewaz w ten sposob odroznia sie właściwości obiektu od innych zmiennych (lokalnych badz globalnych).<br />";

str += "<br />Format JSON umożliwia także na definiowanie funkcji.<br />";

// {
//     definicje właściwości,
//     nazwa_funkcji : function () {
//         //definicja funkcji
//     }
// }

punkt.odleglosc = function(){
    return Math.sqrt(this.zmienna_x * this.zmienna_x + this.zmienna_y + this.zmienna_y);
}

str += "odleglosc x od y = " + punkt.odleglosc();

//ćwiczenia do samodzielnego wykonania
//zad 2 (zad 1 dotyczy dodania 2 właściwości do obiektu osoba)

str += "";

var obiekt = {};
var j = 10;

for(i = 0; i<5; i++){
    obiekt["dana" + i] = j;
    j += 10;
}

for(var zmienna in obiekt){
    str += "<br />zmienna - " + zmienna + ": " + obiekt[zmienna];
}

str += "<br />";


//zad3
//Utwórz obiekt zawierajacy 10 właściwości o nazwach zgodnych ze schematem LN, gdzie N to indeks od 1 do 10, a L to litera A dla indeksów
// parzystych i B dla nieparzystych (czyli nazwy kolejnych właściwości to B1, A2, B3, A4 itd.).
// Właściwościom o indeksach parzystych przypisz wartosc 0, a pozostalym - 1. Do utworzenia obiektu użyj pętli.

var zad3 ={};

for(i=1; i<11; i++){
    var zmienna;
    switch(true){
        case i%2 != 0:
            zmienna = "B"+i;
            zad3[zmienna] = 1;
            break;
        case i%2 == 0:
            zmienna = "A"+i;
            zad3[zmienna] = 0;
            break;
    }
}

for(var zmienna in zad3){
    str += zmienna + " = " + zad3[zmienna] + "<br />";
}


var divData = document.getElementById("panel2");
divData.innerHTML = str;


