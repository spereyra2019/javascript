// JavaScript source code
/*

Ejercicio 4
Realice un botón que llame una función sumar 
*/

function sumarDosValores() {

    var n1 = document.getElementById("txtValue1").value;
    var n2 = document.getElementById("txtValue2").value;

    if ((n1) && (n2)){
        document.getElementById("resultado").innerHTML = Number.parseFloat(n1) + Number.parseFloat(n2);
        alert("El resultado es: " + (Number.parseFloat(n1) + Number.parseFloat(n2)));
    }
    else
        alert("Los valores no pueden estar vacios.");
}