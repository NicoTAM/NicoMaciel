/*Pregunta 23*/
function Sumar(a, b){
    return a + b;
}
var num1, num2, resultado;
num1 = window.prompt('Ingrese un numero','0');
num2 = window.prompt('Ingrese un numero','0');
num1 = parseInt(num1);
num2 = parseInt(num2);
resultado = Sumar(num1,num2);
console.log(resultado);

/*Pregunta 24*/
function Sumar(a, b){
    if (isNaN(a) || isNaN(b)){
        alert('uno de los parametros tiene un error');
        return NaN;
    }
    return a + b;
}
var num1, num2, resultado;
num1 = window.prompt('Ingrese un numero','0');
num2 = window.prompt('Ingrese un numero','0');
num1 = parseInt(num1);
num2 = parseInt(num2);
resultado = Sumar(num1,num2);
console.log(resultado);

/*Pregunta 25*/
function ValidateInteger(a){
    return Number.isInteger(a);
}
var num1, num2;
num1 = 2;
num2 = 2.5;
console.log(Sumar(num1));
console.log(Sumar(num2));

/*Pregunta 26*/
function validateInteger(num) {
    return Number.isInteger(num);
}

function suma(a, b) {
    if (isNaN(a) || isNaN(b)){
        alert('uno de los parametros tiene un error');
        return NaN;
    }

    if (!validateInteger(a)) {
        alert('Error: el primer parámetro no es un entero, se redondeará');
        a = Math.round(a); 
    }

    if (!validateInteger(b)) {
        alert('Error: el segundo parámetro no es un entero, se redondeará');
        b = Math.round(b); 
    }

    return a + b;
}

let resultadoValido = suma(5, 3);
console.log(resultadoValido); 

let resultadoConDecimal = suma(5.7, 3.2);
console.log(resultadoConDecimal); 

let resultadoInvalido = suma(5, 'tres');
console.log(resultadoInvalido); 
