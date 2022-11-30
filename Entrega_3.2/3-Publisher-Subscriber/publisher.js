// Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber.
// Mostra l'emissió i recepció de cada missatge en consoles diferents.

// https://www.netmentor.es/entrada/patron-productor-consumidor
// https://morioh.com/p/8bc4fb039a9a
// https://stackfull.dev/design-patterns-in-javascript-publish-subscribe-or-pubsub-1


// ==> npm install amqplib  ==> Per instal·lar el mòdul amqp


// https://www.youtube.com/watch?v=jmxsswls0jk&t=259s
// https://jackfiallos.com/comunicando-microservicios-en-nodejs-usando-rabbitmq-y-amqplib


const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (error0, connexio) => {
    if (error0) {
        throw error0;
    }
    connexio.createChannel((error1, canal) => {
        if (error1) {
            throw error1;
        }

        const cua = "PEPITO";
        const missatges = [
            `Hola! \nAquest és el primer missatge de ${cua}`,
            'Aquest és el segon missatge de la llista!',
            'Aquest és un altre missatge',
            `Aquest és el quart missatge i l'últim de la cua ${cua}!!!`
        ];

        canal.assertQueue(cua, {
            durable: false
        });

        let count = missatges.length;
        let nombreRandom = Math.floor(Math.random() * count);

        canal.sendToQueue(cua, Buffer.from(missatges[nombreRandom]));
        console.log(`SERVER > Sent > ${missatges[nombreRandom]}`);

    });

    setTimeout(function () {
        connexio.close();
        process.exit(0)
    }, 500);
});
