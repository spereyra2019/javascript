var palabra1 = "Hola mundo";
var palabra2 = "Estamos programando en JS";
var numero = 23;
var boleano = true;
var boleana = false;

if(window.console){
    //muestro por pantalla
    document.write("<h1>Ejemplos de c&oacute;digo JS</h1>");
    //muestro por consola
    console.log = "Este es un mensaje de consola";
    console.error(palabra1);    // mensaje de error en js
    console.warn(palabra2);     // mensaje de advertencia en js
    console.info(numero);       // mensaje de información en js
    console.info(boleano);     // mensaje de información en js
    console.error(boleana);   // mensaje de error en js
    //muestro por pantalla las variables
    document.write("La variable palabra1 tiene el valor: "+palabra1+"<br>");
    document.write("La variable palabra2 tiene el valor: "+palabra2+"<br>");
    document.write("La variable numero tiene el valor: "+numero+"<br>");
    document.write("La variable boleano tiene el valor: "+boleano+"<br>");
    document.write("La variable boleana tiene el valor: "+boleana+"<br>");
    
    function inialert()
        alert("esta es una ventana emergente");
        
    alert("esta es otra ventana");
    
}