// HOISTING
const myAge = 18;
// Scopes

function myfunction() {
  // function scope
  const hola = "hola holita hola";
  console.log(myAge); // esto si funciona porque la variable está en el global scope
}

// console.log(hola); // esto no funciona

var myName = "Gonzalo";

var myName = "Bernardo";

console.log(myName);

const myCity = "Barcelona";

// const myCity = "Paris"; // ERROR

// HOISTING Es el proceso que sigue JS cuando ejecuta el código
// ANTES DE EJECUTARLO lo lee

sum(13, 20);

function sum(a, b) {
  console.log("RESULT DE SUM: ", a + b);
}
marcel = "student";

// var marcel = "teacher";

const subtract = (a, b) => {
    console.log("LA RESTA ES IGUAL A: ", a - b);
};

subtract(10, 2);