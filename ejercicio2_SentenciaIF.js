var numero1 = prompt("Ingrese el valor de numero1");
var numero2 = prompt("Ingrese el valor de numero2");
if(numero1 <= numero2) 
 alert("numero1 no es mayor que numero2");

if(numero2 > 0) 
 alert("numero2 es positivo");

if(numero1 < 0) 
 alert("numero1 es negativo o distinto de cero");

numero1++;	
if(numero1 < numero2) 
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
