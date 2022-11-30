// - Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).




// Vale, Marta, t'estàs complicant MOLT!
// Hauries de tenir dues classes: la calculadora (amb les funcions matemàtiques) i la de middlewares (amb el gestor de MW).
// Primer instanciaras la classe calculadora i la de middlewares, afegiràs els middlewares a la classe (amb un mètode de l'estil "middlewares.use(funció)" )
// i llavors executaràs els middlewares amb la funció objectiu i les dades (P.e: middlewares.run(calculadora.sumar, dades) ).

// La classe de middlewares guardarà les dades i les passarà per tots els middlewares definits amb use i al final les passarà a la funció calculadora.sumar.
// Demà ho parlem una mica més a classe si vols ;)



class Middleware {
    constructor() {
        this.funcio = [];
        this.data = [];
    }
    // pasarNumeros(numeros){
    //     this.numeros = [];
    // }
    use(fn) {
        this.funcio.push(fn);
    }
    run(funcio, data) {
        // let result = funcio(data)
        // console.log(result)
        // console.log(`El resultat de la suma és ${result}`);
        // console.log(`El resultat de la resta és ${result}`);
        // console.log(`El resultat de la multiplicació és ${result}`);

    }
}

module.exports = Middleware;