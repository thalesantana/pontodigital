'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('times', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      worker_id :{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'workers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      day:{
        type: Sequelize.DATE,
        allowNull: true,
      },
      entry_time:{
        type: Sequelize.TIME,
        allowNull: true,
      
      },
      exit_time:{
        type: Sequelize.TIME,
        allowNull: true,
      },
      lunch_entry:{
        type: Sequelize.TIME,
        allowNull: true,
      },
      lunch_return:{
        type: Sequelize.TIME,
        allowNull: true,
      },
      location:{
        type: Sequelize.STRING,
        allowNull: true,
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
     await queryInterface.dropTable('times');
  }
};

