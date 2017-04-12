/**
 * Created by Dominik on 2017-03-22.
 */
var str = "FUNKCJE I ZASIEG ZMIENNYCH";

function wyswietl() {
    alert("pierwszy komunikat");
    return;
    alert("drugi komunikat");
}
//wyswietl();


// var liczba = 100;
// function abc(liczba){
//     liczba = 200;
//     alert(liczba);
// }
// alert("liczba = " + liczba);
// abc(liczba);
// alert("liczba = " + liczba);

//napisz funkcję której dwa pierwsze argumenty będą określały operandy a trzeci rodzaj wykonywanego działania.
// W zależności od stanu trzeciego argumentu funkcja ma zwrocic sume, roznice, iloczyn, iloraz lub reszte z dzielenia pierwszego i drugiego

function sriir(x, y, type){
    switch(type){
        case "sum":
            return x + y;
            break;
        case "subtract":
            return x - y;
            break;
        case "divide":
            return x / y;
            break;
        case "multiply":
            return x * y;
            break;
        case "rest":
            return x % y;
            break;
        default:
            return "wrong type";
            break;
    }
}

str += "<br />Zadanie 1";
liczba1 = 15;
liczba2 = 6;
str += "suma : " + sriir(liczba1,liczba2,"sum") + " <br />";
str += "odejmowanie : " + sriir(liczba1,liczba2,"subtract") + " <br />";
str += "dzielenie : " + sriir(liczba1,liczba2,"divide") + " <br />";
str += "mnożenie : " + sriir(liczba1,liczba2,"multiply") + " <br />";
str += "reszta z dzielenia : " + sriir(liczba1,liczba2,"rest") + " <br />";


//Napisz funkcje która przyjmuje dwa argumenty liczbowe i zwraca większy z nich. Wykonaj dwa warianty ćwiczenia. Wpierwszym użyj operatora warunkowego,
// w drugim - nie używaj go

function czywieksza(l1, l2){
    return l1 > l2 ? l1 : l2;
}

str += "<br /> Zadanie 2 <br />";
str += "z liczb: " + liczba1 + " oraz " + liczba2 + " większa jest " + czywieksza(liczba2, liczba1);

// Napisz funkcje przyjmujaca trzy argumenty stanowiace parametry rownania kwadratowego. Wyswielt w oknie dialogowym wszystkie rozwiazania tego rownania,
// informacje o braku rozwiazania lub tez, jesli parametry nie okreslaja rownania kwadratowego komunikat o tym.

function kwadratowa(a, b ,c){
    delta = (b * b) - (4 * a * c);
    switch(true){
        case delta > 0:
            return alert("x1: " + ((-b + Math.sqrt(delta))/ 2 * a ) + " x2: " + ((-b - Math.sqrt(delta))/ 2 * a ));
            //console.log("x1: " + ((-b + Math.sqrt(delta))/ 2 * a ) + " x2: " + ((-b - Math.sqrt(delta))/ 2 * a ));
            break;
        case delta == 0:
            return alert("x1: " + (- b / ( 2 * a )));
            break;
        case delta < 0:
            return alert("brak miejsc zerowych");
            break;
        default:
            console.log("ej cos nie gra: " + delta);
            break;
    }
}
// kwadratowa(5,4,2);
// kwadratowa(2,4,5);
// kwadratowa(1,7,-5);

//Napisz funkcje potega podnoszaca pierwszy jej argument do potegi calkowitej dodatniej okreslonej przez drugi argument.
// Funkcja powinna zwracac wynik potegowania. Przykladowo wywolanie potega(2,8) powinnno dac w wyniku 256 (nie uzywaj obiektu math)

str += "<br /> Zadanie 4 <br />";

var licz1 = 2;
var licz2 = 8;

function potega(a,b){
    var licz = a;
    var i = 1;
    while(i<b){
        licz = a * licz;
        str += "<br />"+ i + " .... " + a;
        i++;
    }
    return licz;
}

str += licz1 + " do potegi " + licz2 + " = " + potega(licz1,licz2);


// Napisz funkcje przyjmujaca dwa argumenty i zwracajaca ich roznice, gdy pierwszy jest nieujemny lub ich sume gdy pierwszy jest ujemny.
// Obliczenie sumy i roznicy powinno zostac wykonane przez pomocnicze funkcje wewnetrzne

function czek(liczb1, liczb2){
    function summ(a, b){
        return a + b;
    }
    function sub(a, b){
        return a - b;
    }
    if(liczb1 >= 0){
        return sub(liczb1,liczb2);
    }else{return summ(liczb1,liczb2)}
}

console.log(czek(-5,3) + " " + czek(0,3) + " " + czek(5,3));

var dataDiv = document.getElementById("panel2");
dataDiv.innerHTML = str;