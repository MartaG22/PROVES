// Carregar classes Jugador i Joc
var Jugador = require('./Jugador');
var Joc = require('./Jocs');

// Construeix una aplicació que creï diversos Jugadors
let jugador1 = new Jugador (`Alex`);
let jugador2 = new Jugador (`Pepe`);
let jugador3 = new Jugador (`Paco`);
let jugador4 = new Jugador (`Joan`);
let jugador5 = new Jugador (`lluis`);

// Crear 2 Jocs
let joc1 = new Joc (`Poker`);
let joc2 = new Joc (`Remigio`);

// Els jugadors podran ser afegits a un Joc
jugador1.afegirAlJoc(`Poker`);
jugador2.afegirAlJoc(`Poker`);
jugador3.afegirAlJoc(`Poker`);
jugador4.afegirAlJoc(`Poker`);
jugador5.afegirAlJoc(`Poker`);

jugador1.afegirAlJoc(`Remigio`);
jugador2.afegirAlJoc(`Remigio`);
jugador3.afegirAlJoc(`Remigio`);

//  L'aplicació ha de poder afegir o treure punts a cada jugador perquè el marcador canviï.
jugador1.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);
jugador2.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);
jugador3.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);
jugador4.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);
jugador5.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);


jugador1.afegeixPunts(Math.round(Math.random() * 20) + 5, `Remigio`);
jugador2.afegeixPunts(Math.round(Math.random() * 20) + 5, `Remigio`);
jugador3.afegeixPunts(Math.round(Math.random() * 20) + 5, `Remigio`);

// els jocs mostraran un marcador amb les puntuacions i el guanyador
joc1.mostrarPuntuacio();
joc2.mostrarPuntuacio();


// console.log(marcador.jocs)