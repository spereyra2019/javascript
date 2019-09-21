// JavaScript source code
/*
Ejercicio 1
Crear una función que calcule cual es el número mayor de dos números enteros

*/

var n1 = 100;
var n2 = 200;

function whichIsMayor(v1, v2) {

    if (v1 == v2)
        return "El valor " + v1 + " es igual a " + v2;
    else if (v1 > v2) {
        return "El valor " + v1 + " es mayor a " + v2;
    } else {
         return "El valor " + v1 + " es menor a " + v2;
    }
}