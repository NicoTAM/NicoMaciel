/*Pregunta 4*/
var palabra, mayuscula;
palabra = window.prompt("Introduzca una palabra", "0");
if (palabra.length <=10){
    alert('Ingrese una palabra que tenga al menos 10 caracteres');
    return;
}
mayuscula = palabra.toUpperCase();
console.log(mayuscula);

/*Pregunta 5*/
var palabra, nuevapalabra;
palabra = window.prompt("Introduzca una palabra", "0");
if (palabra.length <=10){
    alert('Ingrese una palabra que tenga al menos 10 caracteres');
    return;
}
nuevapalabra = palabra.substring(0,5);
console.log(nuevapalabra);

/*Pregunta 6*/
var palabra, nuevapalabra;
palabra = window.prompt("Introduzca una palabra", "0");
if (palabra.length <=10){
    alert('Ingrese una palabra que tenga al menos 10 caracteres');
    return;
}
nuevapalabra = palabra.substring((palabra.length)-3);
console.log(nuevapalabra);

/*Pregunta 7*/
var palabra, nuevapalabra;
palabra = window.prompt("Introduzca una palabra", "0");
if (palabra.length <=10){
    alert('Ingrese una palabra que tenga al menos 10 caracteres');
    return;
}
nuevapalabra = (palabra.substring(0,1)).toUpperCase() + (palabra.substring(1)).toLowerCase();
console.log(nuevapalabra);

/*Pregunta 8*/
var palabra, nuevapalabra;
palabra = window.prompt("Introduzca una palabra", "0");
if (palabra.length <=10){
    alert('Ingrese una palabra que tenga al menos 10 caracteres');
    return;
}
nuevapalabra = palabra.indexOf(" ");
console.log(nuevapalabra);

/*Pregunta 9*/
var palabra, nuevapalabra;
palabra = 'presidente internacional'
nuevapalabra = ((palabra.substring(0,1)).toUpperCase() + (palabra.substring(1,palabra.indexOf(' '))).toLowerCase()) + ' ' + ((palabra.substring(palabra.indexOf(' ')+1,palabra.indexOf(' ')+2)).toUpperCase() + (palabra.substring(palabra.indexOf(' ')+2)).toLowerCase());
console.log(nuevapalabra);