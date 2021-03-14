'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('workers', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      tel:{
        type: Sequelize.BIGINT(11),
        allowNull: false,
      },
      ocupation:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      entry_time:{
        type: Sequelize.TIME,
        allowNull: false,
      },
      exit_time:{
        type: Sequelize.TIME,
        allowNull: false,
      },
      lunch_entry:{
        type: Sequelize.TIME,
        allowNull: false,
      },
      lunch_return:{
        type: Sequelize.TIME,
        allowNull: false,
      },
      creted_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('workers');
  }
};
