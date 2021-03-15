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
      image:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
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
        defaultValue: "00:00:00",
      },
      exit_time:{
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: "00:00:00",
      },
      lunch_entry:{
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: "00:00:00",
      },
      lunch_return:{
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: "00:00:00",
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('workers');
  }
};
