/**
 * Created by Dominik on 2017-03-22.
 */
var str = "FUNKCJE, KONSTRUKTORY, PROTOTYPY";

var zmienna = function (arg) {
    return 2 * arg;
}

console.log(zmienna(8));
//////////////////////////////////////
var f1 = function(arg){
    arg();
}

var f2 = function(){
    console.log('Jestem funkcją f2');
}

f1(f2);

//Praktyczne uzycie

var suma = function(arg1, arg2){
    return arg1 + arg2;
}

var roznica = function(arg1, arg2){
    return arg1 - arg2;
}

function oblicz(arg1, arg2, dzialanie){
    var wynik = dzialanie(arg1,arg2);
    return wynik;
}

var wynik1 = oblicz(10,5,suma);
var wynik2 = oblicz(10,5,roznica);

console.log("pierwszy wynik to: " + wynik1 + ", a drugi to: " + wynik2);








var divData = document.getElementById('panel2');
divData.innerHTML = str;