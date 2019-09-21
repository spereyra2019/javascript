// JavaScript source code

/*
Ejercicio 2
Crear un función que reciba un número real y devuelva un número entero con el valor:-
1, si el número es negativo un valor 1, si el número es positivo o si es cero un valor 0

*/

function recibeRealRetornaEnteroNegativo(numero) {

    if (Number.parseFloat(numero)) {
        if (numero < 0)
            return -1;
        else if (numero > 0) {
            return 1;
        }else{
            return 0;
        }    
    }
}