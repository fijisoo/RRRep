/**
 * Created by Dominik on 2017-03-22.
 */
var str = "PĘTLE <br/>";

//////////////////////////////////////////////////
str += "WHILE(i<10) W PRZYKLADZIE: ";

var z = 0;
while(z < 10){
    str += "<br />Wyliczanka " + z;
    z++;
}

str += "<hr />";
///////////////////////////////////////////////////
str += " WHILE(i++<10) W PRZYKLADZIE: ";

z = 0;
while(z++ < 10){
    str += "<br />Wyliczanka " + z;
}

str += "<hr />";
///////////////////////////////////////////////////
str += "DO WHILE(i++<10) W PRZYKLADZIE: ";

z = 0;
do{
    str += "<br />Wyliczanka " + z;
} while (z++ < 10)

str += "<hr />";
///////////////////////////////////////////////////
str += " WHILE(i<0) W PRZYKLADZIE: ";

z = 0;
while(z < 0){
    str += "<br />Wyliczanka " + z;
}

str += "<hr />";
///////////////////////////////////////////////////
str += "DO WHILE(i<0) W PRZYKLADZIE: ";

z = 0;
do{
    str += "<br />Wyliczanka " + z;
} while (z < 0)

str +=" <br />Petla for...in pozwala na odczytanie wartosci oraz nazw wlasciwosci obiektow(w tym rowniez tablic). Ma schematyczna postac: for(var nazwa in obiekt){instrukcje}";

str += "<hr />";
///////////////////////////////////////////////////
str += "ZAGNIEŻDŻANIE PĘTLI: <br />";


for (i = 0; i < 3 ; i++){
    for(j=0;j<3; j++){
        str += i + " " + j;
        str += "<br />";
    }
    str += "<hr />";
}

str += "<hr />";
///////////////////////////////////////////////////
str += "PRZERYWANIE PĘTLI: <br />";

i = 0;
while(i++<10){
    str += "while do 10 przerywamy po 5 - " + i + "<br />";
    if(i == 5) break;
}

str += "<hr />";
///////////////////////////////////////////////////
str += "KONTYNUOWANIE PĘTLI: <br />";

i = 0;
while(i++<10){
    if(i % 2 == 0) continue; // pamietaj o tym zeby umiescic continue w miejscu w ktorym chcesz aby kolejny kod iteracji zostal pominiety
    str += "while do 10 przechodzimy do kolejnej iteracji dla parzystych- " + i + "<br />";
}



var dataDiv = document.getElementById("panel2");
dataDiv.innerHTML = str;