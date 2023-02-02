const mongoose = require('mongoose');
// const dbUsuaris = require('../models/dbUsuari.js')


// mongoose.connect('mongodb://localhost:27017/dbUsuaris')

// const db = mongoose.connection;

// db.on('error', function (err) {
//     console.log('Connection error', err);
// });

// db.once('open', function () {
//     console.log('Connection to dbUsuaris successful!')
// })

const connectDB = async () => {
      try {

            const myDB = `${process.env.DB_TYPE}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
            // await mongoose.connect(myDB, {useNewUrlParser: true, useUnifiedTopology: true});
            mongoose.set('strictQuery', true);
            await mongoose.connect(myDB, {useNewUrlParser: true, useUnifiedTopology: true});
            console.log(`Connected to ${process.env.DB_NAME} DB`);

            // const myDB = `${process.env.DB_TYPE}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
            // await mongoose.connect(myDB);
            // // await mongoose('mongodb://localhost/myDB');
            // const db = mongoose.connection;
            // db.on('error', function (error) {
            //       console.log('connection error', error)
            //     })
                
            //     db.once('open', function () {
            //       console.log(`Connection to DB ${process.env.DB_NAME} successful`);
            //     })
                
            // console.log('connect to DB');
      } catch (error) {
            console.error(error);
      };
};

module.exports = connectDB;





// //? V
// const mongoose = require('mongoose');


// module.exports = async () => {
    
//     try {
//     let mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
//     await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
//     console.log(`Connected to ${process.env.DB_NAME} DB`);
    

//     } catch (err) {
//         console.log(err.message);
//     }
// }