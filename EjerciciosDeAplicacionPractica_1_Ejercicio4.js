// JavaScript source code
/*
Hacer un script para calcular la longitud de una circunferencia(L=2. pi.radio), se debe
pedir el radio con el comando prompt
*/


var radio = parseInt(prompt("Ingresar el radio de la circunsferencia (en cm) >"));

if (Number.isInteger(radio) && radio > 0) {
    alert("La longitud de la circunsferencia es de " + calcularLongitudCfa(radio) + " cm.");
    document.write("<div>" + "<p>" + " La longitud de la circunsferencia formada por el radio ingresado es de " + calcularLongitudCfa(radio) + " cm." + "</p>" + "</div>");
} else
    alert("El valor del radio ingresado debe ser entero y mayor a 0. ");

function calcularLongitudCfa(radio) {
    return (2 * Math.PI * radio).toFixed(2);;
}