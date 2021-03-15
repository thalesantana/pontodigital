const Sequelize = require('sequelize');
const dbConfig = require ('../config/database');

const Worker = require('../Models/Worker')

const connection = new Sequelize(dbConfig);

Worker.init(connection);

module.exports = connection;