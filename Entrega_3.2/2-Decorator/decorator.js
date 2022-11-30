const fs = require("fs");
const readDivises = fs.readFileSync("./divises.json");
const taulaFactorsConversio = JSON.parse(readDivises);

function conversioDivisa(producte) {

    let conversioPreuEUR = 0;
    let divisaInicial = producte.divisa;

    let factorConversio = taulaFactorsConversio[divisaInicial + "_EUR"];
    conversioPreuEUR = (producte.preu * factorConversio).toFixed(2);
    producte.preuEuros = conversioPreuEUR;
    return producte;

};

module.exports = conversioDivisa;