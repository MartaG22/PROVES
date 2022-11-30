const fs = require('fs');
const Calculadora = require('./calculadora.js');
const Middleware = require('./middleware.js');

let data = fs.readFileSync('./nombres.json');
let nombres = JSON.parse(data);
console.log(nombres);
// console.log(nombres.num1);

const calculadora = new Calculadora;
const middleware = new Middleware;


//!OMAR
middleware.use((data, next) => {
    data.num1 = data.num1 ** 2;
    data.num2 = data.num2 ** 2;
    
    console.log( "sdaf",data.num1, data.num2);
    next();
});

//! Els següents estan malament:
middleware.use(calculadora.restar);
middleware.use(calculadora.multiplicar);



// middleware.use(funcions(nombres, next) {
//     console.log(`El resultat de la suma és ${funcions(nombres)}`);

// })



// let quadratNum1 = nombres.num1 * nombres.num2;
// let quadratNum2 = nombres.num2 * nombres.num2;
// // console.log(nombres.num1,quadratNum1)
// let quadratNombres = [quadratNum1, quadratNum2];
// console.log(`Els nombres al quadrat: ${quadratNombres}`);

middleware.run(calculadora.sumar, nombres)
middleware.run(calculadora.restar, nombres)
middleware.run(calculadora.multiplicar,nombres )



console.log(`El resultat de la suma és ${calculadora.sumar(nombres)}`);
console.log(`El resultat de la resta és ${calculadora.restar(nombres)}`);
console.log(`El resultat de la multiplicació és ${calculadora.multiplicar(nombres)}`);
console.log(middleware.funcio);
middleware.use(nombres);
