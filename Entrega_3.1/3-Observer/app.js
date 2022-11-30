const Usuari = require("./usuari.js");
const Tema = require("./tema.js");



// Afegim Temes:
const tema1 = new Tema("Blau");
const tema2 = new Tema("Groc");


// Afegim Usuaris:
const usuari1 = new Usuari("Pepito");
const usuari2 = new Usuari("María");
const usuari3 = new Usuari("Juanito");


// Afegim subscriptors als Temes  - Notifiques - Donem de baixa:
tema1.subscripcio(usuari1);
tema1.subscripcio(usuari2);
tema2.subscripcio(usuari3);

tema1.notificacio(tema1, `AQUEST ÉS EL PRIMER MISSATGE DEL TEMA ${tema1.nomTema}`);
tema2.notificacio(tema2, `AQUEST ÉS EL PRIMER MISSATGE DEL TEMA ${tema2.nomTema}`);

tema1.treureSubscripcio(usuari1);
tema1.treureSubscripcio(usuari2);
tema2.treureSubscripcio(usuari1);

tema2.subscripcio(usuari1);
tema1.notificacio(tema1, `AQUEST ÉS EL SEGON MISSATGE DEL TEMA ${tema1.nomTema}`);
tema2.notificacio(tema2, `AQUEST ÉS EL SEGON MISSATGE DEL TEMA ${tema2.nomTema}`);
