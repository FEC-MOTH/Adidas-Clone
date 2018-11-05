require('dotenv').config()
const Sequelize = require('sequelize');
// TODO source these attributes from a .env file

const connection = new Sequelize(process.env.DB_NAME_DEVELOPMENT, process.env.DB_USER_DEVELOPMENT, process.env.DB_PASS_DEVELOPMENT, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})


// connection
//     .authenticate()
//     .then(() => {
//         console.log('Connection to sql database successful!');
//     })
//     .catch(err => {
//         console.log('Unable to connect to database: ', err);
//     });


module.exports.connection = connection;