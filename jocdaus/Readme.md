# 🎲🎲    Entrega 4.2: Node REST + DB + JWT   
---
## 💬 Descripció:

### Construirem una API que doni suport a un joc de daus ;)

```
```

**Al joc de daus s’hi juga amb dos daus de sis cares:**

En cas que el resultat dels dos daus sigui 7 la partida es guanya, si no es perd.

Per poder jugar al joc t’has de registrar com a jugador/a amb un nom. Un jugador/a pot veure un llistat de totes les tirades que ha fet i el seu percentatge d’èxit.

Per poder realitzar una tirada, un usuari/ària s’ha de registrar amb un nom no repetit. Al ser creat, se li assigna un identificador únic i una data de registre.

Si l’usuari/ària ho desitja, pot no afegir cap nom i es dirà “ANÒNIM”. Pot haver-hi més d’un jugador/a “ANÒNIM”.

Cada jugador/a pot veure un llistat de totes les tirades que ha fet amb el valor de cada dau i si s’ha guanyat o no la partida. A més, pot saber el percentatge d’èxit de les tirades que ha fet.

No es pot eliminar una partida en concret, però sí que es pot eliminar tot el llistat de tirades d'un jugador/a. El software ha de permetre llistar tots els jugadors/es que hi ha al sistema, el percentatge d’èxit de cada jugador/a i el percentatge d’èxit mitjà de tots els jugadors/es en el sistema.

El software ha de respectar els principals patrons de disseny.

Has de tenir en compte els següents **detalls de construcció**:
```
```
## ⭐ Nivell 1:


**Persistència**: utilitza com a base de dades **MySQL** (amb **Sequelize** com a ORM).


```
```
## ⭐⭐ Nivell 2:

**Exercici 1**

**Persistència**: utilitza **MongoDB** (amb **Mongoose**) com a base de dades.

```
```
## ⭐⭐⭐ Nivell 3:

**Exercici 1**

Afegeix un endpoint **/login** que permeti accedir a un administrador amb usuari/ària i contrasenya i retorni un **token** i fes obligatòria l'autentificació per **JWT** en tots els accessos als URL del microservei, fent servir middlewares per validar al token.

---
```
```
## 💻 Requeriments:
S'han d'instal·lar les següents tecnologies:

- [Node.js](https://nodejs.org/en/download/) 
- [NPM](https://www.npmjs.com/) 


##  Per començar!!!  
### 🛠️ Instal·lar:

> **Step 1** - Clonar el projecte:
```

https://github.com/MartaG22/nodeInitialDemo/tree/jocdaus
```


> **Step 2** - Instal·lar les dependències necessàries:

```
- npm install
```
Utilitzarem les següents dependències:

Per executar el projecte amb **Sequelize**:
 - **Express** -- per consumir les REST-API.
 - **MySql** -- per la base de dades.
 - **Sequelize** -- com ORM, per poder utilitzar la base de dades de Mysql en nodejs.

Per executar el projecte amb **Mongoose**:
 - **Express** -- per consumir les REST-API.
 - **Mongoose** -- com ORM, per poder utilitzar la base de dades de Mongo en nodejs.



> **Step 3** - Inicialitzar el server 
<<<<<<< HEAD
=======
Per executar el projecte amb **Sequelize**:
npm run mysql --> Per executar amb la base de dades MySql.
npm run mongo --> Per executar amb la base de dades Mongo.
>>>>>>> ff0b3e88da8449df88aa5ccfca4be0418ca18471

### - Iniciar el server amb Mysql:

**npm run mysql**

### - Iniciar el server amb mongo:

**npm run mongo**

```
```


## Endpoints

- **POST /players**  --  Crea un jugador (el nom no pot estar repetit) i està permès introduir el nom com a 'ANÒNIM'.
- **PUT /players/:id** -- Modifica el nom d'un jugador.
- **GET /players** -- Retorna el llistat dels jugadors, amb el seu percentatge d'èxit. 
- **POST /game/:id** -- Un jugador realitza una tirada dels daus.
- **DELETE /game/:id** -- S'esborren totes les jugades d'un jugador.
- **GET /game/:id** -- Retorna un llistat de les tirades d'un jugador, amb el seu percentatge d'èxit.
- **GET /ranking** -- Retorna el llistat de jugadors, ordenats per percentatge d'èxit i el percetatge d'èxit mitjà de tots ells.
- **GET /ranking/loser** -- Retorna el jugador perdedor, amb el pitjor percentatge d'èxit.
- **GET /ranking/winner** -- Retorna el jugador guanyador, amb el millor percentatge d'èxit.
