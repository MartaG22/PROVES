const mongoose = require('mongoose');

const connectDB = async () => {
      try {

            const myDB = `${process.env.DB_TYPE}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
            mongoose.set('strictQuery', true);
            await mongoose.connect(myDB, {useNewUrlParser: true, useUnifiedTopology: true});
            console.log(`Connected to ${process.env.DB_NAME} DB`);

      } catch (error) {
            console.error(error);
      };
};

module.exports = connectDB;


