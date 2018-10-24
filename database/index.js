const Sequelize = require('sequelize');
const connection = new Sequelize('adidas', 'root', 'hayden', {
    host: 'localhost',
    dialect: 'mysql'
})

connection
    .authenticate()
    .then(() => {
        console.log('Connection to sql database successful!');
    })
    .catch(err => {
        console.log('Unable to connect to database: ', err);
    });

module.exports.connection = connection;