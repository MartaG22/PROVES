# Sprint 3.1: Patterns 1

## 💬 Descripció:

Els patrons de disseny són solucions a problemes recurrents en la construcció del software. Hi ha una gran quantitat de patrons de software catalogats, i en aquest sprint n'aprendrem alguns dels més importants en Node.js.
Utilitza l'intèrpret de node en tots els casos


## ⭐ Nivell 1:

**Callback Hell**

El codi adjunt llegeix un fitxer situat en un directori **inbox** i escriu el seu contingut invertit en un altre fitxer al directori **outbox**. Reestructura i simplifiqui el codi existent per a evitar el denominat **Callback Hell.**


## ⭐⭐ Nivell 2:

**Singleton**

Construeix una aplicació que creï diversos Jugadors/es. Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a. L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï. La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.


## ⭐⭐⭐ Nivell 3:

**Observer**

Escriu una aplicació que creï diferents objectes Usuari/ària. L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells. Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge). Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul **events**.