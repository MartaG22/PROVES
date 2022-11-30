class Tema {
    constructor(nomTema) {
        this.nomTema = nomTema;
        this.usuaris = [];
    };


    subscripcio(usuari) {
        if (this.usuaris.includes(usuari)) {
            console.log(`L'usuari ${usuari.nomUsuari} ja està subscrit al tema ${this.nomTema}`);
        } else {
            console.log(`S'ha donat d'alta la subscripció al tema ${this.nomTema} de l'usuari ${usuari.nomUsuari}`);
            this.usuaris.push(usuari);
        };
    };


    treureSubscripcio(usuari) {
        if (this.usuaris.includes(usuari)) {
            this.usuaris = this.usuaris.filter((item) => item != usuari);
            console.log(`S'ha donat de baixa la subscripció al tema ${this.nomTema} de l'usuari ${usuari.nomUsuari}`);
        } else {
            console.log(`L'usuari ${usuari.nomUsuari} no està donat d'alta al tema ${this.nomTema}`);
        }
    };


    notificacio(event, missatge) {
        this.usuaris.forEach((item) => {
            item.buzon.call(item, event, missatge);
        });
    };
};

module.exports = Tema;
