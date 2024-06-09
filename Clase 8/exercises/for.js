/*Pregunta 19*/
var array
array = ["lunes", "martes", "miercoles", "jueves", "viernes"];
for (i =0; i < array.length; i++){
    alert(array[i]);
}

/*Pregunta 20*/
var array, nuevo;
array = ["lunes", "martes", "miercoles", "jueves", "viernes"];
for (i =0; i < array.length; i++){
    nuevo = array[i].substring(0,1).toUpperCase() + array[i].substring(1).toLowerCase()
    alert(nuevo);
}

/*Pregunta 21*/
var array, sentence;
sentence ='';
array = ["lunes", "martes", "miercoles", "jueves", "viernes"];
for (i =0; i < array.length; i++){
    sentence += array[i] + ' ';
}
alert(sentence);

/*Pregunta 22*/
var array;
array = [];
for (i =0; i < 10; i++){
    array.push(i);
}
console.log(array);
