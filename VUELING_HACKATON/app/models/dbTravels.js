const express = require("express");
const app = express();

require("dotenv").config();
const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Run the Sequelize code to connect to the database
const sequelize = new Sequelize(process.env.MYSQL_NAME, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: process.env.DATABASE,
});

async function connectionDB() {
      try {
          const connection = await mysql.createConnection({
              host: process.env.MYSQL_HOST,           // host: "localhost",
              user: process.env.MYSQL_USER,           // user: "root",
              password: process.env.MYSQL_PASSWORD,   // password: "1234",
          });
          
  
          // Run create database statement
          await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_NAME}`),
              (err, results) => {
                  console.log("Results:", results);
              }
      } catch (err) {
          console.log("Error:", err); //SI NO SE PUEDE CREAR LA DB
      }
};


connectionDB();
sequelize.authenticate()
    .then(() => {
        console.log("CONEXIÓ A LA BASE DE DADES OK");
    })
    .catch((error) => {
        console.log("EL ERROR DE CONEXIÓ ES: " + error);
    });
  

    //  Definim model  'TRAVELS':
const landTrip = sequelize.define("LandTrip", {
    idTravel: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    hotel1: {
        type: Sequelize.STRING,
        allowNull: true,
        
    },
    tiradesJugador: { type: Sequelize.INTEGER, defaultValue: 0 },
    tiradesGuanyades: { type: Sequelize.INTEGER, defaultValue: 0 },
    percentatgeExit: { type: Sequelize.INTEGER, defaultValue: 0 },
});
