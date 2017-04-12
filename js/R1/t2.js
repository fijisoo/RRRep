/**
 * Created by Dominik on 2017-03-22.
 */
var str = "<br />Wykonywanie operacji<br /> Operatory możemy podzielić na następujące grupy:" +
    "<ul>" +
    "<li>arytmetyczne</li>" +
    "<li>porówaniania(relacyjne)</li>" +
    "<li>bitowe</li>" +
    "<li>logiczne</li>" +
    "<li>przypisania</li>" +
    "<li>pozostałe</li>" +
    "</ul></ br>";

var mnozenie, dzielenie, dodawanie, odejmowanie, dzielenie_modulo;
mnozenie = 5 * 5;
dzielenie = 10 / 3;
dodawanie = 2 + 2;
odejmowanie = 2 - 4;
dzielenie_modulo = 10 % 3;

str += "<p> wybrane operacje: <br/>" +
    "dzielenie (10/3)=" + dzielenie;
str += "<br />dzielenie_modulo (10 % 3)=" + dzielenie_modulo;

var x = 10;
var y;
str += "<br /><br /> Operatory inkrementacji i dekrementacji <br />" +
    "Uzyskane wartosci: ";

str += x++ + " ";
str += ++x + " ";
str += x + " ";
y = x++;
str += y + " ";
y = ++x;
str += y;

///////////////////////////////////////////////////////////////////////////////////
var zmienna_float, zmienna_int;
str += "<br /><br />operatory porownywania<br />";

zmienna_float = 1;
zmienna_int = "1";
var porownanie_typow_wartosci = zmienna_float !== zmienna_int;
var porownanie_wartosci = zmienna_float != zmienna_int;


str += "typeof zmienna float: "
    + typeof(zmienna_float)
    + "<br />"
    + "typeof zmienna int: "
    + typeof(zmienna_int)
    + "<br />"
    + " wynik (1 !== \"1\"): "
    + porownanie_wartosci
    + "<br />"
    + " wynik (1 != \"1\"): "
    + porownanie_typow_wartosci
    + "<br />";


//////////////////////////////////////////////////////////////////////////////////////

var przesuniecie;

przesuniecie = 51 >> 1; //inaczej dzielenie przez 2 bez reszty

str += "<br /><br />Przesuniecie liczby 51 o jedno miejsce w prawo: " + przesuniecie + " <br />";

var dataDiv = document.getElementById("panel2");
dataDiv.innerHTML = str;