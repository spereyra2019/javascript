// JavaScript source code

/*
Ejercicio 2
Crear un funci�n que reciba un n�mero real y devuelva un n�mero entero con el valor:-
1, si el n�mero es negativo un valor 1, si el n�mero es positivo o si es cero un valor 0

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