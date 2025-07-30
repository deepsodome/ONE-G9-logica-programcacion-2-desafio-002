//aviso para abrir consola
alert('Para poder ver los resultados..\ndebes abrir las herramientas del desarrollador \ny entrar al apartado -CONSOLA-.\n(Pulsa la tecla F12).')

//función 1 mensaje
function mostrarHola() {
  console.log("¡Hola, mundo!");     //muestra resultado en consola
}
//llama a funcion mostrarHola()
mostrarHola();

//función 2
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);     //muestra resultado en consola
}
//llama a funcion mostrarHolaNombre()
mostrarHolaNombre("Estudiante");

//función 3
function calcularDoble(numero) {
  return numero * 2;        //retorna multiplicación * 2
}
//llama a funcion calcularDoble()
let resultadoDoble = calcularDoble(50);     //crea variable y asigna valor 50
console.log(resultadoDoble);        //muestra resultado en consola

//función 4 calcula promedio
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;       //retorna cálculo de promedio 
}
//llama a funcion calcularPromedio()
let promedio = calcularPromedio(11, 22, 33);        //crea variable y asigna valores11,22,33
console.log(promedio);      //muestra resultado en consola


//función 5
function encontrarMayor(a, b) {
  return a > b ? a : b;     //compara a mayoa a b mostrar a, de lo contario mostrar b
}
//llama a funcion encontrarMayor()
let numeroMayor = encontrarMayor(150, 90);      //crea variable y asigna valores de 150 y 90
console.log(numeroMayor);          //muestra resultado en consola


//función 6
function cuadrado(numero) {
  return numero * numero;       //retorna cálculo
}
//llama a funcion cuadrado(numero)
let resultado = cuadrado(100);      //crea variable y asigna valor de 100
console.log(resultado);     //muestra resultado en consola