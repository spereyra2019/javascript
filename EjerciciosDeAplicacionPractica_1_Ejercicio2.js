// JavaScript source code
/*
Ejercicio 2
El factorial de un número entero n es una operación matemática que consiste en
multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5
(escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número
entero.
*/

var numeroFactorial = parseInt(prompt("Ingresa el numero del cual quieras saber el factorial > "));
var resultado = 1;
if (Number.isInteger(numeroFactorial)) {
    if (numeroFactorial > 0) {
        for(var i = 1; i <= numeroFactorial; i++){
            resultado *= i;
        }
        alert(resultado);
        document.write("<p align='left'>El valor ingresado fue: " + numeroFactorial + "</p>");
        document.write("<p align='left'>El factorial del valor ingresado es: " + resultado + "</p>");
    } else
        alert("El valor ingresado debe ser mayor a 0.");
} else
    alert("El valor ingresado debe ser un numero entero.");

