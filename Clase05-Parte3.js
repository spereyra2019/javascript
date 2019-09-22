var i=0;
var incrementar="SI";

while (i<7){
incrementar=prompt("La cuenta esta en "+i+" incremento en uno?", "SI");
console.log("<br>Antes del if<br>");
console.log(i);

if (incrementar=="NO")
    continue;
i++;
console.log("<br>despues de if<br>");
console.log(i);
}
document.write (i);
document.write(incrementar);
console.log(i);