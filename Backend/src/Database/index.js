const Sequelize = require('sequelize');
const dbConfig = require ('../config/database');

const Times = require('../Models/times');
const Worker = require('../Models/Worker');
const Admins = require('../Models/Admin');

const connection = new Sequelize(dbConfig);

Worker.init(connection);
Times.init(connection);
Admins.init(connection);

Times.associate(connection.models);

module.exports = connection;