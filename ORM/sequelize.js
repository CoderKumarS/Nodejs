const {Sequelize} = require('sequelize');
//Initialize sequelize with postgres database credentials
const sequelize = new Sequelize('todos', 'postgres', 'root',{
    host: 'localhost',
    dialect: 'postgres', //Specify the dialect for PostgreSQL
});
module.exports = sequelize;