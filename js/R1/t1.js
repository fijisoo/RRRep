/**
 * Created by Dominik on 2017-03-19.
 */
var str = "Instrukcje </br >czyli inaczej polecenia do wykonania. Ciąg instrukcji - ciąg poleceń do wykonania. Polecenia sa interpretowane przez przeglądarkę, a ściślej przez interpreter - aparat wykonawczy JavaScriptu. Każdą instrukcję powinniśmy zakończyć znakiem średnika.";
str += "</br > Zmienna </br > to miejsce w skrypcie w którym mozna przechowywać dane: liczby, napisy itd. Każde z takich miejsc posiada swoją unikalną nazwę. Każda zmienna charakteryzuje się również typem, który określa rodzaj danych.";
str += "</br >Kwestia nazewnictwa zmiennych. zmienna może zawierać: litery, cyfry, znak dolara i znak podkreślenia. Może składać się także z polskich znaków diaktrytycznych(polskie litery). Wolno stosować zarówno małe jak i wielkie litery ale są one rozróżnialne. Nazwa zmiennej nie może zaczynać się od cyfry.";
str += "</br > Typy danych </br > to inaczej rodzaj danych. Typ całoliczbowy to liczby całkowite. Rodzaje typów: <b>liczbowy, łańcuchowy, logiczny, obiektowy, specjalny</b>";
str += "<br />W typach liczbowych :JEŻELI LITERAŁ ROZPOCZYNA SIĘ OD CYFRY 0 jest traktowany jako wartość ósemkowa, jeżeli literał zaczyna się od znaków 0x jest traktowany jako wartość szesnastkowa.";
str += "<br />W typach łańcuchowych: <br />"+
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Tekst pogrubiony</b><br />" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Kursywa</i><br />" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>podkreslenie</u><br />" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indeks <sup>gorny</sup><br />" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indest <sub>dolny</sub><br />";

str += "Sekwencje znakow specjalnych: <br /> backspace \b backspace <br />" +
    "new line \n new line <br />" +
    "powrot karetki \r powrot karetki <br />" +
    "nowa strona \f nowa strona <br />" +
    "tabulacja \t tabulacja <br />" +
    "cudzyslow \" cudzyslow <br />" +
    "apostrof \' apostrof <br />" +
    "lewy ukosnik \\ lewy ukosnik <br />";


var dataDiv = document.getElementById("panel2");
dataDiv.innerHTML = str;