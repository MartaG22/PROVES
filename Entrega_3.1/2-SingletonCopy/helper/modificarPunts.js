function modificarPunts() {
    console.log("!2342423423423")
    let punts = 0;
    let restarSumarPunts = parseInt(Math.random() * 2);

    (restarSumarPunts == 0) ? punts = -2 : punts = 3;       // Si restarSumarPunts = 0 --> RESTEM 2 PUNTS // Si Si restarSumarPunts = 1 --> SUMEM 3 PUNTS
    return punts;
}

module.exports = modificarPunts;