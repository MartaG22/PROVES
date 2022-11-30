class Usuari {
    constructor(nomUsuari) {
        this.nomUsuari = nomUsuari;
        console.log(`S'ha creat l'usuari ${this.nomUsuari}`);
    };
    buzon(tema, missatge) {
        console.log(`Usuari # ${this.nomUsuari}  >>>  Ha rebut un nou missatge:  >>>>  ${missatge}`);
    };
};

module.exports = Usuari;
