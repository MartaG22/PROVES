const amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', (error0, connexio) => {
    if (error0) {
        throw error0;
    }

    connexio.createChannel((error1, canal) => {
        if (error1) {
            throw error1;
        };

        const cua = 'PEPITO';

        canal.assertQueue(cua, {
            durable: false
        });

        console.log(`CLIENT > Rebent missatge del Publisher => ${cua}`);

        canal.consume(cua, (missatge) => {
            console.log(`CLIENT > Rebut missatge => ${missatge.content.toString()}`);
        })
    })
})
