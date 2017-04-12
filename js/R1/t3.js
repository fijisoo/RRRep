/**
 * Created by Dominik on 2017-03-22.
 */
//OPERATOR WARUNKOWY
var str = "Jeżeli warunek jest prawdziwy, podstaw za wartość całego wyrażenia wartość 1, w przeciwnym przypadku za wartość wyrażenia podstaw wartość2 </br >";
var wartosc = 21;

var liczba = wartosc%2 == 0 ? "parzysta" : "nieparzysta";

str += "liczba " + wartosc + " jest " + liczba + "<br /> bo " + wartosc +"%2 = " +  wartosc%2;

//Pętle:
//for - for(wyrazenie poczatkowe; wyrazenie warunkowe; wyrazenie modyfikujące){ instrukcja do wykonania }
//for...in
//while
//do...while

str += "if, if...else, if...else if...else, <br />switch(wyrazenie){ <br />case wartosc1 :<br /> instrukcje: <br /> break; <br /> default : <br /> instrukcje ; }";

str += "<hr />";
str += "<BR />SWITCH W PRZYKLADZIE: <BR />";

var i = 0;
for(;i<10;i++){
    switch(i%2){
        case 0 :
            str += "liczba podzielna przez 2: " + i + "<br />";
            break;
        case 1 :
            str += "liczba nieparzysta: " + i + "<br />";
            break;
        default:
            str += "liczba dziwna: " + i + "<br />";
            break;
    }
}

str += "<hr />";








var dataDiv = document.getElementById("panel2");
dataDiv.innerHTML = str;