/*Transforma esta declaración de función a una función de expresión.*/

function example(a, b, c) {
    return a + b + c
}

/* utilizando la sintaxis de funciones de flecha (arrow functions): */

const example = (a, b, c) => a + b + c;

const resultado = example(1, 2, 3);
console.log(resultado);