// JavaScript source code

/*
Hacer un script que pregunte nombre, edad (mediante la palabra reservada de JavaScript
“prompt”). y como resultado debe mostrar los días que ha vivido esa persona.
*/

var nombreIngresado = prompt("Ingrese su nombre >");
var edad = parseInt(prompt("Ingrese su edad > "));

if (Number.isInteger(edad) && edad > 0) {
    alert(nombreIngresado + " has vivido " + cantidadDiasVividos(edad) + " dias!");
    document.write("<div>" + "<p>" + nombreIngresado + " has vivido " + cantidadDiasVividos(edad) + " dias!" + "</p>" + "</div>");
} else
    alert("Su edad debe ser un valor entero y mayor a 0.");

function cantidadDiasVividos(anosPersona) {
    return anosPersona * 365;
} 