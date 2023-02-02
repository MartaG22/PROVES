#     📢📢  Entrega 5.1: XAT  -  amb SOCKET.IO
---
## 📝 Descripció:

### Construïm un Xat!!!



Necessitarem socket.io, una biblioteca de JavaScript per a aplicacions web en temps real. Permet la comunicació bidireccional en temps real entre clients i servidors web. Té dues parts: una biblioteca del costat del client que s'executa en el navegador i una biblioteca del costat del servidor per a Node.js. 


## ⭐ Nivell 1:

Crea una aplicació que mostri una pàgina de login on l'usuari/ària pugui entrar a una sala de xat (el client i el server han d'estar completament separats). Obrint la mateixa URL en una altra finestra del navegador podrem fer login amb un altre usuari/ària. Verifica que estan en la mateixa sala i permet que xategin. Afegeix la possibilitat de crear múltiples sales de xat i gestiona la persistència amb MongoDB (amb Mongoose) o MySQL (amb Sequelize).


## ⭐⭐ Nivell 2:

Afegeix autentificació utilitzant Google Token (google-auth-library)

```
```
## ⭐⭐⭐ Nivell 3:

Per superar aquest nivell pots afegir diferents opcions:

- Afegeix qualsevol funcionalitat que vegis útil.

- Afegeix la personalització del frontend que vulguis.

- Realitza el frontend amb algun framework (React, Vue, Angular).

- Efectua el projecte amb TypeScript.


<br></br>

#  Per començar!!!  


Projecte realitzat amb les següents tecnologies:

- **BACK-END:**    NodeJs - Express - Mongoose - Socket.io 
- **FRRONT-END:**  HTML  -  CSS  -  JavaScript
<br></br>
## 🛠️ Instal·lar:

> **Step 1** - Clonar el projecte:
```
https://github.com/MartaG22/nodeInitialDemo/tree/Xat

```
> **Step 2** - Instal·lar les dependències necessàries:
> 
Per poder executar el projecte, hem de tenir dues carpetes:
- La part del **CLIENT**, corresponent al **FRONT-END**
- La part del **SERVER**, corresponent al **BACK-END**


**PER AL BACK-END:**

S'ha d'accedir a la carpeta **SERVER** del projecte des de la terminal i després instal·lar les dependències:
```
cd SERVER
npm install
```

Se'ns instal·laran les següents dependències:
 - **Express** -- per consumir les REST-API.
 - **Mongoose** -- com ORM, per poder utilitzar la base de dades de Mongo en nodejs.
 - **Dotenv** -- ens permet carregar les variables d'entorn
 - **Cors**  -- per permetre accedir a la part del FRONT-END
 - **Jsonwebtoken** -- per crear un token de l'usuari
 - **Bcrypt  /  Bcryptjs** -- per encriptar/desencriptar la contrassenya de l'usuari
 - **Socket.io** -- ens permet fer la comunicació en temps real, basada en events.
  
<br>Executem el comando per inicialitzar el servidor del **SERVER** i la base de dades amb **Mongodb** </br>
```
npm start  -->  Per executar el projecte com a usuari
npm run dev -->  Per executar com a desenvolupador
```
El server s'inicialitzarà al PORT 3000.
<br>
3

**PER AL FRONT-END:**

S'ha d'accedir a la carpeta **CLIENT** del projecte des de la terminal i instal·lar les dependències:
```
cd CLIENT
npm install
```

Se'ns instal·laran les següents dependències a la part del CLIENT:
 - **Dotenv** -- ens permet carregar les variables d'entorn
 - **Express** -- per consumir les REST-API.
 - **Path**  -- ens pertet controlar les rutes de la part del FRONT-END



Per inicialitzar el servidor a la part del CLIENT: 



```
npm start  -->  Per executar el projecte
npm run dev -->  Per executar com a desenvolupador
```
<br>
La URL per poder obrir el <b>XAT</b> pel navegador és <b>http://localhost:8080</b>
