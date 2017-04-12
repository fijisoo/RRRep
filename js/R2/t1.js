/**
 * Created by Dominik on 2017-03-22.
 */

var str = " FUNKCJE GLOBALNE";

str += "<br />" + "parseInt(str[, podstawa]) pozwala na zmianę ciągu znaków na wartośc całkowitą. Opcjonalny argument \" podstawa \" pozwala na ustalenie podstawy systemu liczbowego, może przyjmowac wartosci od 2 do 36. W przypadku kiedy argument \" podsatwa \" zostanie pominięty lub będzie miał wartość 0, przyjęte zostaną następujące zasady: <br />"
    + "jezeli ciag str rozpoczyna sie od znakow 0x bedzie traktowany jako wartosc szesnastkowa" +
    "<br /> jezeli ciag str rozpoczyna sie od 0 to ósemkowa <br />" +
    "jezeli nie zachodza poprzednie przypadki to dziesietna";

str += "<br />funkcja zwróci NaN - Not a Number gdy nie bedzie z przedzialu 2 - 36";

//encodeURIComponent przeksztalca ciag str w taki sposob aby byl poprawnym identyfikatorem zasobow. Kodowanie odbywa sie poprzez zamiane wybranych znakow na odpowiadajace im sekwencje zgodne z kodowaniem UTF-8. W przeciwienstwie do metody encodeURI, kodowane sa rowniez znaki :,/,;,?.
var zakoduj_mnie_$ = encodeURIComponent("$");
console.log("zakodowany $ :" + zakoduj_mnie_$ + "  |odkodowany $ : " + decodeURIComponent(zakoduj_mnie_$));

console.log("eval w praktyce: " + eval(Math.E));

console.log("is finite math pi? "+ isFinite(Math.PI) + " is finite pow 2 , 8 ?" + isFinite(Math.pow(2,8)) + " is finite \"2014\"? " + isFinite('2014')+ " is finite \"abc\" ? " + isFinite('abc'));

console.log("escape(janus     z) - ITS DEPRECATED!!!!(odwrotnosc unescape()       ->    " + escape("janus    z"));

console.log("isNan() zwraca false jezeli parametr przedstawia wartosc liczbowa [isNan(5), isNan(\"5\") + isNan('abc')]    " + isNaN(5) + " " + isNaN('5') + " " + isNaN('abc'));

console.log()
var dataDiv = document.getElementById("panel2");
dataDiv.innerHTML = str;