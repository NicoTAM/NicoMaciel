/*Pregunta 17*/
var num;
num = Math.random(0,1);
if (num >= 0.5){
    alert('Greater than 0,5');
}
else{
    alert('Lower than 0,5');
}
console.log(num);

/*Pregunta 18*/
var Age;
Age = Math.floor(Math.random() * 101);
if (Age < 2) {
    alert("Bebé");
} else if (Age >= 2 && Age <= 12) {
    alert("Niño");
} else if (Age >= 13 && Age <= 19) {
    alert("Adolescente");
} else if (Age >= 20 && Age <= 30) {
    alert("Joven");
} else if (Age >= 31 && Age <= 60) {
    alert("Adulto");
} else if (Age >= 61 && Age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}
console.log(Age);