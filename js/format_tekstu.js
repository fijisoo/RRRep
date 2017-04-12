/**
 * Created by Dominik on 2017-03-19.
 */

var str = "<b>Tekst pogrubiony</b><br />" +
        "<i>Kursywa</i><br />" +
        "<u>podkreslenie</u><br />" +
        "Indeks <sup>gorny</sup><br />" +
        "Indest <sub>dolny</sub><br />";
var dataDiv = document.getElementById("operacje");
dataDiv.innerHTML = str;
